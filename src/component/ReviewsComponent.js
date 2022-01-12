import React from 'react';
import { connect } from 'react-redux'
import { fetchReviews} from '../actionCreators'
import ReviewCard from './ReviewCard';
import '../Review.css';

class ReviewsComponent extends React.Component {

  componentDidMount() {
    this.props.fetchReviews()



  }



  render() {
    //   console.log("bbb", this.props.product.id)
    //   console.log("bbb", this.props.reviews)

    let productReviews = this.props.reviews.filter(review => review.product_id === this.props.product.id)
    console.log("bbb", productReviews)

   let x = productReviews.map(review => <ReviewCard  review={review} key={review.id}/> )
    return (
        
      <div>
    
    Check out this products reviews
    {x}
      </div>
    )
  }

}

function msp(state) {
  // debugger
console.log('msp', state)
return { 
    reviews: state.reviews,
    product: state.product

}

  




}

function mdp(dispatch) {
  return { fetchReviews: () => dispatch(fetchReviews()) }
}
export default connect(msp, mdp)(ReviewsComponent);