import React from "react";

import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
import { render } from "@testing-library/react";





class Skincare extends React.Component{



    componentDidMount() {
    
        this.props.fetchAllProducts()
      }

      
    
    render(){

        // console.log(this.props.products.filter(p => p.p === ))
        return(
            <div>
              <h1>skincare</h1>
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