import './App.css'
import {BrowserRouter,} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import LoginForm from './components/LoginForm'
import Products from './components/Products';
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<LoginForm/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)
export default App
