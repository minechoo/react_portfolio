import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';

function News() {
	const dummy = [
		{ title: 'Hello6', content: 'Here comes description in detail.' },
		{ title: 'Hello5', content: 'Here comes description in detail.' },
		{ title: 'Hello4', content: 'Here comes description in detail.' },
		{ title: 'Hello3', content: 'Here comes description in detail.' },
		{ title: 'Hello2', content: 'Here comes description in detail.' },
		{ title: 'Hello1', content: 'Here comes description in detail.' },
	];
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data) return JSON.parse(data);
		else return dummy;
	};
	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []);

	return (
		<section id='news' className='myScroll'>
			<div className='content'>
				<h1>MY POSSIBILITES</h1>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
				<div className='txt_box'>
					{Posts.map((post, idx) => {
						if (idx >= 4) return null;
						return (
							<dl className='txt_inner' key={idx}>
								<dt>{post.title}</dt>
								<dd>{post.content}</dd>
							</dl>
						);
					})}
				</div>
				<div className='contact'>
					<div className='contect_title'>
						<h2>Front-end Developer</h2>
						<button>Apply</button>
					</div>
					<div className='area_3'>
						<div className='area_inner'>
							<FontAwesomeIcon icon={faTimeline} />
							<h3>About this job</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe aliquam amet in,
								fugit obcaecati.
							</p>
						</div>
						<div className='area_inner'>
							<FontAwesomeIcon icon={faUsersRectangle} />
							<h3>Tool we use</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe aliquam amet in,
								fugit obcaecati.
							</p>
							<ul>
								<li>javascript</li>
								<li>vue</li>
								<li>react</li>
							</ul>
						</div>
						<div className='area_inner'>
							<FontAwesomeIcon icon={faRectangleList} />
							<h3>Potential tasks</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe aliquam amet in,
								fugit obcaecati.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default News;
