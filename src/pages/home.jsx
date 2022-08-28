import React, { Component } from 'react';
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div >
            <nav className="navbar"></nav>
    <div class="nav">
        <img src="./assets/img/Logo.svg" className="brand logo" alt=""/>
        <div className="reg/login">
            <button className="loginbtn">Login</button>
            <button className="regbtn">Register</button>
        </div>
    </div>
    <div className='box-container'>
    <div className="bgimg">
     <img src="./assets/img/banner - bg.svg" alt="" className="orangebg"/>
     <img src="./assets/img/banner - bg -blue.svg" alt="" className="bluebg"/> 
     </div>
     <img src="./assets/img/banner - product.svg" alt="" className="probanner"/>  
     <div className='tex'>
     <div class="texts">
        <h1 className="firsttxt">BUY&nbsp;</h1>
        <h1 className="secondtxt">THE&nbsp; </h1>
        <h1 className="thirdtxt">PRODUCT&nbsp; </h1>
        <h1 className="forthtxt">FOR&nbsp;</h1>
        <h1 className="fifthtxt">YOU!&nbsp;</h1>
     </div>  
     <div className="ndtexts">
        <h1 className="sixthtxt">SELL&nbsp;</h1>
        <h1 className="seventhxt">YOUR&nbsp;</h1>
        <h1 className="eighthtxt">PRODUCTS!&nbsp;</h1>
    </div>
    <div className="smltxt">
        <h3 className="st">Lorem Ipsum is simply dummy text of the</h3>
    </div>
     <div className="smltxt2"><h3>printing and typesetting industry.</h3></div>
<button className="expbtn">Explore products</button>
     </div>
     </div>
     </div>
        );
    }
}
 
export default Home;