import React from 'react';
import { connect } from 'react-redux'
import { postReview} from '../actionCreators'
import ReviewsComponent from './ReviewsComponent';
import '../Review.css'


class Review extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          review: '',
          product_id: '',
        };
      }


 
    changeHandler(field) {
        return (e) => {
          // console.log("test666", e.target.value)

          this.setState({
            [field]: e.target.value,
            'product_id': this.props.product.id,
          });
        };
      }

      handleSubmit = (e) => {
        e.preventDefault()
        const review = Object.assign({}, this.state)
        console.log(review)
        this.props.postReview(review)
        this.reviewForm.value = ''
    }
    
  
    
    
    
  render() {
    // console.log("test", this.props.product.id)
    // console.log("jnjn", this.state)
    // console.log("vbbbb", this.props.postReview)

    return (

      <div>
         Write a Review
        <form id='reviewForm' onSubmit={this.handleSubmit}  >
        <br />
          <textarea className='write-review' value={this.state.review} type='textarea' name="review" placeholder='Review' onChange={this.changeHandler('review')} />
          <br />
          <button>Submit</button>
          <hr />
        </form>

        

        <ReviewsComponent />
      </div>

    )
  }


}


function msp(state) {
  return {review: state.review}

}

function mdp(dispatch) {
  return { postReview: (review) => dispatch(postReview(review)) }

}

export default connect(msp, mdp)(Review)