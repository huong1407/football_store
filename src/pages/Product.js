import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { MdTimer, MdStars } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

function Product() {
  return (
    <div>
      <div className="row">
        <div className="row-first">
          <TbLockSquareRoundedFilled style={{ fontSize: "20rem", transform: "translate(150%, -50%)"}}/>
          <p className="column">
            <span style={{ fontWeight: "bold" }}>#1 retailer</span> of football technical equipment in Spain  and <br/> European top 3
           <img
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/premios.jpg"
              alt=""
              style={{ marginTop: "44px", width: "80rem", height: "110px" }} />
        </p>
        </div>

        <div className="row-first">
          <FaCheckCircle style={{ fontSize: "45px", transform: "translate(190%, -50%)"}}/>
          <p className="column" style={{ fontWeight: "bold" }}> 100% Genuine products
            <img
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/originales-202307.jpg"
              alt=""
              style={{ marginTop: "82px",marginLeft: "10px", width: "16.9rem", height: "110px" }}/>
          </p>
        </div>

        <div className="row-first">
          <AiOutlineGlobal style={{ fontSize: "45px", transform: "translate(190%, -50%)" }}/>
          <p className="column" style={{ fontWeight: "bold" }}>
            Secure international payment
            <img
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/pagos.jpg"
              alt=""
              style={{ marginTop: "82px", marginLeft: "10px", width: "16.8rem", height: "110px" }}/>
          </p>
        </div>

        <div className="row-first">
          <MdStars style={{ fontSize: "47px", transform: "translate(180%, -50%)" }}/>
          <p className="column"> Become a <span style={{ fontWeight: "bold" }}>member</span> and
            enjoy <br /> <span style={{ fontWeight: "bold" }}>permanent offers</span>{" "}
            instantly
            <img
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/eclub-202307.jpg"
              alt=""
              style={{ marginTop: "62px", marginLeft: "9px", width: "16.8rem", height: "110px" }}/>
          </p>
        </div>

        <div className="row-first">
          <MdTimer style={{ fontSize: "47px", transform: "translate(190%, -50%)" }}/>
          <p className="column">100% <span style={{ fontWeight: "bold" }}>
              Secure worldwide shipping </span>
            <img
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/envios-202307.jpg"
              alt=""
              style={{ marginTop: "82px", marginLeft: "8px", width: "16.85rem", height: "110px" }}/>
          </p>
        </div>
      </div>

      <div className="featured-products">
        <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana'}}>
          FEATURED PRODUCTS
        </p>
        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_0327_adidas.jpg"
              alt=""/>
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold",
                marginTop: "10px"}}>Football boots</p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_gloves0424.jpg"
              alt=""
              width={160}
              height={180}/>
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold",
                marginTop: "10px"}}> Goalkeeper gloves </p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_0224_futsal.jpg"
              alt=""/>
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold",
                marginTop: "10px"}}> Futsal Shoes </p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/cromos_297x353_mayo22_lifestyle1.jpg"
              alt=""/>
            <p
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold",
                marginTop: "10px"}}> LIFESTYLE </p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_acc0424.jpg"
              alt="" />
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold",
                marginTop: "10px"}}> Accessories</p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/cromos_297x353_manchester_mayo23.jpg"
              alt=""/>
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold",
                marginTop: "10px"}}> FOOTBALL JERSEYS </p>
          </Link>
        </div>
      </div>

      <div>
        <h1 style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana'}}> WHICH BOOTS OR GLOVES SHOULD I GET? </h1>
        <div className="options">
          <div className="option-container">
            <p className="caption">
              Depending on your playstyle, playfield and preferences, this
              recommender will help you choose the best boots to shine with your skills. </p>

            <button className="click">
              <Link to="https://www.futbolemotion.com/en/recommender/football-boots" target="_blank">Boots recommender</Link>
            </button>
          </div>
          <div className="option-container">
            <img loading="lazy"
              src="https://www.futbolemotion.com/imagescontenidos/portada/recomendador/recomendador-jugador-abril-veintidos.png"
              width={350}
              height={560}
              alt="Boots recommender"/>
          </div>
          <div className="option-container">
            <img loading="lazy"
              src="https://www.futbolemotion.com/imagescontenidos/portada/recomendador/recomendador-portero-abril-veintidos.png"
              width={350}
              height={560}
              alt="Gloves recommender"/>
          </div>
          <div className="option-container">
            <p className="caption">
              There are thousands of goalkeeper gloves on the market, but which
              are better for you? With this recommender we'll help you choose
              the ones that are better for you according to our questions. </p>

            <button className="click">
              <Link to="https://www.futbolemotion.com/en/recommender/goalkeeper-gloves" target="_blank">Gloves recommender</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
