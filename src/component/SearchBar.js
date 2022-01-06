import React from 'react';
import { connect } from 'react-redux'
import { fetchProductCategories } from '../actionCreators'



class SearchBar extends React.Component {
  

  componentDidMount() {
    // debugger
    this.props.fetchProductCategories()
  }


  
  render(){

    console.log('categories from component', this.props.productCategories)
    return(
        <div>
      <br/>
        
      <label>
        <strong>Filter Products:</strong>
        <select value={this.props.productCategories.filter} onChange={(e)=>this.props.productCategories.updateFilter(e.target.value)}>
        <option value="All">All</option>
          <option value="All">Product Categories</option>
          <option value="Tech">Skin Concerns</option>
          <option value="Sportswear">Brands</option>
          <option value="Finance">Product Types</option>
        </select>
      </label>
      </div>
    )
  }

}


function msp(state) {
  // console.log('mspp', state)
  return {
    productCategories: state.productCategories,

  }
}

function mdp(dispatch) {
  // console.log('mdppppp', dispatch)
  return { 
    fetchProductCategories: () => dispatch(fetchProductCategories()),

  }
}
export default connect(msp, mdp)(SearchBar);



