import { memo } from 'react';
import { useSelector } from 'react-redux';

function Vids() {
	const youtube = useSelector((store) => store.youtubeReducer.youtube);
	console.log(youtube);
	return (
		<>
			<section id='things' className='myScroll'>
				<div className='big_txt'>C</div>
				<div className='content'>
					<div className='content_txt'>
						<h1>
							Careers at <span>Mobilex</span>
						</h1>
						<span className='line_deco'></span>
						<p className='ex'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos officia nam
							placeat eveniet molestiae? Dolorum id omnis, mollitia similique laboriosam, doloremque
							blanditiis itaque labore laudantium explicabo rem reprehenderit vel!
						</p>
						<p className='ex it'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae corrupti
							mollitia dolor repellendus quia reiciendis, quisquam tempora asperiores ducimus.
						</p>
					</div>
				</div>
				<section id='youtube'>
					{youtube.map((vid, idx) => {
						if (idx >= 4) return null;
						return (
							<div className='con'>
								<img
									key={vid.id}
									src={vid.snippet.thumbnails.standard.url}
									alt={vid.snippet.title}
								/>
							</div>
						);
					})}
				</section>
			</section>
		</>
	);
}
export default memo(Vids);
