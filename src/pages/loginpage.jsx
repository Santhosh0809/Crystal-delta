import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Loginpag extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <nav className="lognavbar"></nav>
     <div className="lognav">
    <Link to="/"><img src="./assets/img/Logo.svg" className="hombrand logo" alt=""/></Link>
        <div className="logreg/login">
        <h1 className='logprovide-details'>Login to begin your Shopping</h1>
     </div>
    </div>
    <div className='logbox-container'>
    <div class="loglogin-details">
        <label for="Email" className="logemaillabel">Email</label><br></br>
        <input type="text" className="logemail" placeholder="Email"/><br></br>
        <label for="password" className="logpasswordlabel">Password</label><br></br>
        <input type="password" className="logpasswd" placeholder="Enter Password"/><br></br>
        <Link to="/Productpage"><button className="logbigloginbtn">LOGIN</button></Link>
    </div>
      <div className="logbgimg">
         <img src="./assets/img/banner - bg.svg" alt="" className="logorangebg"/>
          <img src="./assets/img/banner - product.svg" alt="" className="logprobanner"/>
       </div>  
    </div>
    </div>
        );
    }
}
 
export default Loginpag;
