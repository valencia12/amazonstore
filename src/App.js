
import './App.css';
import Cards from './components/Cards/Cards';
import Navbar from './components/NavBar/Navbar';

function App(props) {
  return (
    <div style={{

    }}>
      <Navbar />
      <div style={{
        margin:"center"
      }}>
        <Cards />
      </div>
    </div>
  );
}

export default App;
