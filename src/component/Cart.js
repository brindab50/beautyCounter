import React from "react";
import '../Cart.css';



// needs to display the cart state 
// each item in state should be displayed in a cart format 
// import state from redux and console.log the current state vs the state after the event 
// when the event is fired it should add item push item to cart 

class Cart extends React.Component {

render(){
    return(
        <div> 
            <h1>
               your Cart is empty
            

            </h1>
        </div>
    )
}
}

export default Cart



