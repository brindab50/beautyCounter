import React from 'react';
import '../Product.css';
import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
import ProductCard from '../component/ProductCard'
import { nextPageCreator } from '../actionCreators';
import { previousPageCreator } from '../actionCreators';
// import PageButtons from '../component/PageButtons'



// skin care container imports
// connect from redux 
// fetch from action creators 
// product card component 
// next page creetor from action creators 
// page buttoms 
//  skin care containers calls a fetch all products function from action creator props 
// renders products with a start index of 10 
// total pages 
// renders a product card 

class SkinCareContainer extends React.Component {


  componentDidMount() {
    // debugger
    
    this.props.fetchAllProducts()
  }

  
  
  render(){
    const showProducts = this.props.products.slice(this.props.startIndex, this.props.startIndex + 10) 
    const totalPagesFloat = this.props.products.length / 10 || 0
    const totalPages = Math.ceil(totalPagesFloat)
    console.log('pages', totalPages)
    return(
      <div className='scc-product'>
        <div className='product-show-page'>
        {showProducts.map(product=>
          <ProductCard key={product.id} product={product}/>)}
          <br/>
        {/* <PageButtons nextIndex={this.props.nextIndex} previousIndex={this.props.previousIndex} totalPages={totalPages}/> */}
        </div>
        {/* <div> */}
        {/* </div> */}
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