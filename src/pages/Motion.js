import React from "react";
import { Link } from "react-router-dom";
import './motion.css';
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaFacebook, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CgAdidas } from "react-icons/cg";
import { SiPuma, SiJordan, SiNewbalance } from "react-icons/si";

const Motion = () => {
    return (
        <div>
            <div>
                <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana'}}> THE LATEST AT @FUTBOLEMOTION </p>
                <div className="motion">
                    <Link 
                    to="https://www.futbolemotion.com/imagescms/postblogs/22240/tamanofijo/post-nike-rising-gem-pack-portjpg0.webp" 
                    target="_blank">
                        <div style={{position: 'relative'}}>
                            <img width={460} height={300} src="https://www.futbolemotion.com/imagescms/postblogs/22240/tamanofijo/post-nike-rising-gem-pack-portjpg0.jpg" alt="" />
                            <button className="motion-box">Boots</button>
                        </div>
                    
                    <br /> Nike presents the new "Rising Gem Pack"     
                    </Link>
                    <p className="comment"> A new pack from the American brand that aims to focus on young players, 
                        those new gems emerging in the world of football who will wear the swoosh. 
                        Let's delve into all the details.</p>

                    <br /> <FaRegCalendarDays style={{float:'left', fontSize: '1.2rem', color: '#6c757d'}}/> <span style={{float: 'left', marginLeft: '6px', color: '#6c757d'}}> May 12 </span>
                </div>

                <div className="motion">
                    <Link
                    to="https://www.futbolemotion.com/imagescms/postblogs/22230/tamanofijo/post-nike-tiempo-30-aniversario-portjpg0.jpg"
                    target="_blank">
                        <div style={{position:'relative'}}>
                            <img width={460} height={300} src="https://www.futbolemotion.com/imagescms/postblogs/22230/tamanofijo/post-nike-tiempo-30-aniversario-portjpg0.jpg" alt="" />
                            <button className="motion-box">Boots</button>
                        </div>
                    
                        <br /> Nike Tiempo Legend X "Emerald" 30th Anniversary
                    </Link>
                    <p className="comment"> Introducing the new Nike Tiempo Legend X Emerald, 
                        a special edition commemorating the 30th anniversary of the American brand's oldest silo. 
                        Let's explore all the details. </p>

                    <br /> <FaRegCalendarDays style={{float:'left', fontSize: '1.2rem', color: '#6c757d'}}/> <span style={{float: 'left', marginLeft: '6px', color: '#6c757d'}}> April 14 </span>
                </div>

                <div className="motion">
                    <Link
                    to="https://www.futbolemotion.com/imagescms/postblogs/22154/tamanofijo/puma-gear-up-packpng0.webp"
                    target="_blank">
                        <div style={{position: 'relative'}}>
                            <img width={460} height={300} src="https://www.futbolemotion.com/imagescms/postblogs/22154/tamanofijo/puma-gear-up-packpng0.png" alt="" />
                            <button className="motion-box">Boots</button>
                        </div>
                    
                        <br /> Nike Tiempo Legend X "Emerald" 30th Anniversary
                    </Link>
                    <p className="comment"> The starting whistle has already been blown, 
                        so many brands are introducing their novelties for those stragglers who have not yet 
                        chosen their <span> football boots. </span>
                        Puma is one of them, so in this post we are going to present the latest release from the German brand. </p>

                    <br /> <FaRegCalendarDays style={{float:'left', fontSize: '1.2rem', color: '#6c757d'}}/> <span style={{float: 'left', marginLeft: '6px', color: '#6c757d'}}> September 30 </span>
                </div>
            </div>
            
            <div className="motion-network">
                <ul>
                    <Link 
                    to="https://www.youtube.com/channel/UC1Flg_fnXXgsYz6gCfYAeUg?sub_confirmation=1"
                    target="_blank"
                    className="network-link"> 
                        <FaYoutube style={{ color: 'red', fontSize: '2rem', verticalAlign: 'middle' }} />
                        <span style={{ marginLeft: '1rem'}}>4.800</span>
                    </Link> 

                    <Link
                    to="http://www.instagram.com/futbolemotion"
                    target="_blank"
                    className="network-link">
                        <FaInstagram style={{color: '#E1306C', fontSize: '2rem'}}/> 
                        <span style={{ marginLeft: '1rem'}}> 686.000 </span>
                    </Link>

                    <Link
                    to="http://www.facebook.com/futbolemotionen"
                    target="_blank"
                    className="network-link">
                        <FaFacebook style={{color: '#3b5998', fontSize: '2rem'}}/> 
                        <span style={{ marginLeft: '1rem'}}> 320.000 </span>
                    </Link>
                </ul>
            </div>
            
            <div>
                {/* <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana'}}> RATINGS BY OUR CLIENTS </p> */}
                <div className="customer-review">
                    <div className="customer-inline">
                        <div className="rating">
                        <p style={{color: 'white', fontSize: '4rem', marginTop: '10px'}}> 4.7 </p>
                        <Link>30246 opinions</Link>
                        <div>
                            <span className="star"><FaStar /></span>
                            <span className="star"><FaStar /></span>
                            <span className="star"><FaStar /></span>
                            <span className="star"><FaStar /></span>
                            <span className="star"><FaStarHalfAlt /></span>
                        </div>
                        </div> 
                    </div>

                    <div className="customer-inline">
                        <ul style={{display: 'inline-block', marginLeft: '3rem', lineHeight: '2.2rem'}}>
                            <p style={{textAlign: 'left'}}>Easiness <span><div className="progress"></div></span></p>
                            <p style={{textAlign: 'left'}}>Service <span><div className="progress"></div></span></p>
                            <p style={{textAlign: 'left'}}>Shipment <span><div className="progress"></div></span></p>
                            <p style={{textAlign: 'left'}}>Information <span><div className="progress"></div></span></p>
                        </ul>
                    </div>

                    <div className="customer-inline">
                        <p style={{fontWeight: 'bold', textAlign: 'left'}}>LAST OPINIONS: </p>
                        <div className="last-opinions">
                            <p style={{fontWeight: 'bold', padding: "20px 10px", lineHeight: "2rem"}}>Jason B. 
                            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.5rem' }}>
                                <FaStar style={{ color: '#FFAC00' }} />
                                <FaStar style={{ color: '#FFAC00' }} />
                                <FaStar style={{ color: '#FFAC00' }} />
                                <FaStar style={{ color: '#FFAC00' }} />
                                <FaStar style={{ color: '#FFAC00' }} />
                            </span>
                            <br />
                            <p  style={{fontWeight: '400'}}>You was brilliant, I couldn't get these boots in England. But you did 
                            and they made my sons birthday even more special.</p>
                            </p> 
                        </div>
                    </div>
                        
                </div>
            </div>

            <div className="about-us">
                <h1>FOOTBALL STORE</h1>
                <p> Welcome to Fútbol Emotion, a football store that goes far beyond just the goalkeeper world.
                    On our website you will find numerous content related to the updates in sports material. 
                    And of course, you get all the equipment you need, regardless of your position on the pitch, 
                    with the catalog we offer : football boots, footsal shoes, official kits and - of course - goalkeeper gloves. 
                    We have everything from the latest high-end football boots, to cheap football boots and football boots 
                    for children to adapt to what you are looking for for your game. </p>
            </div>

            <div className="brand">
                <span><Link to="https://www.futbolemotion.com/en/brands/adidas"><CgAdidas /></Link></span>
                <span><Link to="https://www.futbolemotion.com/en/brands/puma"><SiPuma /></Link></span>
                <span><Link to="https://www.futbolemotion.com/en/brands/jordan"><SiJordan /></Link></span>
                <span><Link to="https://www.futbolemotion.com/en/brands/new-balance"><SiNewbalance /></Link></span>
            </div>

            <div className="items">
                <p style={{
                fontWeight: '600', 
                textAlign: 'left',
                marginTop: '3rem',
                }}>YOU MIGHT BE INTERESTED IN...</p>
                <hr />
                <table>
                    <tr>
                        <td><Link 
                        to="https://www.futbolemotion.com/en/football-boots"
                        className="link-hover">Football boots</Link></td>
                        <td><Link>adidas football boots</Link></td>
                        <td><Link>Boots for kids</Link></td>
                        <td><Link>Thermal clothing</Link></td>
                        <td><Link>Raincoats</Link></td>
                    </tr>
                    <tr>
                        <td><Link className="link-hover">Futsal boots</Link></td>
                        <td><Link>Football balls</Link></td>
                        <td><Link>Clothing for kids</Link></td>
                        <td><Link>Football Socks</Link></td>
                        <td><Link>Shin pads</Link></td>
                    </tr>
                    <tr>
                        <td><Link className="link-hover">Boots of Haaland</Link></td>
                        <td><Link>Boots for kids</Link></td>
                        <td><Link>Goalkeeper gloves</Link></td>
                        <td><Link>Spain jerseys</Link></td>
                        <td><Link>Goalkeeper clothing</Link></td>
                    </tr>
                    <tr>
                        <td><Link className="link-hover">Neymar's boots</Link></td>
                        <td><Link>Gloves for kids</Link></td>
                        <td><Link>Real Madrid jerseys</Link></td>
                        <td><Link>Camisetas de la Eurocopa</Link></td>
                        <td><Link>Football team's tracksuits</Link></td>
                    </tr>
                </table> 
            </div>
            
        </div>
    );
}

export default Motion;
