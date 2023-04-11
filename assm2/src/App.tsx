import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Home from './users/home'
import Login from './users/login'
import Register from './users/register'
import AdminLayout from './components/layout/admin'
import ListPhone from './admin/listPhone'
import ChiTiet from './users/chiTiet'
import Cart from './users/cart'
import Addsanpham from './admin/addsanpham'
import Updatesanpham from './admin/updatesanpham'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='detail/:id' element={<ChiTiet />} />
      </Route>
    </Routes>
    <Routes>
      <Route path='admin/' element={<AdminLayout />}>
        <Route index element={<ListPhone />} />
        <Route path='add' element={<Addsanpham />} />
        <Route path=':id/update/' element={<Updatesanpham />} />
      </Route>
    </Routes>
    <Routes>
      <Route path='/login' element={<Login />}>
      </Route>
    </Routes>
    <Routes>
      <Route path='/register' element={<Register />}>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
