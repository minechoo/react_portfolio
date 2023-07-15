import { Route, Switch } from 'react-router-dom';
//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Menu from './components/common/Menu';

//main
import Main from './components/main/Main';

//sub
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Member from './components/sub/Member';
import Department from './components/sub/Department';

import './scss/style.scss';
import { useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setGallery, setMembers, setYoutube } from './redux/action';

function App() {
	const dispatch = useDispatch();
	const menu = useRef(null);

	//메인 처음 마운트시 데이터 fetching후 store에 저장
	const fetchMembers = useCallback(async () => {
		const result = await axios.get(`${process.env.PUBLIC_URL}/DB/members.json`);
		console.log(result.data.members);
		console.log(setMembers(result.data.members));
		dispatch(setMembers(result.data.members));
	}, [dispatch]);

	const fetchYoutube = useCallback(async () => {
		const key = 'AIzaSyANMdnk7q2cBX8tqGJZXpVFH9bGJMOwmEc'; //api 키
		const list = 'PLMafzyXZ12TPBYgeplFEdJeSMcJvb3v5u'; //class 브라우저 상단값
		const num = 8;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;

		const result = await axios.get(url);
		dispatch(setYoutube(result.data.items));
		console.log(result.data.items);
	}, [dispatch]);

	const fetchGallery = useCallback(
		async (opt) => {
			const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
			const key = '86fbba2c96b5252a51879bc23af1f41e';
			const method_interest = 'flickr.interestingness.getList';
			const method_user = 'flickr.people.getPhotos';
			const method_search = 'flickr.photos.search';
			const num = 50;
			let url = '';
			//const myId = '194260994@N06';

			if (opt.type === 'interest')
				url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
			if (opt.type === 'search')
				url = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${num}&tags=${opt.tags}`;
			if (opt.type === 'user')
				url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.user}`;

			const resultG = await axios.get(url);
			dispatch(setGallery(resultG.data.photos.photo));
			console.log(setGallery(resultG.data.photos.photo));
		},
		[dispatch]
	);

	useEffect(() => {
		fetchMembers();
		fetchYoutube();
		fetchGallery();
	}, [fetchMembers, fetchYoutube, fetchGallery]);

	return (
		<>
			<Switch>
				<Route exact path='/' render={() => <Main menu={menu} />} />
				<Route path='/' render={() => <Header type={'sub'} menu={menu} />} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/member' component={Member} />
			<Footer />

			<Menu ref={menu} />
		</>
	);
}

export default App;
