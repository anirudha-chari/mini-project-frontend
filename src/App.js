import './App.css';
import { Outlet } from 'react-router-dom';
import {HomePane} from './components/routes/Home'
import { Navbar } from './components/UI/NavBar';

function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
