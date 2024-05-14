import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/lionsgate.png';
import { useMainContext } from '../../Main/MainContext';

const Header = () => {
	const { setCountPopular, setCountTopRated, setCountNowPlaying, setSearchValue } = useMainContext();

	return (
		<header id="header">
			<div className="container">
				<div className="header">
					<div className="header__logo">
						<img src={logo} alt="" />
					</div>
					<nav>
						<NavLink to="/">Home</NavLink>
						<NavLink
							onClick={() => {
								setCountPopular(1);
							}}
							to="/popular">
							Popular
						</NavLink>
						<NavLink
							onClick={() => {
								setCountTopRated(1);
							}}
							to="/toprated">
							Top rated
						</NavLink>
						<NavLink
							onClick={() => {
								setCountNowPlaying(1);
							}}
							to="nowplaying">
							Now Playiing
						</NavLink>
					</nav>
					<div className="header__search">
						<input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
