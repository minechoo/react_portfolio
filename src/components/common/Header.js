import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { toggle } from '../../redux/menuSlice';
import { useDispatch } from 'react-redux';

function Header({ type, menu }) {
	const active = 'on';
	const dispatch = useDispatch();

	return (
		<>
			<header>
				<h1>
					<Link to='/'>MOBILE</Link>
				</h1>
				<div className='gnb_wrap'>
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

					{/* <button className='close_button' id='close_button'>
						Close Menu<span></span>
						<span></span>
					</button> */}
				</div>

				<div id='menu'>
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							dispatch(toggle());
						}}
					/>
				</div>
			</header>

			{/* <Menu ref={toggleMenu} /> */}
		</>
	);
}

export default Header;
