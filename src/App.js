// ****** The code should be written in ES6 as much as possible
// ******  Use the create-react-app generator to start your project.
// ******  Follow the instructions on this repo to setup the generator: create-react-app (Links to an external site.)
// ******  Your app should have one HTML page to render your react-redux application
// ******  There should be 5 stateless components
// ******  There should be 3 routes
// ******  The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs (Links to an external site.); docs for v4 can be found here (Links to an external site.))
// ******  Use Redux middleware to respond to and modify state change
// ******  Make use of async actions and redux-thunk middleware to send data to and receive data from a server
// ******  Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
// ******  Your client-side application should handle the display of data with minimal data manipulation




// ____________________________





// create react app was used to start the project 
// application has 5 or more statless components 
// application has 3 routes 
// application makes use of react router 
// redux is used to respond or modify state changes 
// thunk middleware is used to respond make async actions to recieve data from endpoint 
// rails endpoint handles data persistence with a db
// frontend application handles display of data with minimal data manipulation 

import React from 'react';
import './App.css';
import { withRouter, Route, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
import ProductPageContainer from './container/ProductPageContainer.js'
import SkinCareContainer from './container/SkinCareContainer'
import NavBar from './component/NavBar';


class App extends React.Component {



  render () {
    // debugger
  
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/glowup' render={() => <MainContainer />} />
          <Route exact path='/collections/skincare' render={() => <SkinCareContainer    />} />
          <Route path='/collections/skincare/products/:productName' render={() => <ProductPageContainer />} />
          <Route path='/collections/skincare/:productId' render={(props) => <ProductPageContainer {...props}   />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
  