import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/UI/NavBar';
import { CategoryPage } from './pages/Category';
import { ProductPage } from './pages/ProductPage';
import { HomePane } from './pages/Home';
import { Profile } from './pages/Profile';
import AdminPage from './pages/AdminPage';
import UserList from './components/UI/UserList'
import AdminProductList from './pages/AdminProductList'
import AdminAddProduct from './pages/AdminAddProduct';
import AdminEditProduct from './pages/AdminEditProduct';
import { Cart } from './pages/Cart'
import { Result } from './pages/SearchResults';
import ShoppingCart from "./pages/ShoppingCart";
import OrderConfirmation from "./pages/OrderConfirmation";
import { useState } from 'react';
import { useNavigate } from 'react-router'
import { AllProducts } from './pages/AllProducts';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import Chatbot from "./components/UI/Chatbot";
import UsersCartAPI from './data/UsersCartAPI';

function App() {
  const [query, setQuery] = useState()
  const [loggedin, setLoggedin] = useState(true)

  let navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault()
    navigate('/search')
  };

  UsersCartAPI.initialSetup()
  return (
    <div>
      <AuthProvider>
      <Navbar handleSubmit={handleSubmit} setQuery={setQuery} loggedin={loggedin} />
      <Chatbot/>
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
        <Route path="adminviewproducts" element={<AdminProductList />}></Route>
        <Route path="admineditproduct" element={<AdminEditProduct />}></Route>
        <Route path="adminaddproduct" element={<AdminAddProduct />} />
        <Route path="login" element={<Login/>}/> 
        <Route path="signup" element={<SignUp/>}/> 
        <Route path="/user/:userId/cart" element={<ShoppingCart/>}/>
        <Route path="/order-confirm" element={<OrderConfirmation/>}/>
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

export default App;
