import './App.css';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Explore from './components/Explore/Explore';
import Plan from './components/Plan/Plan';

function App() {
  return (
    <div className="App">

      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<NavBar/>}>
              <Route path="/user/home" element={<Home />} />
              <Route path="/user/about" element={<About />} />
              <Route path="/user/explore" element={<Explore />} />
              <Route path="/user/plan" element={<Plan />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
