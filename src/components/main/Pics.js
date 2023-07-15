function Pics({ Scrolled, Pos }) {
	// console.log(Scrolled);
	return (
		<section id='pics' className='myScroll'>
			<h1 style={{ transform: `translateX(${Scrolled - Pos}px)` }}>FLICKER</h1>
		</section>
	);
}

export default Pics;
