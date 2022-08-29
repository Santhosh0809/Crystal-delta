import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registerpage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <nav className="regnavbar"></nav>
    <div className="regnav">
    <Link to="/"><img src="./assets/img/Logo.svg" className="hombrand logo" alt=""/></Link>
        <div className="regreg/login">
        <h1 className='regprovide-details'>Register to Start Shopping</h1>

        </div>
    </div>
    <div className='regbox-container'>
    <div class="reglogin-details">
        <label for="Email" className="regemaillabel">Email</label><br></br>
        <input type="text" className="regemail" placeholder="Email"/><br></br>
        <label for="password" className="regpasswordlabel">Password</label><br></br>
        <input type="password" className="regpasswd" placeholder="Enter Password"/><br></br>
        <label for="password" className="regConfirmpasswordlabel">Confirm Password</label><br></br>
        <input type="password" className="regrepasswd" placeholder="Re-Enter Password"/><br></br>
        <button className="regbigregbtn">REGISTER</button>
    </div>
      <div className="regbgimg">
         <img src="./assets/img/banner - bg.svg" alt="" className="regorangebg"/>
          <img src="./assets/img/banner - product.svg" alt="" className="regprobanner"/>
       </div>  
    </div>
    </div>
        )
    }
}
 
export default Registerpage;
