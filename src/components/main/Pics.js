import { memo } from 'react';
import { useSelector } from 'react-redux';

function Pics({ Scrolled, Pos }) {
	// console.log(Scrolled);
	const Items = useSelector((store) => store.galleryReducer.gallery);

	return (
		<section id='gallery' className='myScroll'>
			{/* <h1 style={{ transform: `translateX(${Scrolled - Pos}px)` }}>FLICKER</h1> */}
			<h1>Perks &amp; Benefits</h1>
			<div className='img_box'>
				{Items.map((item, idx) => {
					if (idx >= 4) return null;
					return (
						<figure key={idx}>
							<div className='circle'>
								<img
									src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
									alt={item.title}
								/>
							</div>
							<figcaption>{item.title === '' ? 'Have a good day!!' : item.title}</figcaption>
							<p>{item.owner}</p>
							<span className='line_deco bottom'></span>
						</figure>
					);
				})}
			</div>
		</section>
	);
}

export default memo(Pics);
