import React from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Banner from './Banner';
import Btns from './Btns';

import { useState } from 'react';

function Main() {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);
	return (
		<>
			<Header type={'main'} />
			<main>
				<Visual />
				<Pics Scrolled={Scrolled} Pos={Pos[2]} />
				<Vids />
				<News />
				{/* <Banner /> */}
				<Btns setScrolled={setScrolled} setPos={setPos} />
			</main>
		</>
	);
}

export default Main;
