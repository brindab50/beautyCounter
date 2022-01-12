import React from 'react';
import '../Product.css';
import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
import ProductCard from '../component/ProductCard'
import PageButtons from '../component/PageButtons'
import { nextPageCreator } from '../actionCreators';
import { previousPageCreator } from '../actionCreators';
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
      p.detail.includes(this.state.searchTerm)
    )
    
    // const showProducts = this.props.products.slice(this.props.startIndex, this.props.startIndex + 10) 
    const totalPagesFloat = this.props.products.length / 10 || 0
    const totalPages = Math.ceil(totalPagesFloat)

    console.log('pages', totalPages)
    return(
      
      <div className='scc-product'>
        <div className='product-show-page'>
        <Search onChange={this.handleSearchChange}/>
        {showProducts.map(product=>
          <ProductCard key={product.id} product={product} />)}
          <PageButtons nextIndex={this.props.nextIndex} previousIndex={this.props.previousIndex} totalPages={totalPages}/>

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
    startIndex: state.startIndex,

  }
}

function mdp(dispatch) {
  // console.log('mdppppp', dispatch)
  return { 
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    nextIndex: () => dispatch(nextPageCreator()),
    previousIndex: () => dispatch(previousPageCreator()) 
  
  }
}
export default connect(msp, mdp)(SkinCareContainer);