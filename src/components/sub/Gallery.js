import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';
import Modal from '../common/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Gallery() {
	const dispatch = useDispatch();
	const Items = useSelector((store) => store.galleryReducer.gallery);
	console.log(Items);
	const openModal = useRef(null);
	const frame = useRef(null);
	const enableEvent = useRef(true);
	const counter = useRef(null);
	const firstLoaded = useRef(true);

	const [Loader, setLoader] = useState(true);
	const [Index, setIndex] = useState(0);
	// const [Mounted, setMounted] = useState(true);

	useEffect(() => {
		counter.current = 0;
		if (Items.length === 0 && !firstLoaded.current) {
			setLoader(false);
			frame.current.classList.add('on');
			enableEvent.current = true;
			return alert('이미지 결과값이 없습니다');
		}
		firstLoaded.current = false;

		const imgs = frame.current.querySelectorAll('img');
		imgs.forEach((img) => {
			img.onload = () => {
				++counter.current;

				if (counter.current === imgs.length - 2) {
					setLoader(false);
					frame.current.classList.add('on');
					enableEvent.current = true;
				}
			};
		});
	}, [Items]);

	useEffect(() => {
		dispatch({ type: 'SET_GALLERY', payload: Items });
	}, [Items, dispatch]);

	return (
		<>
			<Layout
				name={'Gallery'}
				txt={
					'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
				}
			>
				<>
					<ul className='wrap on' ref={frame}>
						<Masonry elementType={'div'} options={{ transitionDuration: '0.5s' }}>
							{Items.map((item, idx) => {
								return (
									<li key={idx}>
										<div>
											<div
												className='pic'
												onClick={() => {
													openModal.current?.open();
													setIndex(idx);
													console.log(openModal);
												}}
											>
												<img
													src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
													alt={item.title}
												/>
											</div>
											<p>{item.title === '' ? 'Have a good day!!' : item.title}</p>

											<div className='profile'>
												<img
													src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
													alt={item.owner}
													onError={(e) =>
														e.target.setAttribute(
															'src',
															'https://www.flickr.com/images/buddyicon.gif'
														)
													}
												/>
												<span className='userid'>{item.owner}</span>
											</div>
										</div>
									</li>
								);
							})}
						</Masonry>
					</ul>
					{Loader && (
						<img
							className='loading'
							src={`${process.env.PUBLIC_URL}/img/circle.svg`}
							alt='loader'
						/>
					)}
				</>
			</Layout>
			<Modal ref={openModal}>
				<img
					src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
					alt={Items[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Gallery;
