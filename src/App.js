import Login  from './Components1/Login'
import Signup from './Components1/Signup'
import React from 'react'
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import  Dashboard  from './Components1/Dashboard';
import Burger from './Components1/Module/Burger'
import Coffee from './Components1/Module/Coffee'
import Pizza from './Components1/Module/Pizza'
import Pasta from './Components1/Module/Pasta'
import Dessert from './Components1/Module/Dessert';
import DessertDet from './Components1/Detalis/DessertDet';
import BurgerDet from './Components1/Detalis/BurgerDet';
import PastaDet from './Components1/Detalis/PastaDet';
import CoffeeDet from './Components1/Detalis/CoffeeDet';
import PizzaDet from './Components1/Detalis/PizzaDet';
import Cart from './Components1/Cart/Cart';
function App() {
  return (
    <div>
      <Router>
      
        <Routes>
          <Route path="/"element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/burger' element={<Burger />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/pasta' element={<Pasta />} />
          <Route path='/dessert' element={<Dessert />} />
          <Route path='/dessert/:id' element={<DessertDet />} />
          <Route path='/burger/:id' element={<BurgerDet />} />
          <Route path='/coffee/:id' element={<CoffeeDet />} />
          <Route path='/pasta/:id' element={<PastaDet />} />
          <Route path='/pizza/:id' element={<PizzaDet />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App
