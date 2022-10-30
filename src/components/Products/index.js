import { Component } from 'react'
import Header from '../Header'
import './index.css'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'

const cookieExit = Cookies.get('jwt_token') === undefined ? false : true

class Products extends Component {

    getProduct = () => {
        return(
            <>
            <Header />
            <div className="product-sections">
            <PrimeDealsSection />
            <AllProductsSection />
            </div>
            </>
        )
    }

    render() {
        return cookieExit ? this.getProduct() : <Navigate to='/login'/>
    }
}
export default Products
