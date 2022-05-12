import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/Header/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        } title='Home'></Route>
        <Route path='/home' element={<Home></Home>} title='Home'></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail />} title='Service Detail'></Route>
        <Route path='/about' element={<About></About>} title='About'></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut /></RequireAuth>} title='Checkout'></Route>
        <Route path='/login' element={<Login></Login>} title='Login'></Route>
        <Route path='register' element={<Register />} title='Register'></Route>
        <Route path='*' element={<NotFound />} title='404 page'></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
