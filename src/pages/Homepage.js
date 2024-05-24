import React, {useState} from "react";
import "./Homepage.css";
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom";
import { GoClockFill, GoTag } from "react-icons/go";
import { MdPeopleAlt, MdArrowOutward  } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import Product from "./Product";

function Homepage() {
  // const [product, setProduct] = useState([]);
  // const [boots, setBoots] = useState('');
  // const [gloves, setloves] = useState('');
  // const [ball, setBall] = useState('');
  // const [shirt, setShirt] = useState('');
  // const [search, setSearch] = useState('');

  // const filter = product

  return (
    <div className="main">
      <Marquee className="header" speed={60} style={{overflow:'hidden'}}>
        <p><GiRecycle /> If it doesn't fit, you can exchange it for another size</p>
        <p><GoClockFill /> Delivery within 5-7 working days</p>
        <p><MdPeopleAlt /> Member benefits </p>
        <p><FaTruck /> Shipping your order to Vietnam </p>
      </Marquee>

      <div className="vertical-align">
        
        <Link to ="/"><IoFootballOutline className="icon"/></Link>
        {/* <p>Fútbol Emotion</p> */}

        <form>
          <input className="Search" type="text" placeholder="What are you looking for?"/>
          <button type="submit" style={{border: 'none', backgroundColor: '#f3f3f5', fontSize: '15px', transform: 'translateX(-37px)', cursor:'pointer'}}> <ImSearch/> </button>
        </form>

        <Link to='/login' style={{color:'black', textDecoration:'none', float: 'right', transform:'translate(-100px, -47px)'}}>
          <AiOutlineUser style={{fontSize:'25px',}}/>
          <p style={{ fontSize:'1px'}}>Log in</p>
        </Link>
        <Link style={{color:'black', textDecoration:'none', float: 'right', transform:'translate(0px, -47px)'}}>
          <TbShoppingBag style={{fontSize:'25px'}}/>
          <p style={{ fontSize:'0.2px'}}>My cart</p>
        </Link>
        
        <div className="nav">
          <div className="dropdown">
            <Link to="/footballboots" className="site-title"> Football boots </Link>
            <div className="dropdown-content">
              <div className="boots">
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: '600'}}> <AiOutlineHome /> All football boots |</Link>
                <span>36 EU</span> | <span>37 EU</span> | <span>38 EU</span> | <span>39 EU</span> | 
                <span>40 EU</span> | <span>41 EU</span> | <span>42 EU</span> | <span>43 EU</span> | 
                <span>44 EU</span> | <span>45 EU</span> | <span>46 EU</span> 
              </div>
              
              <div className="img">
                  <p>Boot Recommended</p>
                  <MdArrowOutward style={{color: 'white', fontSize: '17px', transform:'translate(1240%, -190%)'}}/>
              </div>
              <p style={{color: 'red', fontWeight: '600'}}> <GoTag/> Boots on sale </p>
              <p style={{fontWeight: '600'}}> Boots for kid </p>
              <p style={{fontWeight: '600'}}> Boots for women </p>

              <div className="content">
              <div className="brand-section">
                <p style={{fontWeight: '600', fontSize: '15px'}}>  ADIDAS FOOTBALL BOOTS </p>
                <p style={{marginTop: '20px', fontSize: '10px'}}> Football boots adidas Predators <span style={{marginLeft: '60px'}}> Cheap adidas Copa football boots </span></p>
                <p style={{fontSize: '10px'}}> adidas X Football boots <span style={{marginLeft: '108px'}}> adidas classic football boots </span></p>

                <p style={{fontWeight: '600', marginTop: '32px', fontSize: '15px'}}> PUMA FOOTBALL BOOTS </p>
                <p style={{marginTop: '20px', fontSize: '10px'}}> Puma Future Football Boots <span style={{marginLeft: '84px'}}> Puma King Football Boots </span></p>
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
          <Link to="/sales" className="site-title"> Sales </Link>

          <ul style={{marginLeft: '38%', marginRight: '-4%'}}>
            <li><Link className="site-title"> Club's Kits </Link></li>
            <li><Link className="site-title"> Blogs </Link></li>
          </ul>
      </div>
      </div>
      <Product />
    </div>
  );
}

export default Homepage;
