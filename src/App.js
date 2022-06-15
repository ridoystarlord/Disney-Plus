import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './components/common/Login/Login';
import Header from './components/common/Header/Header';
import Authprovider from './context/Authprovider';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import MovieContainer from './Admin/MovieContainer';

function App() {
  return (
    <div>
      <Authprovider>
        <Router>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/detail/:id" element={<Details />} />
          </Routes>
        </Router>
      </Authprovider>
      {/* <MovieContainer /> */}
    </div>
  );
}

export default App;
