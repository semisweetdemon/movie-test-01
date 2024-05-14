import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../../Main/MainContext';

const MovieCard = ({ movie }) => {
	const { setIdMovie, setFilm } = useMainContext();
	const toMovie = useNavigate();

	return (
		<div className="cards">
			{movie?.map((el) => (
				<div
					onClick={() => {
						setIdMovie(el.id);
						toMovie(`/${el.id}`);
						setFilm(el);
					}}
					className="card"
					key={el.id}>
					<div className="card__image">
						<img src={`https://media.themoviedb.org/t/p/w440_and_h660_face${el.poster_path !== null ? el.poster_path : '/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg'}`} alt="no image" />
					</div>
					<div className="card__text">
						<h3>{el.title}</h3>
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieCard;
