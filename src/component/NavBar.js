import React from 'react';
import { Link } from 'react-router-dom'

import '../NavBar.css'



class NavBar extends React.Component {
  render() {


    return (

      <nav className="navbar nav-bar navbar-expand-lg navbar-light navbar-fixed-top sticky">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
          {/* <img src='../treatment.png' alt='glowup' style={{width: '40px'}}/> */}
          </div>
          <div className="">
            <a className="nav-bar-glowup" href="/glowup" style={{color: '#fa2acd'}}>GLOW UP</a>
          </div>
          <ul className="navbar-nav mr-auto nav-options">


            <div className='nav-bar-center'>

              <div className="">
                <a className='' href="/collections/skincare">Recomended Products</a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    )
  }

}

export default NavBar