import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Hello from './Components/Hello'
import Pizza from './Components/Pizza'
import Unicorn from './Components/Unicorn';
import ShavingCream from './Components/ShavingCream';
import Navigate from './Components/Navigate'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigate/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/hello' element={<Hello/>}/>
      <Route path='/pizza' element={<Pizza/>}/>
      <Route path='/unicorn' element={<Unicorn/>}/>
      <Route path='/shavingcream' element={<ShavingCream/>}/>
      <Route path='/hello/:name' element={<Hello/>}/>


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
