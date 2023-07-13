import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {
	const Members = useSelector((store) => store.memberReducer.members);
	return (
		<footer>
			<div className='content'>
				<div className='left_box'>
					<h1>
						<Link to='/'>MOBILE</Link>
					</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nisi exercitationem quod aliquid</p>
					<p>{`This Institude was established by ${Members[0]?.name} in 1995`}</p>
					<ul className='sns'>
						<li>
							<i className='fa-brands fa-twitter'></i>
						</li>
						<li>
							<i className='fa-brands fa-facebook-f'></i>
						</li>
						<li>
							<i className='fa-brands fa-apple'></i>
						</li>
						<li>
							<i className='fa-solid fa-play'></i>
						</li>
					</ul>
				</div>
				<div className='right_box'>
					<div className='right_box_inner'>
						<h2>COMPANY</h2>
						<div className='line_deco'></div>
						<ul>
							<li>About us</li>
							<li>Features</li>
							<li>Privacity police</li>
							<li>Terms & Conditions</li>
						</ul>
					</div>
					<div className='right_box_inner'>
						<h2>SUPPORT</h2>
						<div className='line_deco'></div>
						<ul>
							<li>FAQ</li>
							<li>Contact us</li>
							<li>Live Chat</li>
							<li>Phone call</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
