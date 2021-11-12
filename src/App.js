import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/UI/NavBar';
import { CategoryPage } from './components/routes/Category';
import { ProductPage } from './components/routes/ProductPage';
import { HomePane } from './components/routes/Home';
import { Profile } from './components/routes/Profile';

import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePane />} />
        <Route path="category/:name" element={<CategoryPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
