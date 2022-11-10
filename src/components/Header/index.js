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
            <Link to="/"><li className="nav-item">Home</li></Link>
            <Link to="/products"><li className="nav-item">Products</li></Link>
            <Link to="/cart"><li className="nav-item">Cart</li></Link>
          </ul>
          <button type="button" className="btn-style" onClick={this.onLogout}>Logout</button>
        </div>
      </nav>
    )
  }
}

export default Header