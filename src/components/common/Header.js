import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
	const active = 'on';
	return (
		<header>
			<h1>
				<Link to='/'>MOBILE</Link>
			</h1>
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

			<button className='close_button' id='close_button'>
				Close Menu<span></span>
				<span></span>
			</button>

			<FontAwesomeIcon icon={faBars} />
		</header>
	);
}

export default Header;
