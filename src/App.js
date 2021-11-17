import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/UI/NavBar';
import { CategoryPage } from './components/routes/Category';
import { ProductPage } from './components/routes/ProductPage';
import { HomePane } from './components/routes/Home';
import { Profile } from './components/routes/Profile';
import AdminPage from './components/UI/AdminPage';
import UserList from './components/UI/UserList'
import AdminProductList from './components/UI/AdminProductList'

import AdminAddProduct from './components/UI/AdminAddProduct';
import AdminEditProduct from './components/UI/AdminEditProduct';


import { Cart } from './components/routes/Cart'
import { Result } from './components/routes/SearchResults';
import { useState } from 'react';
import { useNavigate } from 'react-router'
import { AllProducts } from './components/routes/AllProducts';


function App() {
  const [query, setQuery] = useState()
  const [loggedin, setLoggedin] = useState(false)

  let navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    navigate('/search')
  };

  return (
    <div>
      <Navbar handleSubmit={handleSubmit} setQuery={setQuery} loggedin={loggedin} />
      <Routes>
        <Route exact path="/" element={<HomePane />} />
        <Route exact path="products" element={<AllProducts />} />
        <Route path="category/:name" element={<CategoryPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="mycart" element={<Cart />} />
        <Route path="search" element={<Result query={query} />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="adminviewusers" element={<UserList />} />
        <Route path="/adminviewproducts" element={<AdminProductList />}></Route>
        <Route path="/admineditproduct" element={<AdminEditProduct />}></Route>
        <Route path="/adminaddproduct" element={<AdminAddProduct />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />      </Routes>
    </div>
  );
}

export default App;
