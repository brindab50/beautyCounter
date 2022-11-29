import React from "react";


class Likes extends React.Component{ 

    state = { 
        likes: 24
    }


    
    handleClick = () => {
       
        this.setState({
            likes: this.state.likes + 1 
        })
    }
    render(){
        return(
            <div> 
                {this.state.likes} people loved this product
                <br/>
                <button onClick={this.handleClick}> Love ❤️ </button>
            </div>
        )
    }
}


export default Likes


























// state to tracks likes 
// function that increments the likes 


