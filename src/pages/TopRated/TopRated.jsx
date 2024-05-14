import { useMainContext } from '../../Main/MainContext';
import MovieCard from '../../components/MovieCard/MovieCard';
import PrevNext from '../../components/PrevNext/PrevNext';

const TopRated = () => {
	const { topRated, setPage } = useMainContext();

	setPage(3);

	return (
		<section id="toprated">
			<div className="container">
				<div className="toprated">
					{<MovieCard movie={topRated} />}
					{PrevNext()}
				</div>
			</div>
		</section>
	);
};

export default TopRated;
