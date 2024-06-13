import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { GoClockFill, GoTag } from "react-icons/go";
import { MdPeopleAlt, MdArrowOutward } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import Product from "./Product";
import Slideshow from "./Slideshow";
import Motion from "./Motion";
import FooterBar from "./FooterBar";

function Homepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedVisibility = localStorage.getItem('notificationVisible');
    if (savedVisibility !== null) {
      setIsVisible(JSON.parse(savedVisibility));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notificationVisible', JSON.stringify(isVisible));
  }, [isVisible]);

  return (
    <div className="main">
        <div className="header">
          <div className="banner-text">
            <GiRecycle style={{  marginLeft: '540px' }}/>
            <p>  If it doesn't fit, you can exchange it for another size</p>
          </div>

          <div className="banner-text">
            <GoClockFill style={{ marginLeft: '600px' }}/>
            <p> Delivery within 5-7 working days </p>
          </div>

          <div className="banner-text">
            <MdPeopleAlt style={{ marginLeft: '640px' }}/>
            <p> Member benefit </p>
          </div>

          <div className="banner-text">
            <FaTruck style={{ marginLeft: '600px' }}/>
            <p> Shipping your order to Vietnam </p>
          </div>
      </div>
      
      <div className="navbar" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="vertical-align">
          <Link to="/">
            <IoFootballOutline className="icon" />
          </Link>
          <p style={{ fontFamily: '"BeTheBest", Open Sans, sans-serif, Roboto, Arial', fontWeight: 'bold', fontSize: '18px' }}>Fútbol <br /> Emotion</p>

          <Link to="/search">
            <form className="form">
              <input className="Search" type="text" placeholder="What are you looking for?"/>
              <button type="submit" style={{border: 'none', backgroundColor: '#f3f3f5', fontSize: '13px', transform: 'translateX(-38px)', cursor:'pointer'}}> <ImSearch/> </button>
            </form>
          </Link>

          <Link to='/login' target="_self" style={{color:'black', textDecoration:'none', transform:'translateX(14em)'}}>
            <AiOutlineUser style={{fontSize:'25px'}}/>
            <p style={{ fontSize:'1px', transform:'translateX(-5em) '}}>Log in</p>
          </Link>
          <Link style={{color:'black', textDecoration:'none', transform:'translateX(16em)'}}>
            <TbShoppingBag style={{fontSize:'25px'}}/>
            <p style={{ fontSize:'0.2px', transform:'translateX(-30em)' }}>My cart</p>
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
      <Slideshow />
      <Product />
      
      {/* <Recommended /> */}
      <Motion />
      <FooterBar />
    </div>
  );
}

export default Homepage;
