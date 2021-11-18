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
import { useState } from 'react';
import { useNavigate } from 'react-router'
import { AllProducts } from './pages/AllProducts';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';

function settoken(usertoken) {
  sessionStorage.setItem('token', JSON.stringify(usertoken));
}

function gettoken() {
  const tokenString = sessionStorage.getItem('token');
  const usertoken = JSON.parse(tokenString);
  return usertoken.token
}


function App() {
  const [query, setQuery] = useState()
  const [loggedin, setLoggedin] = useState(true)

  let navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    navigate('/search')
  };

  // sessionStorage.getItem('token')?:gettoken()
  /*
    if (!token) {
      return (
        <>
        <Navbar />
        <UserLogin settoken={settoken}/>
        </> 
      )   
    }
  */

  return (
    <div>
      <AuthProvider>
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
        <Route path="adminviewproducts" element={<AdminProductList />}></Route>
        <Route path="admineditproduct" element={<AdminEditProduct />}></Route>
        <Route path="adminaddproduct" element={<AdminAddProduct />} />
        <Route path="login" element={<Login/>}/> 
        <Route path="signup" element={<SignUp/>}/> 
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
