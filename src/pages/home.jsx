import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div >
            <nav className="homnavbar"></nav>
    <div class="homnav">
        <Link to="/"><img src="./assets/img/Logo.svg" className="hombrand logo" alt=""/></Link>
        <div className="homreg/login">
            <Link to="/Loginpag"><button className="homloginbtn">Login</button></Link>
            <Link to="/Registerpage"><button className="homregbtn">Register</button></Link>
        </div>
    </div>
    <div className='hombox-container'>
    <div className="hombgimg">
     <img src="./assets/img/banner - bg.svg" alt="" className="homorangebg"/>
     <img src="./assets/img/banner - bg -blue.svg" alt="" className="hombluebg"/> 
     </div>
     <img src="./assets/img/banner - product.svg" alt="" className="homprobanner"/>  
     <div className='homtex'>
     <div class="homtexts">
        <h1 className="homfirsttxt">BUY&nbsp;</h1>
        <h1 className="homsecondtxt">THE&nbsp; </h1>
        <h1 className="homthirdtxt">PRODUCT&nbsp; </h1>
        <h1 className="homforthtxt">FOR&nbsp;</h1>
        <h1 className="homfifthtxt">YOU!&nbsp;</h1>
     </div>  
     <div className="homndtexts">
        <h1 className="homsixthtxt">SELL&nbsp;</h1>
        <h1 className="homseventhxt">YOUR&nbsp;</h1>
        <h1 className="homeighthtxt">PRODUCTS!&nbsp;</h1>
    </div>
    <div className="homsmltxt">
        <h3 className="homst">Lorem Ipsum is simply dummy text of the</h3>
    </div>
     <div className="homsmltxt2"><h3>printing and typesetting industry.</h3></div>
<Link to="/Productpage"><button className="homexpbtn">Explore products</button></Link>
     </div>
     </div>
     </div>
        );
    }
}
 
export default Home;
