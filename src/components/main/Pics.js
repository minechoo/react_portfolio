import { useFlickrQuery } from '../../hooks/useFlickerQuery';

function Pics({ Scrolled, Pos }) {
	const { data: Items, isSuccess } = useFlickrQuery({ type: 'user', user: '194260994@N06' });
	//console.log(Scrolled);
	return (
		<section id='gallery' className='myScroll'>
			<h1>Perks &amp; Benefits</h1>
			<div className='img_box'>
				{isSuccess &&
					Items.map((item, idx) => {
						if (idx >= 4) return null;
						return (
							<figure key={idx}>
								<div className='circle' key={idx}>
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
			;
		</section>
	);
}

export default Pics;
