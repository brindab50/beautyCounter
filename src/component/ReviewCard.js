import React from 'react'
import '../Review.css';


class ReviewCard extends React.Component{

    handleOnClick = () => {
        this.props.deleteReview(this.props.review.id)
      }
  
  render(){
    return (

      <div>
        <div className='reviewer'>
            <h3>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h3>  {this.props.review.review}
            <button className='review-update' onClick={this.handleOnClick}> Delete </button>

          <br />
        </div>
      </div>
    )
  }


}

export default ReviewCard