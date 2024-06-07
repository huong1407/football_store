import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import './link.css';
import { GoClockFill, GoTag } from "react-icons/go";
import { MdPeopleAlt, MdArrowOutward } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
import Categories from "./Categories";
import Listproducts from "./Listproducts";

const Footballboots = () => {
    const slides = [
        "https://www.futbolemotion.com/imagesbanners/md/nike_brilliance24.jpg",
        "https://www.futbolemotion.com/imagesbanners/md/adidas_tonikroos_11pro2.jpg",
        "https://www.futbolemotion.com/imagesbanners/lg/puma_carbon_ultimate2.jpg",
        "https://www.futbolemotion.com/imagesbanners/md/adidas_citrus_pack24.jpg",
        "https://www.futbolemotion.com/imagesbanners/lg/puma_neymar_copaLE24.jpg",
        "https://www.futbolemotion.com/imagesbanners/lg/nb_tekela_furon0524_ok.jpg"
      ];
      const [slide, setSlide] = useState(0);
    
      const goToPrevious = useCallback(() => {
        let newIndex = slide - 1;
        if (newIndex < 0) {
          newIndex = slides.length - 1;
        }
        setSlide(newIndex);                                                         
      }, [slide, slides.length]);
    
      const goToNext = useCallback(() => {
        const newIndex = (slide + 1) % slides.length;
        setSlide(newIndex);
      }, [slide, slides.length]);
    
      const goToSlide = (index) => {
        setSlide(index);
      }

      useEffect (() => {
        const timer = setTimeout(goToNext, 7000);
        return () => {
          clearTimeout(timer);
        }
      }, [goToNext]);
    
    return (
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

          <Link to="/search">
            <form className="form">
              <input className="Search" type="text" placeholder="What are you looking for?"/>
              <button type="submit" style={{border: 'none', backgroundColor: '#f3f3f5', fontSize: '13px', transform: 'translateX(-38px)', cursor:'pointer'}}> <ImSearch/> </button>
            </form>
          </Link>
          
        <Link to='/login' target="_self" style={{color:'black', textDecoration:'none', transform:'translateX(22em)'}}>
          <AiOutlineUser style={{fontSize:'25px'}}/>
          <p style={{ fontSize:'1px',  transform:'translateX(-5em)' }}>Log in</p>
        </Link>
        <Link style={{color:'black', textDecoration:'none', transform:'translateX(24em)'}}>
          <TbShoppingBag style={{fontSize:'25px'}}/>
          <p style={{ fontSize:'0.2px', transform:'translateX(-25em)' }}>My cart</p>
        </Link>
        </div>
        
        <div className="nav">
          <div className="dropdown">
            <Link to="/footballboots" className="site-title"> Football boots </Link>
            <div className="dropdown-content">
              <div className="boots">
                <Link style={{
                  textDecoration: 'none', 
                  color: 'black',
                  display: 'flex', 
                  verticalAlign: 'middle',
                  alignItems: 'center'}}> 
                  <AiOutlineHome style={{ fontSize: '20px'}}/> 
                  <span style={{ fontWeight: '600' }}> All football boots | </span>
                <span>36 EU</span> | <span>37 EU</span> | <span>38 EU</span> | <span>39 EU</span> | 
                <span>40 EU</span> | <span>41 EU</span> | <span>42 EU</span> | <span>43 EU</span> | 
                <span>44 EU</span> | <span>45 EU</span> | <span>46 EU</span> </Link>
              </div>
              
              <div className="img">
                  <p>Boot Recommended</p>
                  <MdArrowOutward style={{color: 'white', fontSize: '17px', transform:'translate(1240%, -190%)'}}/>
              </div>
              <div style={{ marginLeft: '10px' }}>
                  <p style={{color: 'red', fontWeight: '600', marginTop: '10px'}}> <GoTag/> Boots on sale </p>
                  <p style={{fontWeight: '600'}}> Boots for kid </p>
                  <p style={{fontWeight: '600'}}> Boots for women </p>
              </div>
              

              <div className="content">
              <div className="brand-section">
                <p style={{fontWeight: '600', fontSize: '15px'}}>  ADIDAS FOOTBALL BOOTS </p>
                <p style={{marginTop: '10px', fontSize: '10px'}}> Football boots adidas Predators <span style={{marginLeft: '60px'}}> Cheap adidas Copa football boots </span></p>
                <p style={{fontSize: '10px'}}> adidas X Football boots <span style={{marginLeft: '108px'}}> adidas classic football boots </span></p>

                <p style={{fontWeight: '600', marginTop: '32px', fontSize: '15px'}}> PUMA FOOTBALL BOOTS </p>
                <p style={{marginTop: '10px', fontSize: '10px'}}> Puma Future Football Boots <span style={{marginLeft: '84px'}}> Puma King Football Boots </span></p>
                <p style={{fontSize: '10px'}}> Puma Ultra Football Boots </p>
              </div>
            </div>
            </div>
          </div>
          
          <Link to="/goalkeepergloves" className="site-title"> Goalkeeper gloves </Link>
          <Link to="/training" className="site-title"> Training </Link>
          <Link to="/futsal" className="site-title"> Futsal </Link>
          <Link to="/fans" className="site-title"> Fans </Link>
          <Link to="/lifestyle" className="site-title"> Lifestyle </Link>
          <Link to="/accessories" className="site-title"> Accessories </Link>
          <Link to="/kids" className="site-title"> Kids </Link>
          <Link to="/sales" className="site-title" style={{color:'red'}}> Sales </Link>

          <ul style={{marginLeft: '40%', marginRight: '1%'}}>
            <li><Link className="site-title"> Club's Kits </Link></li>
            <li><Link className="site-title"> Blogs </Link></li>
          </ul>
        </div>
        </div>

        <div className="slideshow-container">
            <Link style={{textDecoration: 'none'}}>
                <div className="football">
                    <img style={{ width: "100%", height: "40%", marginTop: '10px'}}
                        src={slides[slide]}
                        alt="" />
                </div>

                <div className="football-box">
                    <span style={{fontWeight:'bold', filter: 'blur(0.4px)'}}>UEFA EURO '24</span> | 
                    <span style={{filter: 'blur(0.4px)'}}> EVERYONE'S PARTY </span> | 
                    <span style={{fontWeight:'bold', filter: 'blur(0.4px)'}}> SHOW YOUR COLOURS!</span>
                    <span className="button-slide">See products</span>
                </div>
            </Link>
            
            <button className="prev-slide" onClick={goToPrevious}><FaChevronLeft /></button>
            <button className="next-slide" onClick={goToNext}><FaChevronRight /></button>

            <div style={{textAlign: 'center'}}>
                <span className="bullet" onClick={() => goToSlide(0)}></span>
                <span className="bullet" onClick={() => goToSlide(1)}></span>
                <span className="bullet" onClick={() => goToSlide(2)}></span>
                <span className="bullet" onClick={() => goToSlide(3)}></span>
                <span className="bullet" onClick={() => goToSlide(4)}></span>
            </div>
        </div>

        <div className="football-container">
            <div className="footballboots-container">
                <div style={{marginLeft: '10px', marginTop: '40px'}}>
                   <p style={{fontSize: '28px', fontWeight: 'bold', fontFamily: 'Verdana'}}>FOOTBALL BOOTS 
                    <br />
                    <button style={{ 
                        backgroundColor: 'black', 
                        color: 'white',
                        padding: '7px', 
                        fontSize: '10px', 
                        fontWeight: '600',
                        borderRadius: '3px', 
                        display: 'flex',
                        marginBottom: '30px'}}> See all boots <FaArrowRightLong style={{ marginLeft: '10px', marginTop: '5px'}}/> </button> </p>
                    <p style={{
                        lineHeight: '1.5rem',
                        width: '70rem',}}> To choose the right football boots for you, you need to take into account the grass or land you play on, 
                            your skills and technical characteristics. Choosing a sole that guarantees good traction on the football 
                            field you play on or a boot with the weight and material characteristics that best suit your characteristics
                            is paramount. Here you will find all the <span style={{fontWeight: '600'}}> football boots </span> on the market,
                            from those made of natural leather to ultralight and synthetic boots, including laceless boots with sock,
                            for men, women and children. All of them mounted on all types of soles and ranges available. Even if you don't know 
                            which boots to buy, we have a recommender to offer you what you need based on your needs in the field.
                    </p>

                    <p style={{fontWeight: '600', marginTop: '20px', marginBottom: '10px'}}>You may be interested in: </p>
                    <div style={{display: 'inline-block'}}> 
                        <button className="button-interested"> Boots recommender </button>
                        <button className="button-interested"> Boots on sales </button>
                        <button className="button-interested"> Football accessories </button>
                    </div> 
                </div>

                <div className="search-filter">
                    <h1 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', marginTop: '10px', marginBottom: '15px' }}> What boots are you looking for? </h1>
                    <select>
                        <option> Brand </option>
                        <option> Nike </option>
                        <option> adidas </option>
                        <option> Puma </option>
                        <option> Mizuno </option>
                        <option> New Balance </option>
                        <option> Joma </option>
                        <option> Umbro </option>
                        <option> Skechers </option>
                        <option> Munich </option>
                    </select>

                    <select>
                        <option> Colour </option>
                        <option> Black </option>
                        <option> Grey </option>
                        <option> White </option>
                        <option> Pink </option>
                        <option> Red </option>
                        <option> Yellow </option>
                        <option> Orange </option>
                        <option> Green </option>
                        <option> Purple </option>
                        <option> Blue </option>
                        <option> Golden </option>
                        <option> Dark Blue </option>
                        <option> Beige </option>
                        <option> Turquoise </option>
                        <option> Maroon </option>
                    </select>

                    <select>
                        <option> Price </option>
                    </select>

                    <select>
                        <option> Size </option>
                        <option> 19 </option>
                        <option> 20 </option>
                        <option> 21 </option>
                        <option> 22 </option>
                        <option> 23 </option>
                        <option> 24 </option>
                        <option> 25 </option>
                        <option> 26 </option>
                        <option> 27 </option>
                        <option> 28 </option>
                        <option> 29 </option>
                        <option> 30 </option>
                        <option> 31 </option>
                        <option> 32 </option>
                        <option> 33 </option>
                        <option> 34 </option>
                        <option> 35 </option>
                        <option> 36 </option>
                        <option> 37 </option>
                        <option> 38 </option>
                        <option> 39 </option>
                        <option> 40 </option>
                        <option> 41 </option>
                        <option> 42 </option>
                        <option> 43 </option>
                        <option> 44 </option>
                        <option> 45 </option>
                        <option> 46 </option>
                        <option> 47 </option>
                        <option> 48 </option>
                    </select>

                    <select>
                        <option> Types of outsole </option>
                        <option> TURF - Synthetic ground </option>
                        <option> AG - Artificial Ground </option>
                        <option> MG- Multi-Ground </option>
                        <option> SG - Soft Ground </option>
                        <option> FG - Firm Ground </option>
                    </select>
                
                <br />
                <button className="button-search"> Search </button>
                </div>
                
            </div>
        </div>

        <Listproducts />

        <Categories />
      </div>
    );
}

export default Footballboots;