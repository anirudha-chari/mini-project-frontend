import './App.css';
import { Outlet, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/UI/NavBar';
import { CategoryPane } from './components/routes/Category';
import { ProductPage } from './components/routes/ProductPage';
import { HomePane } from './components/routes/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Routes>
        <Route exact path="/" element={<HomePane />} />
        <Route path="/category" element={<CategoryPane />} />
        <Route path="/product/:id" element={<ProductPage />} />
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
