
const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
const url = "http://localhost:3000"


export const fetchAllProducts = () => dispatch => {
  fetch(`${url}/products`)
  .then(res => res.json())
  .then(data => {
  //  console.log('fetchALLproducts action', data)
    dispatch({type: 'FETCH ALL PRODUCTS', payload: data})
  })
}

export const fetchProduct = (id) => dispatch => {
  fetch(`${url}/products/${id}`)
  .then(res => res.json())
  .then(data => {
  //  console.log('fetchONEproductid ACTIONNNN', data)
    dispatch({type: 'FETCH PRODUCT', payload: data})
  })
}


export const fetchProductCategories = () => dispatch => {
  fetch(`${url}/product_categories`)
  .then(res => res.json())
  .then(data => {
  //  console.log('fetch product categories action', data)
    dispatch({type: 'FETCH PRODUCT CATEGORIES', payload: data})
  })
  
}

export const fetchReviews = (productId) => dispatch => {
  fetch(`${url}/products/${productId}/reviews`)
  .then(res => res.json())
  .then(data => {
  //  console.log('fetchreview action', data)
    dispatch({type: 'FETCH REVIEWS', payload: data})
  })
}
export const deleteReview = (reviewId) => dispatch => {
  // debugger
  fetch(`${url}/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({reviewId})
  }).then(res => res.json())
  .then(data => {
    dispatch({type: 'DELETE REVIEW', payload: data})
  })
}

export const postReview = (review) => dispatch => {
  // debugger
  fetch(`${url}/reviews/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({review})
  }).then(res => res.json())
  .then(data => {
    // console.log("geee", data)
    dispatch({type: 'POST REVIEW', payload: data})
  })
  
}

export const fetchAllSteps = () => dispatch => {
  fetch(`${url}/steps`)
  .then(res => res.json())
  .then(data => {
  //  console.log('fetchALLSteps action', data)
    dispatch({type: 'FETCH ALL STEPS', payload: data})
  })
}