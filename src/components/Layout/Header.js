import React, { useState, useEffect } from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
import { GoTag } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { IoFootballOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const savedVisibility = localStorage.getItem("notificationVisible");
        if (savedVisibility !== null) {
        setIsVisible(JSON.parse(savedVisibility));
        }
    }, []);

    useEffect(() => {
      localStorage.setItem("notificationVisible", JSON.stringify(isVisible));
    }, [isVisible]);

    return (
        <div className="main">
          <div className="navbar" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <div className="vertical-align">
              <div>
                <Link to="/" className="flex items-center ms-auto">
                  <IoFootballOutline className="icon" />
                  <p style={{ fontFamily:'"BeTheBest", Open Sans, sans-serif, Roboto, Arial',
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "left",}}> Fútbol <br /> Emotion</p>
                </Link>
              </div>
    
              <div className="header-search mx-auto">
                <Link to="/search" target="_self">
                  <form className="form">
                    <input className="Search"
                      type="search"
                      name="search"
                      placeholder="What are you looking for?"/>
                    <button><i class="fas fa-search"/></button>
                  </form>
                </Link>
              </div>
    
              <div className="header-button flex items-center ms-auto space-x-4 mr-7">
                <Link to="/login" className="flex flex-col items-center text-center relative mx-2">
                  <AiOutlineUser className="text-3xl" />
                  <p className="opacity-100 text-sm m-0">Log in</p>
                </Link>
          
                <Link to="/cart" target="_self" className="flex flex-col items-center text-center relative mx-2">
                  <TbShoppingBag className="text-3xl" />
                  <p className="opacity-100 text-sm m-0">My cart</p>
                </Link>
              </div>
            </div>
    
            <div className="nav">
              <div className="dropdown">
                <Link to="/footballboots" className="site-title"> Football boots </Link>
                  <div className="dropdown-content">
                    <div className="boots">
                      <Link className="flex no-underline text-black align-middle items-center">
                        <AiOutlineHome style={{ fontSize: "20px" }} />
                        <span className="font-semibold"> All football boots | </span>
                        <span>36 EU</span> | <span>37 EU</span> | <span>38 EU</span> |
                        <span>39 EU</span> |<span>40 EU</span> | <span>41 EU</span> |
                        <span>42 EU</span> | <span>43 EU</span> |<span>44 EU</span> |
                        <span>45 EU</span> | <span>46 EU</span>
                      </Link>
                    </div>
    
                    <div className="img">
                      <p>Boot Recommended</p>
                      <MdArrowOutward style={{
                        color: "white",
                        fontSize: "17px",
                        transform: "translate(1240%, -190%)"}}/>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <p style={{ color: "red", fontWeight: "600", marginTop: "10px" }}><GoTag /> Boots on sale</p>
                      <p className="font-semibold"> Boots for kid </p>
                      <p className="font-semibold"> Boots for women </p>
                    </div>
    
                    <div className="content">
                      <div className="brand-section">
                        <p style={{ fontWeight: "600", fontSize: "15px" }}>ADIDAS FOOTBALL BOOTS</p>
                        <p style={{ marginTop: "10px", fontSize: "10px" }}>Football boots adidas Predators
                          <span style={{ marginLeft: "60px" }}>Cheap adidas Copa football boots</span>
                        </p>
                        <p style={{ fontSize: "10px" }}>adidas X Football boots
                          <span style={{ marginLeft: "108px" }}>adidas classic football boots</span>
                        </p>
        
                        <p style={{
                          fontWeight: "600",
                          marginTop: "32px",
                          fontSize: "15px",}}>PUMA FOOTBALL BOOTS</p>
                        <p style={{ marginTop: "10px", fontSize: "10px" }}> Puma Future Football Boots
                          <span style={{ marginLeft: "84px" }}> Puma King Football Boots</span></p>
                        <p style={{ fontSize: "10px" }}> Puma Ultra Football Boots</p>
                      </div>
                    </div>
              </div>
            </div>
    
            <Link to="/goalkeepergloves" className="site-title">Goalkeeper gloves</Link>
            <Link to="/training" className="site-title">Training</Link>
            <Link to="/futsal" className="site-title">Futsal</Link>
            <Link to="/fans" className="site-title">Fans</Link>
            <Link to="/lifestyle" className="site-title">Lifestyle</Link>
            <Link to="/accessories" className="site-title"> Accessories</Link>
            <Link to="/kids" className="site-title">Kids</Link>
            <Link to="/sales" className="site-title" style={{ color: "red" }}>Sales</Link>
            <div className="absolute inline right-1">
              <Link className="site-title text-right"> Club's Kits </Link>
              <Link className="site-title text-right"> Blogs </Link>
            </div>
          </div>
        </div>
      </div>
      );
    }
    
export default Header;