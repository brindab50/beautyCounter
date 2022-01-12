import React from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actionCreators'

import '../Review.css';

class ReviewsComponent extends React.Component {

  componentDidMount() {
    this.props.fetchReviews()
  }



  render() {
      console.log("testnnn", this.props.reviews )
    return (
      <div>
    
    Check out this products reviews
       
    
  
      </div>
    )
  }

}

function msp(state) {
  // debugger
console.log('msp', state)
  return { reviews: state.reviews }
}

function mdp(dispatch) {
  return { fetchReviews: () => dispatch(fetchReviews()) }
}
export default connect(msp, mdp)(ReviewsComponent);