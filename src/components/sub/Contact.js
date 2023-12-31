import Layout from '../common/Layout';
import { useRef, useEffect, useState, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faLocationDot, faCommentSms } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	const [Traffic, setTraffic] = useState(false);
	const [Location, setLocation] = useState(null);
	const [Index, setIndex] = useState(0);
	const [Success, setSuccess] = useState(false);

	const container = useRef(null);
	const inputName = useRef(null);
	const inputEmail = useRef(null);
	const inputMessage = useRef(null);

	const { kakao } = window;
	const info = useRef([
		{
			title: '본점',
			latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker.png`,
			imgSize: new kakao.maps.Size(70, 60),
			imgPos: { offset: new kakao.maps.Point(15, 60) },
		},
		{
			title: '지점 A',
			latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker.png`,
			imgSize: new kakao.maps.Size(70, 60),
			imgPos: { offset: new kakao.maps.Point(15, 60) },
		},
		{
			title: '지점 C',
			latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker.png`,
			imgSize: new kakao.maps.Size(70, 60),
			imgPos: { offset: new kakao.maps.Point(15, 60) },
		},
	]);

	const marker = useMemo(() => {
		return new kakao.maps.Marker({
			position: info.current[Index].latlng,
			image: new kakao.maps.MarkerImage(
				info.current[Index].imgSrc,
				info.current[Index].imgSize,
				info.current[Index].imgPos
			),
		});
	}, [Index, kakao]);

	//email
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_gvvhk36', 'template_dtqpmbl', form.current, 'J8tG7AbQZVM2JAujR').then(
			(result) => {
				console.log(result.text);
				setSuccess(true);
				inputName.current.value = '';
				inputEmail.current.value = '';
				inputMessage.current.value = '';
			},
			(error) => {
				console.log(error.text);
				setSuccess(false);
			}
		);
	};
	//email
	useEffect(() => {
		container.current.innerHTML = '';

		const mapInstance = new kakao.maps.Map(container.current, { center: info.current[Index].latlng, level: 3 });

		marker.setMap(mapInstance);

		mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
		mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);

		const setCenter = () => {
			mapInstance?.setCenter(info.current[Index].latlng);
		};

		window.addEventListener('resize', setCenter);
		setLocation(mapInstance);

		mapInstance.setZoomable(false);

		return () => window.removeEventListener('resize', setCenter);
	}, [Index, kakao, marker]);

	useEffect(() => {
		Traffic
			? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic, Location, kakao]);

	return (
		<Layout
			name={'Contact'}
			txt={
				'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at quis risus sed.'
			}
		>
			<section className='map_wrap'>
				<div id='map' ref={container}></div>
			</section>
			<div className='btn_map_wrap'>
				<button className='btnToggle' onClick={() => setTraffic(!Traffic)}>
					{Traffic ? 'Traffic on' : 'Traffic off'}
				</button>
				<ul className='branch'>
					{info.current.map((el, idx) => {
						return (
							<li key={idx} className={idx === Index ? 'on' : ''} onClick={() => setIndex(idx)}>
								{el.title}
							</li>
						);
					})}
				</ul>
			</div>

			<article className='contact'>
				<div className='form_box'>
					<form ref={form} onSubmit={sendEmail}>
						<div className='input_area'>
							<div className='input_inner'>
								<label>Name</label>
								<input type='text' name='user_name' ref={inputName} />
							</div>
							<div className='input_inner'>
								<label>Email</label>
								<input type='email' name='user_email' ref={inputEmail} />
							</div>
						</div>
						<div className='text_area'>
							<label>Message</label>
							<textarea name='message' rows='10' ref={inputMessage} />
							<div className='t_center'>
								<input type='submit' className='btn_submit' value='Send' />
							</div>
						</div>
						{Success && <p className='red'>메일이 성공적으로 발송되었습니다</p>}
					</form>
				</div>

				<div className='us_wrap'>
					<div className='us_contact'>
						<h2>Call Us</h2>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, magnam.</p>
						<div className='icon_wrap'>
							<div className='icon_box'>
								<FontAwesomeIcon icon={faHeadphones} />
							</div>
							<span>031-000-0000</span>
						</div>
					</div>
					<div className='us_contact'>
						<h2>Visit Us</h2>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, aliquid et!.</p>
						<div className='icon_wrap'>
							<div className='icon_box'>
								<FontAwesomeIcon icon={faLocationDot} />
							</div>
							<span>exercitationem quod aliquid</span>
						</div>
					</div>
					<div className='us_contact'>
						<h2>Live Chat</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam.</p>
						<div className='icon_wrap'>
							<div className='icon_box'>
								<FontAwesomeIcon icon={faCommentSms} />
							</div>
							<span>Live Chat</span>
						</div>
					</div>
				</div>
			</article>
		</Layout>
	);
}

export default Contact;
