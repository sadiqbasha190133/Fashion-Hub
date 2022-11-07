import { Component } from "react";
import './index.css'
import Cookies from "js-cookie";

const Url = window.location.href

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class ProductItem extends Component {
    state = {
        productData:[],
        apiStatus:apiStatusConstants.initial,
        similarProductsData:[]
    }

    componentDidMount() {
        let id = Url.split('/')
        let length = id.length
        id = id[length-1]
        console.log(id)
        this.getProductData(id)
      }
    
      getFormattedData = data => ({
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        id: data.id,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        title: data.title,
        totalReviews: data.total_reviews,
      })
    
      getProductData = async (id) => {
        
        this.setState({
          apiStatus: apiStatusConstants.inProgress,
        })
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = `https://apis.ccbp.in/products/${id}`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        if (response.ok) {
          const fetchedData = await response.json()
          console.log(fetchedData)
          const updatedData = this.getFormattedData(fetchedData)
          const updatedSimilarProductsData = fetchedData.similar_products.map(
            eachSimilarProduct => this.getFormattedData(eachSimilarProduct),
          )
          this.setState({
            productData: updatedData,
            similarProductsData: updatedSimilarProductsData,
            apiStatus: apiStatusConstants.success,
          })
        }
        if (response.status === 404) {
          this.setState({
            apiStatus: apiStatusConstants.failure,
          })
        }
      }
    
    render() {
        const{productData} = this.state
        const{availability,brand,description,imageUrl,price,rating,title,totalReviews} = productData
        return(
            <div className="tab-bg-container">
                <div className="tab-img-container">
                    <img src={imageUrl} alt={title} className='tab-img'/>
                </div>
                <div className="tab-details-container">
                    <h1 className="tab-heading">{title}</h1>
                    <p className="tab-price">RS /-{price}</p>
                    <p className="tab-ratings">{rating}</p>
                    <p className="tab-total-reviews">{totalReviews} Reviews</p>
                    <p className="tab-description">{description}</p>
                    <p className="tab-available">Availability : <span className="tab-span-element">{availability}</span></p>
                    <p className="tab-brand">Brand : <span className="tab-span-element">{brand}</span></p>
                    <hr/>
                    <button className="tab-button">ADD TO CART</button>
                </div>
            </div>
        )
    }
}
export default ProductItem