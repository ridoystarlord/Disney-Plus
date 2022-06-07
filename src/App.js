import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './components/common/Login/Login';
import Header from './components/common/Header/Header';
import Authprovider from './context/Authprovider';
function App() {
  return (
    <div>
      <Authprovider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
