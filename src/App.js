import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Home/Header';
import Footer from './components/Shared/Footer';
import Banner from './components/Home/Banner';


function App() {
  return (
    <div>
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
