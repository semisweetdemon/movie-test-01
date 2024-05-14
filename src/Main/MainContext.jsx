import { useEffect, createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { key } from '../components/ApiKey';

const mainContext = createContext();
export const useMainContext = () => useContext(mainContext);

const MainRouter = ({ children }) => {
	const [popular, setPopular] = useState();
	const [topRated, setTopRated] = useState();
	const [nowPlaying, setNowPLaying] = useState();
	const [searchCards, setSearchCards] = useState();
	const [page, setPage] = useState(0);
	const [m, setM] = useState(1);
	const [countPopular, setCountPopular] = useState(1);
	const [countTopRated, setCountTopRated] = useState(1);
	const [countNowPlaying, setCountNowPlaying] = useState(1);
	const [searchValue, setSearchValue] = useState('');
	const [idMovie, setIdMovie] = useState(0);
	const [film, setFilm] = useState({});
	const toSearch = useNavigate();
	const [check, setCheck] = useState(true);

	function getPopularMovies() {
		axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${countPopular}`).then((res) => {
			setPopular(res.data.results);
		});
	}
	function getTopRatedMovies() {
		axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${countTopRated}`).then((res) => {
			setTopRated(res.data.results);
		});
	}
	function getNowPlaying() {
		axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${countNowPlaying}`).then((res) => {
			setNowPLaying(res.data.results);
		});
	}
	function search() {
		if (searchValue !== '') {
			toSearch('/search');
			axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchValue}`).then((result) => {
				setSearchCards(result.data.results);
				console.log(result.data.total_pages);
			});
		} else {
			switch (page) {
				case 1:
					toSearch('/');
					break;
				case 2:
					toSearch('/popular');
					break;
				case 3:
					toSearch('/toprated');
					break;
				case 4:
					toSearch('/nowplaying');
					break;

				default:
					toSearch('/');
					break;
			}
		}
	}

	function settingM() {
		switch (page) {
			case 2:
				setM(countPopular);
				break;
			case 3:
				setM(countTopRated);
				break;
			case 4:
				setM(countNowPlaying);
				break;
			default:
				break;
		}
	}
	function previousPage() {
		switch (page) {
			case 2:
				setCountPopular((prev) => (prev <= 1 ? 1 : prev - 1));
				break;
			case 3:
				setCountTopRated((prev) => (prev <= 1 ? 1 : prev - 1));
				break;
			case 4:
				setCountNowPlaying((prev) => (prev <= 1 ? 1 : prev - 1));
				break;
			default:
				break;
		}
	}
	function nextPage() {
		switch (page) {
			case 2:
				setCountPopular((prev) => prev + 1);
				break;
			case 3:
				setCountTopRated((prev) => prev + 1);
				break;
			case 4:
				setCountNowPlaying((prev) => prev + 1);
				break;
			default:
				break;
		}
	}
	function first() {
		switch (page) {
			case 2:
				setCountPopular(1);
				break;
			case 3:
				setCountTopRated(1);
				break;
			case 4:
				setCountNowPlaying(1);
				break;
			default:
				break;
		}
	}
	function last() {
		switch (page) {
			case 2:
				setCountPopular(500);
				break;
			case 3:
				setCountTopRated(500);
				break;
			case 4:
				setCountNowPlaying(500);
				break;
			default:
				break;
		}
	}
	function numbersPrev() {
		if (m === 1 || m === 2) {
			return 2;
		} else if (m === 499) {
			return m - 2;
		} else if (m === 500) {
			return m - 3;
		} else {
			return m - 1;
		}
	}
	function numbersNow() {
		if (m === 1 || m === 2 || m === 3) {
			return 3;
		} else if (m === 499) {
			return m - 1;
		} else if (m === 500) {
			return m - 2;
		} else {
			return m;
		}
	}
	function numbersNext() {
		if (m === 1 || m === 2 || m === 3) {
			return 4;
		} else if (m === 500) {
			return m - 1;
		} else if (m === 499) {
			return m;
		} else {
			return m + 1;
		}
	}
	function numbersClickPrev() {
		switch (page) {
			case 2:
				m === 1 || m === 2 || m === 3 ? setCountPopular(2) : previousPage();
				break;
			case 3:
				m === 1 || m === 2 || m === 3 ? setCountTopRated(2) : previousPage();
				break;
			case 4:
				m === 1 || m === 2 || m === 3 ? setCountNowPlaying(2) : previousPage();
				break;
			default:
				break;
		}
	}
	function numbersClickNow() {
		switch (page) {
			case 2:
				if (m === 1 || m === 2) {
					setCountPopular(3);
				} else if (m === 499 || m === 500) {
					setCountPopular(498);
				} else {
					setCountPopular(m);
				}
				break;
			case 3:
				if (m === 1 || m === 2) {
					setCountTopRated(3);
				} else if (m === 499 || m === 500) {
					setCountTopRated(498);
				} else {
					setCountTopRated(m);
				}
				break;
			case 4:
				if (m === 1 || m === 2) {
					setCountNowPlaying(3);
				} else if (m === 499 || m === 500) {
					setCountNowPlaying(498);
				} else {
					setCountNowPlaying(m);
				}
				break;
			default:
				break;
		}
	}
	function numbersClickNext() {
		switch (page) {
			case 2:
				if (m === 1 || m === 2 || m === 3) {
					setCountPopular(4);
				} else if (m === 498 || m === 499 || m === 500) {
					setCountPopular(499);
				} else {
					nextPage();
				}
				break;
			case 3:
				if (m === 1 || m === 2 || m === 3) {
					setCountTopRated(4);
				} else if (m === 498 || m === 499 || m === 500) {
					setCountTopRated(499);
				} else {
					nextPage();
				}
				break;
			case 4:
				if (m === 1 || m === 2 || m === 3) {
					setCountNowPlaying(4);
				} else if (m === 498 || m === 499 || m === 500) {
					setCountNowPlaying(499);
				} else {
					nextPage();
				}
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		getPopularMovies();
		settingM();
	}, [countPopular]);
	useEffect(() => {
		getTopRatedMovies();
		settingM();
	}, [countTopRated]);
	useEffect(() => {
		getNowPlaying();
		settingM();
	}, [countNowPlaying]);
	useEffect(() => {
		search();
	}, [searchValue]);
	useEffect(() => {
		settingM();
		numbersPrev();
		numbersNow();
		numbersNext();
	}, [page]);

	let values = {
		popular,
		topRated,
		nowPlaying,
		searchCards,
		searchValue,
		page,
		setPage,
		countPopular,
		setCountPopular,
		countTopRated,
		setCountTopRated,
		countNowPlaying,
		setCountNowPlaying,
		previousPage,
		nextPage,
		first,
		last,
		numbersNow,
		numbersNext,
		numbersPrev,
		numbersClickNow,
		numbersClickPrev,
		numbersClickNext,
		setSearchValue,
		idMovie,
		setIdMovie,
		film,
		setFilm,
		check,
		setCheck,
	};

	return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainRouter;
