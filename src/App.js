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
import { setMembers } from './redux/action';

function App() {
	const dispatch = useDispatch();
	const menu = useRef(null);

	//메인 처음 마운트시 데이터 fetching후 store에 저장
	const fetchMembers = useCallback(async () => {
		const result = await axios.get(`${process.env.PUBLIC_URL}/DB/members.json`);
		console.log(result.data.members);
		//console.log(setMembers(result.data.members));
		dispatch(setMembers(result.data.members));
	}, [dispatch]);

	useEffect(() => {
		fetchMembers();
	}, [fetchMembers]);

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
