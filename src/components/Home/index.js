import './index.css'
import { Component } from 'react'
import Header from '../Header'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactSlick from '../ReactSlick'

const cookieExit = Cookies.get('jwt_token') === undefined ? false : true

class Home extends Component {

    getHome = () => {
        return (
            <div className='bg-container'>
                <>
                <Header />
                <ReactSlick />
                </>
            </div>
        )
    }

    render() {
       
        return cookieExit ? this.getHome() : <Navigate to='/login'/>
            
    }
}
export default Home