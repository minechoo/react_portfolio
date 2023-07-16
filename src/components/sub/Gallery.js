import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';
import Modal from '../common/Modal';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../../redux/actionType';

function Gallery() {
	const dispatch = useDispatch();
	const Items = useSelector((store) => store.flickrReducer.flickr);
	const openModal = useRef(null);
	const isUser = useRef(true);
	const searchInput = useRef(null);
	const btnSet = useRef(null);
	const enableEvent = useRef(true);
	const frame = useRef(null);
	const counter = useRef(null);
	const firstLoaded = useRef(true);

	const [Loader, setLoader] = useState(true);
	const [Index, setIndex] = useState(0);
	const [Opt, setOpt] = useState({ type: 'user', user: '194260994@N06' });

	const resetGallery = (e) => {
		const btns = btnSet.current.querySelectorAll('button');
		btns.forEach((el) => el.classList.remove('on'));
		e.target.classList.add('on');
		enableEvent.current = false;
		setLoader(true);
		frame.current.classList.remove('on');
	};

	const showInterest = (e) => {
		//재이벤트, 모션중 재이벤트 방지
		if (!enableEvent.current) return;
		if (e.target.classList.contains('on')) return;

		//기존 갤러리 초기화 함수 호출
		resetGallery(e);

		//새로운 데이터로 갤러리 생성 함수 호출
		setOpt({ type: 'interest' });
		isUser.current = false;
	};

	const showMine = (e) => {
		if (!enableEvent.current) return;
		if (e.target.classList.contains('on')) return;

		resetGallery(e);
		setOpt({ type: 'user', user: '194260994@N06' });
	};

	const showSearch = (e) => {
		const tag = searchInput.current.value.trim();
		if (tag === '') return alert('검색어를 입력하세요');

		if (!enableEvent.current) return;
		resetGallery(e);
		setOpt({ type: 'search', tags: tag });
		searchInput.current.value = '';
		isUser.current = false;
	};

	//setOpt({type: 'search', tags: 'landscape'})

	useEffect(() => setOpt({ type: 'user', user: '194260994@N06' }), []);
	// useEffect(() => setOpt({ type: 'interest' }), []);

	useEffect(() => {
		dispatch({ type: types.FLICKR.start, opt: Opt });
	}, [Opt, dispatch]);

	useEffect(() => {
		console.log(Items);
		counter.current = 0;
		if (Items.length === 0 && !firstLoaded.current) {
			setLoader(false);
			frame.current.classList.add('on');
			const btnMine = btnSet.current.children;
			btnMine[1].classList.add('on');
			setOpt({ type: 'user', user: '194260994@N06' });
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

	return (
		<>
			<Layout
				name={'Gallery'}
				txt={
					'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
				}
			>
				<>
					<div className='searchBox'>
						<div className='search'>
							<label htmlFor='search'></label>
							<input
								type='text'
								id='search'
								name=''
								defaultValue=''
								placeholder='검색어를 입력하세요'
								ref={searchInput}
								onKeyPress={(e) => e.key === 'Enter' && showSearch(e)}
							/>
							<button className='btn_search' onClick={showSearch}>
								Search
							</button>
						</div>

						<div className='btnSet' ref={btnSet}>
							<button className='btnInterest' onClick={showInterest}>
								Interest Gallery
							</button>
							<button className='btnMine on' onClick={showMine}>
								My Gallery
							</button>
						</div>
					</div>

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
												<span
													className='userid'
													onClick={(e) => {
														if (isUser.current) return;
														isUser.current = true;
														setLoader(true);
														frame.current.classList.remove('on');
														setOpt({ type: 'user', user: e.target.innerText });
													}}
												>
													{item.owner}
												</span>
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
