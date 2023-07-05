import React from 'react';
import { useEffect, useRef } from 'react';

function Layout({ name, children, txt = 'Default' }) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);
	return (
		<>
			<section className={`content ${name}`} ref={frame}>
				<div className='inner_top'>
					<div className='txt_box'>
						<span>MEETOUR</span>
						<h1>{name}</h1>
						<p className='ex_p'>{txt}</p>
					</div>
				</div>
				<div className='content_wrap'>{children}</div>
			</section>
		</>
	);
}

export default Layout;
