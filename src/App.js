
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Headers from './components/Headers';
import Main from './components/Main';

function App() {
  
 
  return (
   <>
      <Headers />
      <Routes>
        <Route path = '/' element={<Main />} />
     <Route path='/cart' element ={<Cart />} />
      </Routes>
      </>
  );
}

export default App;
