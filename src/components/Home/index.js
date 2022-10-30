import './index.css'
import { Component } from 'react'
import Header from '../Header'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const cookieExit = Cookies.get('jwt_token') === undefined ? false : true

class Home extends Component {

    getHome = () => {
        return (
            <div className='bg-container'>
                <>
                <Header />
                <div className="text-img-container">
                <div className="text-container">
                    <h1 className="text-heading">Clothes That Get YOU Noticed</h1>
                    <p className="text-paragraph">Fashion is part of the daily air and it does not quite help thatit changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen
                    and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.
                    </p>
                    <button type="button" className="btn-shop-now-style">Shop Now</button>
                </div>
                <img src="https://i.postimg.cc/yd9mL574/oladimeji-odunsi-AHBv-AIVqk64-unsplash.jpg" className="img" alt="clothes"/>
                </div>
                </>
            </div>
        )
    }

    render() {
       
        return cookieExit ? this.getHome() : <Navigate to='/login'/>
            
    }
}
export default Home