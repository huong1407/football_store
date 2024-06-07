import React from "react";
import { Link } from "react-router-dom";
import './search.css';
import './../Footballboots/link.css';
import { GoClockFill, GoArrowRight } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";

const Search = () => {
    return (
        <div>
            <div className="main">
                <div className="header">
                    <p className="banner-text"> <GiRecycle /> If it doesn't fit, you can exchange it for another size</p>
                    <p className="banner-text"> <GoClockFill /> Delivery within 5-7 working days</p>
                    <p className="banner-text"> <MdPeopleAlt /> Member benefit </p>
                    <p className="banner-text"> <FaTruck /> Shipping your order to Vietnam</p>
                </div>
      

                <div className="navbar">
                    <div className="vertical-align">
                        <Link to="/">
                            <IoFootballOutline className="icon" />
                        </Link>
                        <p style={{ fontFamily: 'Calibri', fontWeight: 'bold', fontSize: '18px' }}>Fútbol <br /> Emotion</p>

                        <form className="form">
                            <input className="Search" type="text" placeholder="What are you looking for?"/>
                            <button type="submit" style={{border: 'none', backgroundColor: '#f3f3f5', fontSize: '13px', transform: 'translateX(-38px)', cursor:'pointer'}}> <ImSearch/> </button>
                        </form>

                        <Link to='/login' target="_self" style={{color:'black', textDecoration:'none', transform:'translateX(11em)'}}>
                            <AiOutlineUser style={{fontSize:'25px'}}/>
                            <p style={{ fontSize:'1px',  transform:'translateX(-5em)' }}>Log in</p>
                        </Link>
                        <Link style={{color:'black', textDecoration:'none', transform:'translateX(13em)'}}>
                            <TbShoppingBag style={{fontSize:'25px'}}/>
                            <p style={{ fontSize:'0.2px', transform:'translateX(-25em)' }}>My cart</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="search-page">
                <div className="top-search"> 
                    <p style={{ fontWeight: 'bold' }}> Top searches </p>
                    <ul>
                        <p> <ImSearch /> adida predator <GoArrowRight style={{ position: 'relative', left: '180px' }}/> </p>
                        <p> <ImSearch/> nike mercurial <GoArrowRight style={{ position: 'relative', left: '184px' }}/></p>
                        <p> <ImSearch/> football boot <GoArrowRight style={{ position: 'relative', left: '192px' }}/></p>
                        <p> <ImSearch/> adida <GoArrowRight style={{ position: 'relative', left: '243px' }}/></p>
                        <p> <ImSearch/> predator <GoArrowRight style={{ position: 'relative', left: '220px' }}/></p>
                    </ul>
                </div>

                <div className="most-search">
                    <p style={{ fontWeight: 'bold' }}> Most searched products </p>

                    <div className="list-product">
                        <div className="product">
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/229248/medianas/bota-adidas-predator-elite-ft-sg-lucid-blue-white-solar-red-1.jpg" 
                                alt="" 
                                className="normal-image"/>
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/229346/750/bota-adidas-predator-elite-ft-fg-azul-0.jpg"
                                alt="" 
                                className="hover-image"/>
                            <div className="add-text">
                                <p className="pre-order"> PRE-ORDER NOW </p>
                                <p className="p-container"> Predator Ellte FT F Football Boots <br /> 279,99 €  </p>
                                <span className="hover-text"> Sizes (UK): 6, 6,5, 7, 7,5, 8, 8,5, 9, 9,5, 10, 10,5, 11, 11,5, 12, 12,5, 13 </span>
                            </div>
                        </div>
                        <div className="product">
                            <img
                                src="https://www.futbolemotion.com/imagesarticulos/220790/330/bota-adidas-predator-fg-core-black-ftwr-white-solar-red-1.jpg" 
                                alt="" 
                                className="normal-image"/>
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/220790/750/bota-adidas-predator-fg-core-black-ftwr-white-solar-red-0.jpg" 
                                alt="" 
                                className="hover-image"/>
                            <div className="add-text">
                                <p className="p-container"> adidas Predator Elite FT FG Football Boots <br /> 279,99 €  </p>
                                <span className="hover-text"> Sizes (UK): 6, 6'5 </span>
                            </div>
                        </div>
                        <div className="product">
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/197659/750/camiseta-adidas-real-madrid-primera-equipacion-2023-2024-white-3.jpg" 
                                alt="" 
                                className="normal-image"/>
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/197659/750/camiseta-adidas-real-madrid-primera-equipacion-2023-2024-white-4.jpg" 
                                alt="" 
                                className="hover-image"/>
                            <div className="add-text">
                                <p className="p-container"> Nike Air Max Excee Trainers <br /> 269,99 €  </p>
                                <span className="hover-text"> SIZES (USA): 7, 8, 10, 10'5 </span>
                            </div>
                            
                        </div>
                        <div className="product">
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/230543/medianas/bandolera-adidas-ac-waistbag-black-0.jpg" 
                                alt="" 
                                className="normal-image"/>
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/230543/750/bandolera-adidas-ac-waistbag-black-1.jpg" 
                                alt="" 
                                className="hover-image"/>
                            <p className="new-release"> NEW RELEASES </p>
                            <p className="p-container"> Predator Ellte LL AG Football Boots <br /> 269,99 €  </p>
                        </div>
                        <div className="product">
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/221183/medianas/bota-puma-future-7-ultimate-neymar-jr-fgag-sunset-glow-black-sun-stream-green-bluemazing-1.jpg" 
                                alt="" 
                                className="normal-image"/>
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/221183/750/bota-puma-future-7-ultimate-neymar-jr-fgag-sunset-glow-black-sun-stream-green-bluemazing-0.jpg" 
                                alt="" 
                                className="hover-image"/>
                            <div className="add-text">
                                <p className="new-release"> NEW RELEASES </p>
                                <p className="p-container"> Predator Ellte L AG Football Boots <br /> 219,99 €  </p>
                                <span className="hover-text"> Sizes (UK): 6, 6,5, 7, 7,5, 8, 8,5, 9, 9,5, 10, 10,5 </span>
                            </div>
                        </div>
                        <div className="product">
                            <img
                                src="https://www.futbolemotion.com/imagesarticulos/230639/medianas/bota-adidas-adipure-11pro-toni-kroos-edition-fg-white-gold-core-black-1.jpg" 
                                alt="" 
                                className="normal-image"/>
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/230639/750/bota-adidas-adipure-11pro-toni-kroos-edition-fg-white-gold-core-black-0.jpg" 
                                alt="" 
                                className="hover-image"/>
                            <div className="add-text">
                                <p className="new-release"> NEW RELEASES </p>
                                <p className="p-container"> Predator Ellte FG Football Boots <br /> 259,99 €  </p>
                                <span className="hover-text"> Sizes (UK): 6, 6,5, 7, 10,5, 11, 11,5, 12, 12,5, 13</span>
                            </div>
                        </div>
                        <div className="product">
                            <img 
                                src="https://www.futbolemotion.com/imagesarticulos/229404/medianas/bota-adidas-predator-elite-ft-nino-fg-lucid-blueftwr-whitesolar-red-1.jpg" 
                                alt="" />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p className="new-release" style={{ marginRight: '10px' }}> NEW RELEASES </p> 
                                <span style={{ border: '2px solid blue', borderRadius: '20px', color: '#0043a8', fontSize: '11px', fontWeight: 'bold', padding: '1px 7px' }}> KIDS </span>
                            </div>
                            <p className="p-container"> Predator Ellte FT FG Football Boots <br /> 149,99 €  </p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Search;