import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Popular from '../pages/Popular/Popular';
import TopRated from '../pages/TopRated/TopRated';
import NowPlaying from '../pages/NowPlaying/NowPlaying';
import SearchCards from '../pages/SearchCards/SearchCards';
import { useMainContext } from './MainContext';
import FilmPage from '../components/FilmPage/FilmPage';

const MainRouter = () => {
	const { idMovie } = useMainContext();
	let pages = [
		{ path: '/', elem: <Home />, key: 0 },
		{ path: '/popular', elem: <Popular />, key: 1 },
		{ path: '/toprated', elem: <TopRated />, key: 2 },
		{ path: '/nowplaying', elem: <NowPlaying />, key: 3 },
		{ path: '/search', elem: <SearchCards />, key: 4 },
		{ path: `/${idMovie}`, elem: <FilmPage />, key: 5 },
	];

	return (
		<Routes>
			{pages.map((el) => (
				<Route path={el.path} element={el.elem}></Route>
			))}
		</Routes>
	);
};

export default MainRouter;
