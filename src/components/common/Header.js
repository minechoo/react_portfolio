import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
	const active = 'on';
	const menu = useRef(null);
	const gnb = useRef(null);
	const btnG = useRef(null);
	const body = document.querySelector('body');

	useEffect(() => {
		menu.current.addEventListener('click', () => {
			gnb.current.classList.remove('off');
			gnb.current.classList.add('on');
			body.style.overflow = 'hidden';
		});

		btnG.current.addEventListener('click', () => {
			gnb.current.classList.remove('on');
			gnb.current.classList.add('off');
			body.style.overflow = 'auto';
		});
	}, []);

	return (
		<header>
			<h1>
				<Link to='/'>MOBILE</Link>
			</h1>
			<div className='gnb_wrap' ref={gnb}>
				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeClassName={active}>
							Department
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeClassName={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeClassName={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeClassName={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact' activeClassName={active}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to='/member' activeClassName={active}>
							Member
						</NavLink>
					</li>
				</ul>

				<button className='close_button' id='close_button' ref={btnG}>
					Close Menu<span></span>
					<span></span>
				</button>
			</div>

			<div id='menu' ref={menu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
