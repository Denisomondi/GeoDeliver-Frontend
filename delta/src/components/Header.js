import React from "react"
import myImage from './vecteezy_3d-rendering-online-payment-for-ecommerce-or-online-shop_8508172_957.png';

const Header = () => {
    return(
<header className="App-header">
        <h1>
          <img className='logo' src={myImage} alt="My Image" />
          Welcome to the Store
        </h1>
      </header>
    )
}

export default Header;

