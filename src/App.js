import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<LoginForm/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)
export default App
