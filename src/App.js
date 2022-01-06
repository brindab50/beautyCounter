import React from 'react';
import './App.css';
import { withRouter, Route, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
import ProductPageContainer from './container/ProductPageContainer.js'
import SkinCareContainer from './container/SkinCareContainer'
import NavBar from './component/NavBar';
import Filter from './component/SearchBar';



class App extends React.Component {

  state = {
    user: null,
    filter: []
  }

  render () {
    // debugger
    return (
      <div>
        <NavBar currentUser={this.state.user} logout={this.logout}/>
        <Filter/> 
        <Switch>
        
          <Route path='/glowup' render={() => <MainContainer currentUser={this.state.user} />} />
          <Route exact path='/collections/skincare' render={() => <SkinCareContainer />} />
          <Route path='/collections/skincare/products/:productName' render={() => <ProductPageContainer />} />
          <Route path='/collections/skincare/:productId' render={(props) => <ProductPageContainer {...props} currentUser={this.state.user} currentCart={this.state.cart} />} />
          {/* <Route path='/collections/skincare/:productId' component={ProductPageContainer} currentUser={this.state.user}/> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
  