import Home from './pages/home';
import Loginpag from './pages/loginpage';
import Registerpage from './pages/registerpage';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Productpage from './pages/products';




function App() {
  return (
    <div>
      <Router>
        <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/Loginpag" element={<Loginpag/>}/>
      <Route path ="/Registerpage" element={<Registerpage/>}/>
      <Route path ="/Productpage" element={<Productpage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
