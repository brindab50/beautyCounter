
const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
const parseData = response => response.json();
const url = "http://localhost:3000"
export const nextPageCreator = () => ( {type: 'NEXT_PAGE'} )
export const previousPageCreator = () => ( {type: 'PREVIOUS_PAGE'} )




export const fetchAllProducts = () => dispatch => {
  fetch(`${url}/products`)
  .then(res => res.json())
  .then(data => {
   console.log('fetchALLproducts action', data)
    dispatch({type: 'FETCH ALL PRODUCTS', payload: data})
  })
}

export const fetchProduct = (id) => dispatch => {
  fetch(`${url}/products/${id}`)
  .then(res => res.json())
  .then(data => {
   console.log('fetchONEproductid ACTIONNNN', data)
    dispatch({type: 'FETCH PRODUCT', payload: data})
  })
}


export const fetchProductCategories = () => dispatch => {
  fetch(`${url}/product_categories`)
  .then(res => res.json())
  .then(data => {
   console.log('fetch product categories action', data)
    dispatch({type: 'FETCH PRODUCT CATEGORIES', payload: data})
  })
  
}