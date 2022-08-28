import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Productpage extends Component{
    state = {  } 
    render() { 
        return (
            <div>
                <div className="navbar">
        <img src="./img/Logo.svg" alt=""/>
        <div className="sellprobtn">
        <button className="sellbtn">+ SELL</button>
        <button className="profile"><img src="./assets/img/circle-user.svg" alt="" width="40px" height="40px"/></button>
    </div>
    </div>
    <div className="nav">
        <ul className="links-container">
            <li className="links"><Link to="" className="items">All</Link ></li>
            <li className="links"><Link to="" className="items">Car</Link ></li>
            <li className="links"><Link to="" className="items">Furniture</Link ></li>
            <li className="links"><Link to="" className="items">Mobile</Link ></li>
            <li className="links"><Link to="" className="items">TV's</Link ></li>
            <li className="links"><Link to="" className="items">Kitchen appliances</Link ></li>
            <li className="links"><Link to="" className="items">Laptops</Link ></li>
            <li className="links"><Link to="" className="items">Home appliances</Link ></li>
            <li className="links"><Link to="" className="items">Entertainment</Link ></li>

        </ul>
    </div>
    <div className="box-container" >
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/watch.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Fastrack Watch</h3>
                <p className="prddetail">Stylish Men's Watch</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>
                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link >
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/rayban.jpg" alt="" width="350px" height="350px"/>
            </div>
            <div className="info">
                <h3 className="title">Rayban Glasses</h3>
                <p className="prddetail">Stylish Unisex Glasses from rayban</p>

                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/nike.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Nike Shoes</h3>
                <p className="prddetail">Stylish Unisex Shoes from Nike</p>

                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/bag combo.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Travel bags</h3>
                <p className="prddetail">(Combo) Pack of 2 bags</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/gucci bag.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Gucc1 Hand bag</h3>
                <p className="prddetail">A premium handbag from gucci</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/headphones.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">JBL Headphones</h3>
                <p className="prddetail">The featurestic headphones from JBL</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/landingAccessories.png" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Landing Accessories</h3>
                <p className="prddetail">A Pack of all Landing Accessories</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/mac makeup.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Mac Makeup</h3>
                <p className="prddetail">A Pack of Makeupkit</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/pendant.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Pendant</h3>
                <p className="prddetail">Premium rustfree pendant</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/sunglass.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Combo Sunglasses</h3>
                <p className="prddetail">Pack of 2 Sunglasses</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/Smart Watch.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">SMART Watch</h3>
                <p className="prddetail">Full featured Smartwatch</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
        <Link to=""><div className ="box">
            <div className="image">
              <img src="./assets/img/Alexa.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="info">
                <h3 className="title">Bluetooth Speaker</h3>
                <p className="prddetail">Bluetooth Speaker with best sound quality</p>
                <div className="subinfo">
                    <div className="price">₹1000/-</div>
                    <div><button className="buybtn">BUY PRODUCT</button></div>

                    <div className="stars">
                        <i className="fas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div></Link>
    </div>
            </div>
        );
    }
}
 
export default Productpage
