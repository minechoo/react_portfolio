import { useSelector } from 'react-redux';

function Pics({ Scrolled, Pos }) {
	const { flickr } = useSelector((store) => store.flickrReducer);
	//console.log(flickr);
	// console.log(Scrolled);
	return (
		<section id='gallery' className='myScroll'>
			{/* <h1 style={{ transform: `translateX(${Scrolled - Pos}px)` }}>FLICKER</h1> */}
			<h1>Perks &amp; Benefits</h1>
			<div className='img_box'>
				{flickr.map((pic, idx) => {
					if (idx >= 4) return null;
					return (
						<figure key={pic.id}>
							<div className='circle'>
								<img
									src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
									alt={pic.title}
								/>
							</div>
							<figcaption>{pic.title}</figcaption>
							<p>{pic.id}</p>
						</figure>
					);
				})}
			</div>
		</section>
	);
}

export default Pics;
