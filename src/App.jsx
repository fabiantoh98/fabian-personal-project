import Navbar from './navbar';
import './App.scss';
import Home from './home';
import AboutMe from './about_me';
import Game from './game';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './footer';

function App() {
  return (
    <div className="app">
      <div className="main">
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/fabian-personal-project' element={<Home/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about_me' element={<AboutMe/>}></Route>
            <Route path='/game' element={<Game/>}></Route>
          </Routes>
        </Router>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
