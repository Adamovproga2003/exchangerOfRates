import './App.css';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';
import { AppProps } from './App.props';

const App = ({ data }: AppProps) => {

	return (
		<div className="App">
			<Header data={data} />
			<Converter data={data} />
			<footer className='footer'>
				<span>
					{data?.date}
				</span>
			</footer>
		</div>
	);
}

export default App;
