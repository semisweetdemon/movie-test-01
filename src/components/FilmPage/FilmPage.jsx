import { useMainContext } from '../../Main/MainContext';

const FilmPage = () => {
	const { film } = useMainContext();

	return (
		<section id="aboutmovie">
			<div className="container">
				<div className="aboutmovie">
					<div className="aboutmovie__filter">
						<div className="aboutmovie__image">
							<div className="aboutmovie__rate"></div>
							<img src={`https://media.themoviedb.org/t/p/w440_and_h660_face${film.poster_path}`} alt="No image" />
						</div>
						<div className="aboutmovie__info">
							<h2>{film.title}</h2>
							<h4>Release date: {film.release_date}</h4>
							<p>{film.overview}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FilmPage;
