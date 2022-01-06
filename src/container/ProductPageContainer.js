import React from 'react';
import { connect } from 'react-redux'
import { fetchProduct} from '../actionCreators'
import ProductTabs from '../component/ProductTabs';
import '../Product.css';
require('../style.css');

class ProductPageContainer extends React.Component {



  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.fetchProduct(productId);
  }

 

  render() {
    console.log('props in ppc', this.props)

    if(!this.props.product) return null;
    return (
      <div>
        <div className='ppc-product-info'>
          <div align='ppc-image' >
            <img src={this.props.product.img_url} alt={this.props.product.name} align='left' style={{ height: '500px' }} />
          </div>

          <div className='ppc-info'>
            <h4>{this.props.product.brand}</h4>
            <h5>{this.props.product.name}
              <br />
              ${this.props.product.price}
            </h5>
          <div>
            <ProductTabs>
              <div label="Details">
                {this.props.product.detail}
              </div>
              <div label="How to use">
                {this.props.product.how_to_use}
              </div>
              <div label="Ingredients">
                {this.props.product.ingredients}
              </div>
            </ProductTabs>
          </div>        
        </div>
      </div>
      

      <hr></hr>
        <div>
       
        </div>
      </div>
    )
  }
}

function msp(state, ownProps) {
  // console.log('MSP PRODUCT PAGE CONTAINER', state)
  const productId = ownProps.match.params.productId;
  const product = state.product;
 

  return {
    productId,
    product,
 
  }
}

function mdp(dispatch) {
  // console.log('MDP PRODUCT PAGE CONTAINER', dispatch)
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
   
  }
}
export default connect(msp, mdp)(ProductPageContainer);