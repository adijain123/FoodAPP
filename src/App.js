
import './App.css';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-night.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import SignUp from './screens/SignUp.js';



function App() {
  return (
    
    <>
   <Router>
    <div>
      <Routes>
        <Route exact path = '/' element = {<Home/>} />
        <Route exact path = '/login' element = {<Login/>} />
        <Route exact path = '/creatuser' element = {<SignUp/>} />
      </Routes>
    </div>
   </Router>
    </>
  
  );
}

export default App;
