import NavBar from './NavBar';
import { Link } from 'react-router-dom';
// import { useState } from 'react'; 


const Header = (props) => {

    
  return (
    <header>
      <div className="nav-area">
        <Link to="/glowup" className="logo">
          Secret Potions | SoHo, New York
        </Link>
        <br/> 
        <br/> 
        <br/> 
        <br/> 

        <NavBar />
       
        {/* <Search onChange={props.onChange}/> */}
      </div>

             <Link to="/cart" className="cart">
               <img src={'../cart3.webp'} alt='cart' style={{width: '40px'}}/>
             </Link>
    </header>
  );
};

export default Header;