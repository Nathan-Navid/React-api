import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Number from './Components/Number';
import Hello from './Components/Hello';

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/:num' element={<Number/>}/>
      <Route path='/:name' element={<Hello/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
