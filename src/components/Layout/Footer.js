import React from "react";
import './Layout.css';
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { MdContactSupport } from "react-icons/md";
import { TbBuildingStore } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaHandHoldingHeart, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-box md:gap-8">
                <div className="grid text-left leading-6 font-normal">
                    <div className="lost">
                        <div className="flex items-center">
                            <TfiWorld /><span className="font-bold ml-3">
                                ARE YOU LOST?</span>
                        </div> <br />
                        <p> Browser our website adapted to your location: </p>
                        <p className="underline"> Fútbol Emotion's international websites </p> <br />
                        <select>
                            <option value="0">English</option>
                            <option value="1">Spanish</option>
                            <option value="2">French</option>
                            <option value="3">Portuguese</option>
                        </select> <br />
                        <select>
                            <option value="0">€ EUR (Euros)</option>
                            <option value="1">£ GBP (British Pounds)</option> 
                            <option value="2">$ USD (U.S. Dollar)</option>
                        </select> 
                    </div> <br />
                    
                    <div className="support">
                        <div className="flex items-center">
                            <MdContactSupport />
                            <span className="font-bold ml-3"> 
                                SUPPORT </span>
                        </div> <br />
                        <p> Fill in our <span className="underline"> customer support </span> form </p>
                        <br />
                        <p> *Our opening hours are from <span className="font-semibold"> monday</span> to 
                            <span className="font-semibold"> friday </span> from <span className="font-semibold"> 9 </span>
                            to <span className="font-semibold"> 16:30 </span> (except holidays). We will do our best
                            for your enquiry within 24-48 hours (except weekends). </p> 
                    </div> <br />
                    
                    <div className="stores">
                        <div className="flex items-center">
                            <TbBuildingStore style={{ verticalAlign: 'middle', lineHeight: '1', fontSize: '15px'}}/> 
                            <span className="font-bold ml-3"> 
                                STORES </span>  
                        </div> <br />
                        <p> Find your nearest Fútbol Emotion store </p>
                        <div className="flex items-center">
                            <IoLocationOutline style={{fontSize: '15px', color: '#ffac00'}}/> 
                            <span className="ml-1"> 
                                View all stores </span>
                        </div>
                    </div>
                </div>

                <div className="legal-information grid text-left font-normal">
                    <div className="leading-9">
                        <h1 className="font-bold"> LEGAL INFORMATION </h1>
                        <p> Legal disclaimer </p>
                        <p> General terms and conditions </p>
                        <p> Cookie policy </p>
                        <p> Privacy policy </p> 
                    </div>
                    <div className="leading-9 mb-12">
                        <h2 className="font-bold"> COMPANY </h2>
                        <p style={{ color: '#ffc44f'}}> Charitable Project Fútbol Everywhere <FaHandHoldingHeart /></p>
                        <p> Work with us </p>
                        <p> Compliance </p>
                        <p> Member community </p>
                    </div>
                    
                </div>

                <div className="material-information grid text-left font-normal">
                    <div className="leading-9">
                        <h1 className="font-bold"> MATERIAL INFORMATION </h1>
                        <p> Sports gear customization </p>
                        <p> Boot size conversion charts </p>
                        <p> Gloves and boots recommender </p>
                        <p> Football equipment guide </p>
                    </div>
                    
                    <div className="leading-9 mb-16">
                        <h2 className="font-bold"> SHOPPING INFORMATION </h2>
                        <p> Shopping information </p>
                        <p> Shipping information </p>
                        <p> Right of withdrawal </p>
                        <p> Exchange Policy </p>
                        <p> Black Friday </p> 
                    </div>
                </div>

                <div className="newsletter grid text-left font-normal">
                    <div className="leading-9">
                        <h1 className="font-bold"> NEWSLETTER </h1>
                        <p> Tell us about your preferences and receive customised
                            emails related only with your interests.
                        </p>
                        <div className="newsletter1">
                            <input type="email" placeholder="email@email.com"/>
                            <button className="font-bold">SIGN UP</button>
                        </div>
                        <div className="newsletter2">
                            <input className="mt-3" type="checkbox"/> 
                            <label className="ml-2">I agree to receive communication personalised for me in accordance with the 
                                <Link to="https://www.futbolemotion.com/en/informacioncompra/privacidad">  
                                    Privacy Policy</Link> of Sports Emotion.
                            </label>
                        </div>
                        <div className="leading-5 mt-6">
                            <h1 className="font-bold"> OUR SOCIAL NETWORKS </h1>
                            <div className="social-network">
                                <ul className="flex gap-9 align-middle items-center list-none">
                                    <li>
                                        <Link to="#" className="flex items-center">
                                            <FaFacebook style={{ fontSize: '25px' }} />
                                            <span style={{ marginLeft: '0.5rem' }}>@fulbolemotionen</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center">
                                            <FaYoutube style={{ fontSize: '25px' }} />
                                            <span style={{ marginLeft: '0.5rem' }}>Fútbol Emotion</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="flex gap-8 mt-2.5 list-none">
                                    <li>
                                        <Link to="#" className="flex items-center">
                                            <FaTwitter style={{ fontSize: '25px' }} />
                                            <span style={{ marginLeft: '0.5rem' }}>@FutbolEmotionEN</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center">
                                            <FaInstagram style={{ fontSize: '25px' }} />
                                            <span style={{ marginLeft: '0.5rem' }}>futbolemotion</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cup">
                    <img 
                    src="https://www.futbolemotion.com/imagesEstructura/footer/premios.png" 
                    alt="" />
                    <p> Spanish leading company and European top third online football store. 
                        Two years being awarded with the eCommerce Award to the best sport store in Spain.
                    </p>
                    <Link style={{ color: '#ffac00' }}>More information...</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;