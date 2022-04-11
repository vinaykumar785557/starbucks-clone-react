import './App.css';
import Blend from './Components/Blend';
import BottomFooter from './Components/BottomFooter';
import Flavours from './Components/Flavours';
import Header from './Components/Header';
import JoinRewards from './Components/JoinRewards';
import Remainder from './Components/Remainder';
import Tips from './Components/Tips';
import TopFooter from './Components/TopFooter';

function App() {
	return (
		<div className='app'>
			<Header />
			<JoinRewards />
			<Tips />
			<Flavours />
			<Blend />
			<Remainder />
			<TopFooter />
      <BottomFooter/>
		</div>
	);
}

export default App;
