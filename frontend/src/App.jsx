import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import List from './list/List';
import Hotel from './hotel/Hotel';
import Login from './login/Login';
import Register from './register/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/hotels" element={<List/>}/>
      
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
