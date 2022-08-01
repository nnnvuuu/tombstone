import './App.css';
import LiveChat from './LiveChat/LiveChat';
import Header from './Header/Header';
import HomePage from './HomePgae/HomePage';
import Carousels from './HomePgae/Carousels/Carousels';

function App() {
  return (
    <div >
        <Header/>
        <HomePage/>
        <LiveChat/>
    </div>
  );
}

export default App;