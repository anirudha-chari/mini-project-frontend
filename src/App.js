
import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route>

     </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
