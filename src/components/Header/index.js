import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

class Header extends Component {

  onNavigateToHome = () => {
    window.location.replace('/')
  }

  onLogout = () => {
    Cookies.remove('jwt_token')
    window.location.assign('/login')
  }

  render() {
    return (
      <nav className="nav-container">
        <img src="https://i.postimg.cc/yN05tYyn/clipart882723.png" alt="website logo" className="logo-style" onClick={this.onNavigateToHome}/>
        <div className="nav-items-container">
          <ul className="ul-container">
            <Link to="/" style={{textDecoration: 'none'}}><li className="nav-item">Home</li><i className="fa-solid fa-house-heart icons-img"></i></Link>
            <Link to="/products" style={{textDecoration: 'none'}}><li className="nav-item">Products</li></Link>
            <Link to="/cart" style={{textDecoration: 'none'}}><li className="nav-item">Cart</li><i className="fa-solid fa-cart-shopping icons-img"></i></Link>
            <i className="fa-solid fa-right-from-bracket icons-img" onClick={this.onLogout}></i>
          </ul>
          <button type="button" className="btn-style" onClick={this.onLogout}>Logout</button>
        </div>
      </nav>
    )
  }
}

export default Header