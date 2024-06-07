import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { MdContactSupport } from "react-icons/md";
import { TbBuildingStore } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaHandHoldingHeart, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterBar = () => {
    return (
        <div className="footer">
            <div className="footer-inline">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TfiWorld style={{ verticalAlign: 'middle', lineHeight: '1' }} />
                <span style={{ fontWeight: 'bold', marginLeft: '10px', fontSize: '1.1rem' }}>ARE YOU LOST?</span>
            </div>
                <p style={{marginTop: '10px'}}>Browser our website adapted to your location: 
                    <br/><Link style={{color: '#f3f3f5'}}> Fútbol Emotion's international websites </Link></p>
                    <br />
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
                <br />

                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                    <MdContactSupport style={{ verticalAlign: 'middle', lineHeight: '1' }} />
                    <span style={{ fontWeight: 'bold', marginLeft: '10px', fontSize: '1.1rem' }}> SUPPORT </span>
                </div>
                <p>Fill in our <Link style={{color: '#f3f3f5'}}>customer support</Link> form </p> <br />
                <p style={{width: '21rem', lineHeight: '1.5rem', textAlign: 'justify'}}> *Our opening hours are from <span style={{fontWeight: '600'}}>monday</span> to <span style={{fontWeight: '600'}}>friday </span>
                    from <span style={{fontWeight: '600'}}>9</span> to <span style={{fontWeight: '600'}}>16:30 </span>(expect holidays). We will fo our best for enquiry within 24-48 hours 
                    (except weekends).</p>
                
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                   <TbBuildingStore style={{ verticalAlign: 'middle', lineHeight: '1', fontSize: '15px'}}/> 
                    <span style={{fontWeight: 'bold', marginLeft: '10px', fontSize: '1.1rem'}}> STORES </span> 
                </div>
                
                <p>Find your nearest Fútbol Emotion store </p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IoLocationOutline style={{fontSize: '15px', color: '#ffac00'}}/> 
                    <span style={{ marginLeft: '5px'}}> View all stores </span>
                </div>
                
            </div> 

            <div className="footer-inline">
                <div style={{marginLeft: '20px' }}>
                    <p style={{fontWeight: 'bold', fontSize: '1.1rem'}}>LEGAL INFORMATION</p>
                    <div style={{ lineHeight: '2.2rem', marginTop: '7px' }}>
                        <p>Legal disclaimer</p>
                        <p>General terms and conditions</p>
                        <p>Cookie policy</p>
                        <p>Privacy policy</p>
                        <p style={{fontWeight: 'bold', fontSize: '1.1rem', marginTop: '2rem'}}>COMPANY</p>
                        <p style={{color: '#ffac00', marginTop: '10px'}}>Charitable Project Fútbol
                        <br /> Everywhere <FaHandHoldingHeart /></p>
                        <p>Work with us</p>
                        <p>Compliance</p>
                        <p>Member community</p>
                    </div>
                    
                </div>
            </div>

            <div className="footer-inline">
                <div style={{marginLeft: '24px'}}>
                    <p style={{fontWeight: 'bold', fontSize: '1.1rem'}}>MATERIAL INFORMATION</p>
                    <div style={{ lineHeight: '2.2rem', marginTop: '7px' }}>
                        <p>Sports gear customization</p>
                        <p>Boot size conversion</p>
                        <p>Gloves and boots recommender</p>
                        <p>Football equipment guide</p>
                        <p style={{fontWeight: 'bold', fontSize: '1.1rem', marginTop: '2rem'}}>SHOPPING INFORMATION</p>
                        <p style={{ marginTop: '8px'}}>Shopping information</p>
                        <p>Shipping information</p>
                        <p>Right of withdrawal</p>
                        <p>Exchange Policy</p>
                        <p>Black Friday</p>
                    </div>
                    
                </div>
            </div>

            <div className="footer-inline">
                <div style={{marginLeft: '35px'}}>
                    <p style={{fontWeight: 'bold', fontSize: '1.1rem'}}>NEWSLETTER</p>
                    <p style={{width: '29rem', marginTop: '10px'}}>Tell us about your preference and receive customised emails related only with your interests.</p>
                    <input 
                    type="email"
                    placeholder="email@email.com"/>
                    <button>SIGN UP</button>
                
                    <div style={{display: 'flex', marginTop: '1rem'}}>
                        <input style={{ transform: 'scale(0.3)', marginLeft: '-9.3rem', marginTop: '-1rem'}} type="checkbox"/> 
                        <label style={{ width: '27rem', marginLeft: '-8.5rem'}}>I agree to receive communication personalised for me in accordance with the 
                            <Link to="https://www.futbolemotion.com/en/informacioncompra/privacidad" style={{color: '#e7e7e7'}}> Privacy Policy </Link> 
                            of Sports Emotion.</label>
                    </div>
                    
                    <p style={{fontWeight: 'bold', fontSize: '1.1rem', marginTop: '25px'}}>OUR SOCIAL NETWORKS</p>
                    <div className="social-network">
                        <ul style={{ display: 'flex', gap: '2.2rem', verticalAlign: 'middle', alignItems: 'center', listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link to="#" style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaFacebook style={{ fontSize: '25px' }} />
                                    <span style={{ marginLeft: '0.5rem' }}>@fulbolemotionen</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaYoutube style={{ fontSize: '25px' }} />
                                    <span style={{ marginLeft: '0.5rem' }}>Fútbol Emotion</span>
                                </Link>
                            </li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '2rem', padding: '0', marginTop: '10px', listStyleType: 'none' }}>
                            <li>
                                <Link to="#" style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaTwitter style={{ fontSize: '25px' }} />
                                    <span style={{ marginLeft: '0.5rem' }}>@FutbolEmotionEN</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaInstagram style={{ fontSize: '25px' }} />
                                    <span style={{ marginLeft: '0.5rem' }}>futbolemotion</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-inline">
                <img 
                src="https://www.futbolemotion.com/imagesEstructura/footer/premios.png"
                alt=""/>
                <p style={{width: '25rem', textAlign: 'justify', lineHeight: '1.5rem'}}> Spanish leading company and European top third online football store. 
                    Two years being awarded with the eCommerce Award to the best sport store in Spain.</p>

                <Link style={{textDecoration: 'none', color: '#ffac00'}}> More information... </Link>
             </div>
        </div>
    );
}

export default FooterBar;