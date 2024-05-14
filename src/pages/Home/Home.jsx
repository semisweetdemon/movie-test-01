import { useEffect, useState } from 'react';
import { useMainContext } from '../../Main/MainContext';
import HomeCard from '../../components/HomeCard/HomeCard';
import axios from 'axios';

const Home = () => {
	const { popular, topRated, check, setCheck, setPage } = useMainContext();
	const [back, setBack] = useState('');

	setPage(1);

	function backgroundBack(arr) {
		if (arr) {
			let n = Math.floor(Math.random() * 20);
			let m = arr[n].backdrop_path;
			setBack(`https://media.themoviedb.org/t/p/w440_and_h660_face${m}`);
		}
	}

	useEffect(() => {
		axios(`https://api.themoviedb.org/3/movie/popular?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=en-US&page=1`).then((res) => {
			backgroundBack(res.data.results);
		});
	}, []);

	return (
		<section id="home">
			<div className="container">
				<div className="home">
					<div className="home__backdrop" style={{ background: `url(${back}) no-repeat center/cover` }}></div>
					<div className="home__trends">
						<div className="home__buttons">
							<h3>Trending</h3>
							<div className="home__switch">
								<div className="home__switchback" style={{ left: check ? '' : '160px' }}></div>
								<div
									className="home__one"
									onClick={() => {
										setCheck(true);
									}}>
									<h4 style={{ color: check ? 'white' : '' }}>Popular</h4>
								</div>
								<div
									className="home__one"
									onClick={() => {
										setCheck(false);
									}}>
									<h4 style={{ color: check ? '' : 'white' }}>Top rated</h4>
								</div>
							</div>
						</div>
						<div className="home__popular" style={{ display: check ? '' : 'none' }}>
							<HomeCard movies={popular} />
						</div>
						<div className="home__toprated" style={{ display: check ? 'none' : '' }}>
							<HomeCard movies={topRated} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
