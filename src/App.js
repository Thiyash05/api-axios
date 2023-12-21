import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navsection from './Navbar';
import Carouselsection from './Carosel';
import "./style.css";
import Axioussection from './Axios';
//import Crud from './Crud';

function App() {
  return (
    <div className="App">
      <Navsection />
      <Carouselsection />
      {/* <Crud /> */}
      <Axioussection />
    </div>
  );
}

export default App;
