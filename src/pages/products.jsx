import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Productpage extends Component{
    state = {  } 
    render() { 
        return (
            <div>
                <div className="pronavbar">
                <Link to="/"><img src="./assets/img/Logo.svg" className="hombrand logo" alt=""/></Link>
        <div className="prosellprobtn">
        <button className="prosellbtn">+ SELL</button>
        <button className="proprofile"><img src="./assets/img/circle-user.svg" alt="" width="40px" height="40px"/></button>
    </div>
    </div>
    <div className="pronav">
        <ul className="prolinks-container">
            <li className="prolinks"><Link to="" className="proitems">All</Link ></li>
            <li className="prolinks"><Link to="" className="proitems">Car</Link ></li>
            <li className="prolinks"><Link to="" className="proitems">Furniture</Link ></li>
            <li className="prolinks"><Link to="" className="proitems">Mobile</Link ></li>
            <li className="prolinks"><Link to="" className="proitems">TV's</Link ></li>
            <li className="prolinks"><Link to="" className="proitems">Kitchen appliances</Link ></li>
            <li className="prolinks"><Link to="" className="proitems">Laptops</Link ></li>
            <li className="prolinks"><Link to="" className="proitems">Home appliances</Link ></li>
            <li className="prolinks"><Link to="" className="proitems">Entertainment</Link ></li>

        </ul>
    </div>
    <div className="probox-container" >
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/watch.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Fastrack Watch</h3>
                <p className="proprddetail">Stylish Men's Watch</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>
                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/rayban.jpg" alt="" width="350px" height="350px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Rayban Glasses</h3>
                <p className="proprddetail">Stylish Unisex Glasses from rayban</p>

                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/nike.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Nike Shoes</h3>
                <p className="proprddetail">Stylish Unisex Shoes from Nike</p>

                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/bag combo.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Travel bags</h3>
                <p className="proprddetail">(Combo) Pack of 2 bags</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/gucci bag.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Gucc1 Hand bag</h3>
                <p className="proprddetail">A premium handbag from gucci</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/headphones.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">JBL Headphones</h3>
                <p className="proprddetail">The featurestic headphones from JBL</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/landingAccessories.png" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Landing Accessories</h3>
                <p className="proprddetail">A Pack of all Landing Accessories</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/mac makeup.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Mac Makeup</h3>
                <p className="proprddetail">A Pack of Makeupkit</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/pendant.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Pendant</h3>
                <p className="proprddetail">Premium rustfree pendant</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/sunglass.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Combo Sunglasses</h3>
                <p className="proprddetail">Pack of 2 Sunglasses</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
       <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/Smart Watch.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">SMART Watch</h3>
                <p className="proprddetail">Full featured Smartwatch</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
        <div className ="probox">
            <div className="proimage">
              <img src="./assets/img/Alexa.jpg" alt="" width="350px" height="350 px"/>
            </div>
            <div className="proinfo">
                <h3 className="protitle">Bluetooth Speaker</h3>
                <p className="proprddetail">Bluetooth Speaker with best sound quality</p>
                <div className="prosubinfo">
                    <div className="proprice">₹1000/-</div>
                    <div><button className="probuybtn">BUY PRODUCT</button></div>

                    <div className="prostars">
                        <i className="profas fa-star  "></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        );
    }
}
 
export default Productpage

