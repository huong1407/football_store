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
        <div>
          <TbLockSquareRoundedFilled style={{ fontSize: "40px", float: "left", transform: "translate(320%, -10%)"}}/>
          <p className="column">
            <span style={{ fontWeight: "bold" }}>#1 retailer</span> of football technical equipment in Spain and European top 3
            <img
              width={220}
              height={110}
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/premios.jpg"
              alt=""
              style={{ marginTop: "40px", marginLeft: "-30px" }} />
          </p>
        </div>

        <div>
          <FaCheckCircle style={{ fontSize: "35px", float: "left", transform: "translate(370%, -10%)"}}/>
          <p className="column" style={{ fontWeight: "bold" }}> 100% Genuine products
            <img
              width={220}
              height={110}
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/originales-202307.jpg"
              alt=""
              style={{ marginTop: "74px", marginLeft: "-30px" }}/>
          </p>
        </div>

        <div>
          <AiOutlineGlobal style={{ fontSize: "35px", float: "left", transform: "translate(360%, -10%)" }}/>
          <p className="column" style={{ fontWeight: "bold" }}>
            Secure international payment
            <img
              width={220}
              height={110}
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/pagos.jpg"
              alt=""
              style={{ marginTop: "58px", marginLeft: "-30px" }}/>
          </p>
        </div>

        <div>
          <MdStars style={{ fontSize: "40px", float: "left", transform: "translate(320%, -10%)"}}/>
          <p className="column"> Become a <span style={{ fontWeight: "bold" }}>member</span> and
            enjoy <span style={{ fontWeight: "bold" }}>permanent offers</span>{" "}
            instantly
            <img
              width={220}
              height={110}
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/eclub-202307.jpg"
              alt=""
              style={{ marginTop: "41px", marginLeft: "-30px" }}/>
          </p>
        </div>

        <div>
          <MdTimer style={{ fontSize: "37px", float: "left", transform: "translate(360%, -10%)"}}/>
          <p className="column">100% <span style={{ fontWeight: "bold" }}>
              Secure worldwide shipping </span>
            <img
              width={220}
              height={110}
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/envios-202307.jpg"
              alt=""
              style={{ marginTop: "58px", marginLeft: "-30px" }}/>
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
              alt=""
              width={160}
              height={180}/>
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold",}}>Football boots</p>
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
                fontWeight: "bold"}}> Goalkeeper gloves </p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_0224_futsal.jpg"
              alt=""
              width={160}
              height={180}/>
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold"}}> Futsal Shoes </p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/cromos_297x353_mayo22_lifestyle1.jpg"
              alt=""
              width={160}
              height={180}/>
            <p
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold"}}> LIFESTYLE </p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_acc0424.jpg"
              alt=""
              width={160}
              height={180} />
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold"}}> Accessories</p>
          </Link>
        </div>

        <div className="image">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <img
              loading="lazy"
              src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/cromos_297x353_manchester_mayo23.jpg"
              alt=""
              width={160}
              height={180}/>
            <p style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                fontWeight: "bold"}}> FOOTBALL JERSEYS </p>
          </Link>
        </div>
      </div>

      <div>
        <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana'}}> WHICH BOOTS OR GLOVES SHOULD I GET? </p>
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
