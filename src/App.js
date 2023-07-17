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
import { useRef } from 'react';
import { fetchYoutube } from './redux/youtubeSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
	const menu = useRef(null);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchYoutube());
	}, [dispatch]);

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
