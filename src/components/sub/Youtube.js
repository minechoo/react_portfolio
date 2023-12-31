import { useState, useRef, useEffect } from 'react';
import Layout from '../common/Layout';
import Modal from '../common/Modal';
import { useYoutubeQuery } from '../../hooks/useYoutubeQuery';

function Youtube() {
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	const [Mounted, setMounted] = useState(true);
	const { data: Vids, isSuccess } = useYoutubeQuery();

	useEffect(() => {
		return () => setMounted(false);
	}, []);

	return (
		<>
			<Layout
				name={'Youtube'}
				txt={
					'tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.'
				}
			>
				{isSuccess &&
					Mounted &&
					Vids.map((vid, idx) => {
						let number = idx + 1;
						return (
							<article key={idx}>
								<div>
									<div className='number'>.0{number}</div>
									<h2>{vid.snippet.title.length > 50 ? vid.snippet.title.substr(0, 50) + '...' : vid.snippet.title}</h2>
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
					title={isSuccess && Vids[Index]?.id}
					src={`https://www.youtube.com/embed/${isSuccess && Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
