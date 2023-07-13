import { memo } from 'react';
function Banner() {
	return (
		<section id='banner' className='myScroll'>
			<div className='content'></div>
		</section>
	);
}

export default memo(Banner);
