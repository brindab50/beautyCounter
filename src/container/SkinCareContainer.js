
import React from 'react';
import '../Product.css';
import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
import ProductCard from '../component/ProductCard'
import Search from '../component/Search';

class SkinCareContainer extends React.Component {
  
  state = {
    searchTerm: ''
  }


  componentDidMount() {
    
    this.props.fetchAllProducts()
  }

  handleSearchChange = event => {
    this.setState({ searchTerm: event.target.value })
  }
 
  render(){
    const showProducts = this.props.products.filter(p =>
      p.detail.toLowerCase().includes(this.state.searchTerm)
    )
      console.log("test g", this.props.products[0].product_type.name)


    // const skincare = this.props.products.filter(p => p.product_type === this.props.products.product_type)


    
    return(
      <div className='scc-product'>
        <div className='product-show-page'>
        <Search onChange={this.handleSearchChange}/>
        
        {showProducts.map(product=>
          <ProductCard key={product.id} product={product} />)}
          <br/>
        </div>
        
      </div>
    )
  }

}


function msp(state) {
  // console.log('mspp', state)
  return {
    products: state.products,

  }
}

function mdp(dispatch) {
  // console.log('mdppppp', dispatch)
  return { 
    fetchAllProducts: () => dispatch(fetchAllProducts()),
  
  }
}
export default connect(msp, mdp)(SkinCareContainer);