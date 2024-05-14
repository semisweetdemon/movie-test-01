import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../../Main/MainContext';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// ChartJS.register(ArcElement, Tooltip, Legend);
// const data = {
// labels: [],
// datasets: [
// 	{
// 		label: null,
// 		data: [7, 10 - 7],
// 		backgroundColor: ['black', 'red'],
// 		borderColor: ['black', 'red'],
// 	},
// ],
// };
// const options = {};
// <Doughnut data={data} options={options} style={{ position: 'absolute', left: '50%', top: '35%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', borderWidth: '3px' }}></Doughnut>

const HomeCard = ({ movies }) => {
	const { setIdMovie, setFilm } = useMainContext();
	const toMovie = useNavigate();

	return (
		<div className="homecard">
			{movies?.map((el) => (
				<div
					className="homecard__card"
					onClick={() => {
						setIdMovie(el.id);
						toMovie(`/${el.id}`);
						setFilm(el);
					}}>
					<div className="homecard__image">
						<div className="homecard__rate">
							<div className="homecard__rateback"></div>
							<p>{el.vote_average.toFixed(1)}</p>
						</div>
						<img src={`https://media.themoviedb.org/t/p/w440_and_h660_face${el.poster_path !== null ? el.poster_path : '/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg'}`} alt="no image" />
					</div>
					<h4>{el.title}</h4>
				</div>
			))}
		</div>
	);
};

export default HomeCard;
