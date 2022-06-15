import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Home/Header';
import Footer from './components/Shared/Footer';
import Login from './components/Shared/Loging';
import RequireAuth from './components/Login/RequireAuth';
import Purchase from './components/Home/Purchase';






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



      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
