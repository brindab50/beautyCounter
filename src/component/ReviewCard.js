import React from 'react'
import '../Review.css';





class ReviewCard extends React.Component{

  
  render(){
    console.log("jfn", this.props)

    // console.log(productReviews)
    return (

      <div>
        <div className='reviewer'>
            <h3>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h3>  {this.props.review.review}
    {/* <button className='review-update' onClick={() => this.handleDelete(this.props.review.id)}>Delete</button> */}
    {/* <button className='review-update' onClick={()=>this.handleEdit(this.props.review.id)}>Update</button> */}
          <br />
        </div>
      </div>
    )
  }


}

export default ReviewCard