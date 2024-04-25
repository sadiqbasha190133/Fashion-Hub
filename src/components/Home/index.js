import './index.css'
import { Component } from 'react'
import Header from '../Header'
import { Link, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const cookieExit = Cookies.get('jwt_token') === undefined ? false : true

class Home extends Component {

    getHome = () => {
        return (
            <>
            <Header />
            <div className='bg-container'>
                
                <div className='home-align-container'>
                    <div>
                        <h1 className='fashion-heading'>FASHION SALE <br/> <span style={{color:'white',fontStyle:'italic'}}>Dazzling Deals</span></h1>
                        <Link to='/products'><button className='button-products'>Products</button></Link>
                    </div>
                </div>
            </div>
            </>
        )
    }

    render() {
       
        return cookieExit ? this.getHome() : <Navigate to='/login'/>
            
    }
}
export default Home