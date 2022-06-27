import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Home/Header';
import Footer from './components/Shared/Footer';
import Login from './components/Shared/Loging';
import RequireAuth from './components/Login/RequireAuth';
import Purchase from './components/Home/Purchase';
import SingUp from './components/Login/SingUp';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Review from './components/Dashboard/Review';






function App() {
  return (
    <div>
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path="login" element={<Login />} />



        <Route path='/tools/:productId'
          element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>

        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='singup' element={<SingUp />}></Route>

        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<Review></Review>}></Route>

        </Route>





      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
