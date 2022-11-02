import { Component } from "react";
import Cookies from "js-cookie";
import ProductsHeader from "../ProductsHeader";
import ProductCard from "../ProductCard";
import "./index.css";

const sortbyOptions = [
  {
    optionId:'PRICE_HIGH',
    displayText:'Price (High-Low)',
  },
  {
    optionId:'PRICE_LOW',
    displayText:'Price (Low-High)',
  }
]

class AllProductsSection extends Component {
  state = {
    activeOptionId:sortbyOptions[0].optionId,
    productsList: [],
    isLoading: false
  };

  componentDidMount() {
    this.getProducts();
  }

  updateActiveOptionId = activeOptionId => {
    this.setState({activeOptionId:activeOptionId},this.getProducts)
  }

  getProducts = async () => {
    const {activeOptionId} = this.state
    this.setState({isLoading:true})
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok === true) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.products.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({
        productsList: updatedData,
      });
    }
  };

  renderProductsList = () => {
    const { productsList,activeOptionId} = this.state;
    return (
      <div>
        <ProductsHeader 
          sortbyOptions={sortbyOptions} 
          activeOptionId={activeOptionId} 
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <ul className="products-list">
          {productsList.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return <>{this.renderProductsList()}</>;
  }
}

export default AllProductsSection;