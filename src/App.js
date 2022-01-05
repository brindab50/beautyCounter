// ****** project requirements *******
// ****** the code should be written in ES6 as much as possible
// ****** Use the create-react-app generator to start your project.
// ****** Your app should have one HTML page to render your react-redux application
// ****** There should be 5 stateless components
// ****** There should be 3 routes
// ****** The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs (Links to an external site.); docs for v4 can be found here (Links to an external site.))
// ****** Use Redux middleware to respond to and modify state change
// ****** Make use of async actions and redux-thunk middleware to send data to and receive data from a server
// ****** Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
// ****** Your client-side application should handle the display of data with minimal data manipulation



import React from 'react';
import './App.css';
import { withRouter, Route, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
import ProductPageContainer from './container/ProductPageContainer'
import SkinCareContainer from './container/SkinCareContainer'
import CartContainer from './container/CartContainer'
import CartIndexContainer from './container/CartIndexContainer';
import UserContainer from './container/UserContainer'
import SignUpFormContainer from './container/SignUpFormContainer';
import NavBar from './component/NavBar';
import * as requests from './requests';
// import { createCart } from './actionCreators';




class App extends React.Component {

  state = {
    user: null,
    cart: null
  }

  componentDidMount(){
    // debugger
    const token = localStorage.token

    if(token){
      //get user info

      fetch("http://localhost:4000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
        } else {
          this.setState({
            user: response.user,
            cart: response.cart[0]
          })
        }
      })
    }
  }

  createUser = (user) => {
    requests.createUser(user)
      .then(resp => {
        if (resp.errors) {
          alert(resp.errors)
        } else {
          this.setState(() => 
          ({ user: resp.user }), () => {
            localStorage.token = resp.token
          })
        }
        this.props.history.push('/glowup')
      })
  }

  login = (user) => {
    requests.loginUser(user)
      .then(resp => {
        if (resp.errors) {
          alert(resp.errors)
        } else {
          this.setState(() => ({ user: resp.user }), () => {
            localStorage.token = resp.token
          })
        }
        this.props.history.push('/glowup')
      }
    )
  }

  logout = () => {
    this.setState({
      user: null
    }, () => {
      localStorage.removeItem("token")
    })
  }

  render () {
    // debugger
    return (
      <div>
        <NavBar currentUser={this.state.user} logout={this.logout}/>
        <Switch>
          <Route path='/glowup' render={() => <MainContainer currentUser={this.state.user} />} />
          <Route exact path='/collections/skincare' render={() => <SkinCareContainer />} />
          <Route path='/collections/best-sellers' render={() => <SkinCareContainer />} />
          <Route path='/collections/skincare/products/:productName' render={() => <ProductPageContainer />} />
          <Route path='/collections/skincare/:productId' render={(props) => <ProductPageContainer {...props} currentUser={this.state.user} currentCart={this.state.cart} />} />
          <Route path='/collections/skincare/:productId' component={ProductPageContainer} currentUser={this.state.user}/>
          <Route path='/account/:userId/cart/:cartId' render={(props) => <CartContainer {...props} currentUser={this.state.user} />} />
          <Route path='/account/:userId/cart/' render={(props) => <CartIndexContainer {...props} currentUser={this.state.user} />} />
          <Route path='/account/login' render={() => <UserContainer login={this.login} currentUser={this.state.user} />}/>
          <Route path='/account/signup' render={() => <SignUpFormContainer createUser={this.createUser} currentUser={this.state.user}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
