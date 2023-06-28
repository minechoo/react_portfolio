import { Link, NavLink } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div class='content'>
				<div class='left_box'>
					<h1>
						<Link to='/'>MOBILE</Link>
					</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nisi exercitationem quod aliquid</p>
					<ul class='sns'>
						<li>
							<i class='fa-brands fa-twitter'></i>
						</li>
						<li>
							<i class='fa-brands fa-facebook-f'></i>
						</li>
						<li>
							<i class='fa-brands fa-apple'></i>
						</li>
						<li>
							<i class='fa-solid fa-play'></i>
						</li>
					</ul>
				</div>
				<div class='right_box'>
					<div class='right_box_inner'>
						<h2>COMPANY</h2>
						<div class='line_deco'></div>
						<ul>
							<li>About us</li>
							<li>Features</li>
							<li>Privacity police</li>
							<li>Terms & Conditions</li>
						</ul>
					</div>
					<div class='right_box_inner'>
						<h2>SUPPORT</h2>
						<div class='line_deco'></div>
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
