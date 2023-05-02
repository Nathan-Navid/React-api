import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Params from './Components/Params';

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/:word' element={<Params/>}/>
      <Route path='/:word/:color/:bgColor' element={<Params/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
