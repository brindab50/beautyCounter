import React from "react";

import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
import { render } from "@testing-library/react";
import ProductCard from "./ProductCard";





class Masks extends React.Component{



    componentDidMount() {
    
        this.props.fetchAllProducts()
      }

      
    
    render(){
    const masks = this.props.products.filter(p => p.product_type.name == "sheet masks" )

        return(
            <div>
              

              <div className='scc-product'>
        <div className='product-show-page'>
        {masks.map(product=>
          <ProductCard key={product.id} product={product} />)}
          <br/>
        </div>
        
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

export default connect(msp, mdp)(Masks)