import Header from '../Header'
import './index.css'
import { Component } from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

const cookieExit = Cookies.get('jwt_token') === undefined ? false : true

class Cart extends Component {

    getCart = () => {
        return(
            <>
            <Header />
            <div className="cart-container">
            <img
                src="https://i.postimg.cc/d3NYxfNk/shopping-g4fa4884eb-1280.png"
                alt="cart"
                className="cart-img"
            />
            </div>
            </>
        )
    }

    render() {
        return  cookieExit ? this.getCart() : <Navigate to='/login'/>
    }
}
export default Cart