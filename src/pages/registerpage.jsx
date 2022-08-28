import React, { Component } from 'react';
class Registerpage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <nav className="navbar"></nav>
    <div className="nav">
        <img src="./assets/img/Logo.svg" className="brand logo" alt=""/>
        <div class="reg/login">
        <h1 className='provide-details'>Register to Start Shopping</h1>

        </div>
    </div>
    <div className='box-container'>
    <div class="login-details">
        <label for="Email" className="emaillabel">Email</label><br></br>
        <input type="text" className="email" placeholder="Email"/><br></br>
        <label for="password" className="passwordlabel">Password</label><br></br>
        <input type="password" className="passwd" placeholder="Enter Password"/><br></br>
        <label for="password" className="Confirmpasswordlabel">Confirm Password</label><br></br>
        <input type="password" className="repasswd" placeholder="Re-Enter Password"/><br></br>
        <button className="bigregbtn">REGISTER</button>
    </div>
      <div className="bgimg">
         <img src="./assets/img/banner - bg.svg" alt="" className="orangebg"/>
          <img src="./assets/img/banner - product.svg" alt="" className="probanner"/>
       </div>  
    </div>
    </div>
        )
    }
}
 
export default Registerpage;