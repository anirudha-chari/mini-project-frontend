import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/UI/NavBar';
import { CategoryPage } from './pages/Category';
import { ProductPage } from './pages/ProductPage';
import { HomePane } from './pages/Home';
import AdminProductList from './pages/AdminProductList'
import AdminAddProduct from './pages/AdminAddProduct';
import AdminEditProduct from './pages/AdminEditProduct';
import { Result } from './pages/SearchResults';
import ShoppingCart from "./pages/ShoppingCart";
import OrderConfirmation from "./pages/OrderConfirmation";
import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import { AllProducts } from './pages/AllProducts';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import { PrivateUserRoute, PrivateAdminRoute } from './privateRoute';
import Chatbot from "./components/UI/Chatbot";
// import { getAuth, onAuthStateChanged } from "firebase/auth"
import UsersCartAPI from './data/UsersCartAPI'
import { useEffect } from 'react'
// import axios from 'axios';

function App() {
  // auth()
  const [query, setQuery] = useState()
  let navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault()
    navigate('/search')
  };

  useEffect(() => {
    UsersCartAPI.initialSetup()
  }, [])
  return (
    <div>
      <AuthProvider>
      <Navbar handleSubmit={handleSubmit} setQuery={setQuery} />
      <Chatbot />
      <Routes>
      {/* <Route exact path="/mini-project-front" element={<HomePane />} /> */}
      <Route exact path="/" element={<HomePane />} />
      <Route path="/mini-project-frontend" element={<Navigate replace to="/" />} />
      <Route exact path="products" element={<AllProducts />} />
      <Route path="category/:name" element={<CategoryPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="search" element={<Result query={query} />} />

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="adminviewproducts" element={<PrivateAdminRoute><AdminProductList /></PrivateAdminRoute>} />
      <Route path="admineditproduct" element={<PrivateAdminRoute><AdminEditProduct /></PrivateAdminRoute>} />
      <Route path="adminaddproduct" element={<PrivateAdminRoute><AdminAddProduct /></PrivateAdminRoute>} />
      <Route path="/user/:userId/cart" element={<PrivateUserRoute><ShoppingCart /></PrivateUserRoute>} />
      <Route path="/order-confirm" element={<PrivateUserRoute><OrderConfirmation /></PrivateUserRoute>} />
      <Route
      path="*"
      element={
      <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
      </main>
    }
      />      </Routes>
      </AuthProvider>
    </div>
  );
}

// function auth() {
//   const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log(auth.currentUser)
//       auth.currentUser.getIdToken(true).then((idtoken) => {
//         console.log(idtoken);
//         console.log("idtoken");
//         const api = " http://139.59.12.232:8082/admin/products";
//         axios.get(api, { headers: { "Authorization": `Bearer ${idtoken}` } })
//           .then((res) => console.log(res.data)).catch((err) =>
//             console.log(err)
//           );
//       });
//     } else {
//       console.log("logged out");
//     }
//   });
// }

export default App;
