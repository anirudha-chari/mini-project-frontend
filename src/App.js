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
     
       
         
        <Route path="admin" element={<AdminPage/>}/>
        <Route path="adminviewusers"element={<UserList/>}/>
        <Route path="/adminviewproducts" element={<AdminProductList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
