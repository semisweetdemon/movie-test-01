import './App.scss';
import MainRouter from './Main/MainRouter';
import Footer from './components/Footer.jsx/Footer';
import Header from './components/Header/Header';

function App() {
	return (
		<div className="app">
			<Header />
			<MainRouter />
			<Footer />
		</div>
	);
}

export default App;
