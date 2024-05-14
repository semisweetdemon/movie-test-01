import { useMainContext } from '../../Main/MainContext';

const PrevNext = () => {
	const { previousPage, nextPage, first, last, numbersNow, numbersNext, numbersPrev, numbersClickNow, numbersClickPrev, numbersClickNext } = useMainContext();

	return (
		<div className="prevnext__buttons">
			<button
				onClick={() => {
					previousPage();
				}}>
				Previous
			</button>

			<div className="numbers">
				<button
					onClick={() => {
						first();
					}}
					className="numbers__start">
					1
				</button>
				<button
					onClick={() => {
						numbersClickPrev();
					}}
					className="numbers__nowprev">
					{numbersPrev()}
				</button>
				<button
					onClick={() => {
						numbersClickNow();
					}}
					className="numbers__now">
					{numbersNow()}
				</button>
				<button
					onClick={() => {
						numbersClickNext();
					}}
					className="numbers__nownext">
					{numbersNext()}
				</button>
				<button
					onClick={() => {
						last();
					}}
					className="numbers__end">
					500
				</button>
			</div>

			<button
				onClick={() => {
					nextPage();
				}}>
				Next
			</button>
		</div>
	);
};

export default PrevNext;
