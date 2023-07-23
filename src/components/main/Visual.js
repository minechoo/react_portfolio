import { memo } from 'react';
function Visual() {
	return (
		<section id='wrap_first' className='myScroll'>
			{/* <video src={process.env.PUBLIC_URL + '/img/vid.mp4'} loop autoPlay muted></video> */}

			<div className='txt_main'>
				<h2>Join our team</h2>
				<p>Work and be tourself !</p>
				<div className='txt_round'>
					<p>Open Positions</p>
					<span>4</span>
				</div>
			</div>
		</section>
	);
}
export default memo(Visual);
