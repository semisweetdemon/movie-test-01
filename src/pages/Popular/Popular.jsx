import { useMainContext } from '../../Main/MainContext';
import MovieCard from '../../components/MovieCard/MovieCard';
import PrevNext from '../../components/PrevNext/PrevNext';

const Popular = () => {
	const { popular, setPage } = useMainContext();

	setPage(2);

	return (
		<section id="popular">
			<div className="container">
				<div className="popular">{<MovieCard movie={popular} />}</div>
				{PrevNext()}
			</div>
		</section>
	);
};

export default Popular;
