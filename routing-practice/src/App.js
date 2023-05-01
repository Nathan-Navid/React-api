import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      
      <div className="App">
        <h1 className='mt-3'>Welcome to First Route practice</h1>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
        </Routes>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
