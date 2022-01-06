let reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH ALL PRODUCTS':
      return { ...state, products: action.payload }
    case 'FETCH PRODUCT':
      return { ...state, product: action.payload.product }
    case 'NEXT_PAGE':
      let nextIndex = state.startIndex + 10
      return { ...state, startIndex: nextIndex }
    case 'PREVIOUS_PAGE':
      let previousIndex = state.startIndex - 10
      if (previousIndex < 0) { previousIndex = 0 }
      return { ...state, startIndex: previousIndex }
    default:
      return state
    case 'FETCH PRODUCT CATEGORIES':
      return { ...state, productCategories: action.payload }

  }

}

export default reducer;