import { Route, Switch } from 'react-router-dom';
//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

//main
import Visual from './components/main/Visual';
import News from './components/main/News';
import Pics from './components/main/Pics';
import Vids from './components/main/Vids';
import Banner from './components/main/Banner';

import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Member from './components/sub/Member';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<News />
					<Pics />
					<Vids />
					<Banner />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route>
				<Department path='/department' />
			</Route>
			<Route>
				<Community Path='/community' />
			</Route>
			<Route path='/gallery'>
				<Gallery />
			</Route>
			<Route path='/youtube'>
				<Youtube />
			</Route>
			<Route path='/contact'>
				<Contact />
			</Route>
			<Route path='/member'>
				<Member />
			</Route>

			<Footer />
		</>
	);
}

export default App;
