import './index.css'
import { Component } from 'react'
import Header from '../Header'


class Home extends Component {
    render() {
        return(
            <div>
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
                <img src="https://i.postimg.cc/sxQGVXDG/calvin-lupiya-Mx4auh5z-O4w-unsplash.jpg" className="home-img" alt="clothes"/>
                </div>
                </>
            </div>
        )
    }
}
export default Home