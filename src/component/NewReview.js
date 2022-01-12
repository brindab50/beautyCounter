import React from 'react';
import '../Review.css'


class NewReview extends React.Component {



  
  render() {

    return (

      <div>
     Write a Review
        <form id='reviewForm' >
         <br />
          <textarea className='write-review' type='textarea' name="review" placeholder='Review' onChange={this.changeHandler('review')} />
          <br />
          <button>Submit</button>
          <hr />
        </form>
      </div>
    )
  }
}

export default NewReview;