import React from "react";

import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
import { render } from "@testing-library/react";
import ProductCard from "./ProductCard";





class Cleanser extends React.Component{



    componentDidMount() {
    
        this.props.fetchAllProducts()
      }

      
    
    render(){
    const cleansers = this.props.products.filter(p => p.product_type.name == "spot treatment" )

        return(
            <div>

              <div className='scc-product'>
              <div className='product-show-page'>
                {cleansers.map(product=>
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

export default connect(msp, mdp)(Cleanser)