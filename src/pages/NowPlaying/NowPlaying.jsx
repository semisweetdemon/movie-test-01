import { useMainContext } from '../../Main/MainContext';
import MovieCard from '../../components/MovieCard/MovieCard';
import PrevNext from '../../components/PrevNext/PrevNext';

const NowPlaying = () => {
	const { nowPlaying, setPage } = useMainContext();

	setPage(4);

	return (
		<section id="nowplaying">
			<div className="container">
				<div className="nowplaying">
					{<MovieCard movie={nowPlaying} />}
					{PrevNext()}
				</div>
			</div>
		</section>
	);
};

export default NowPlaying;
