import React from "react";

import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
import { render } from "@testing-library/react";
import ProductCard from "./ProductCard";





class Skincare extends React.Component{



    componentDidMount() {
    
        this.props.fetchAllProducts()
      }

      
    
    render(){
    const treatments = this.props.products.filter(p => p.product_type.name == "spot treatment" )

        return(
            <div>
              <h1>Treatments</h1>

              <div className='scc-product'>
        <div className='product-show-page'>
        {treatments.map(product=>
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

  

export default connect(msp, mdp)(Skincare)