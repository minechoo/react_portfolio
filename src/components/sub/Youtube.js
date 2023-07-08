import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function Youtube() {
	const modal = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);

	const fetchYoutube = async () => {
		const key = 'AIzaSyANMdnk7q2cBX8tqGJZXpVFH9bGJMOwmEc'; //api 키
		const list = 'PLMafzyXZ12TPBYgeplFEdJeSMcJvb3v5u'; //class 브라우저 상단값
		const num = 8;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;

		const result = await axios.get(url);
		setVids(result.data.items);
	};
	useEffect(() => {
		fetchYoutube();
	}, []);
	return (
		<>
			<Layout
				name={'Youtube'}
				txt={
					'tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.'
				}
			>
				{Vids.map((vid, idx) => {
					let number = idx + 1;
					return (
						<article key={idx}>
							<div>
								<div className='number'>.0{number}</div>
								<h2>
									{vid.snippet.title.length > 50
										? vid.snippet.title.substr(0, 50) + '...'
										: vid.snippet.title}
								</h2>
								<p>
									{vid.snippet.description.length > 100
										? vid.snippet.description.substr(0, 100) + '...'
										: vid.snippet.description}
								</p>
								<span>{vid.snippet.publishedAt.split('T')[0].split('-').join('.')}</span>
								<div
									className='pic'
									onClick={() => {
										modal.current.open();
										setIndex(idx);
									}}
								>
									<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
								</div>
							</div>
						</article>
					);
				})}
			</Layout>
			<Modal ref={modal}>
				<iframe
					title={Vids[Index]?.id}
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
