import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./search.css";
import "./../Footballboots/link.css";
import { GoClockFill, GoArrowRight } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";

const products = [
  {
    id: 1,
    name: "adidas Predator Elite FT SG",
    price: "279,99 €",
    sizes: "Sizes (UK): 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/229248/medianas/bota-adidas-predator-elite-ft-sg-lucid-blue-white-solar-red-1.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/229346/750/bota-adidas-predator-elite-ft-fg-azul-0.jpg",
  },
  {
    id: 2,
    name: "adidas Predator Elite FT FG",
    price: "279,99 €",
    sizes: "Sizes (UK): 6, 6.5",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/220790/330/bota-adidas-predator-fg-core-black-ftwr-white-solar-red-1.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/220790/750/bota-adidas-predator-fg-core-black-ftwr-white-solar-red-0.jpg",
  },
  {
    id: 3,
    name: "Nike Air Max Excee Trainers",
    price: "269,99 €",
    sizes: "SIZES (USA): 7, 8, 10, 10.5",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/197659/750/camiseta-adidas-real-madrid-primera-equipacion-2023-2024-white-3.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/197659/750/camiseta-adidas-real-madrid-primera-equipacion-2023-2024-white-4.jpg",
  },
  {
    id: 4,
    name: "adidas AC Waistbag",
    price: "269,99 €",
    sizes: "",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/230543/medianas/bandolera-adidas-ac-waistbag-black-0.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/230543/750/bandolera-adidas-ac-waistbag-black-1.jpg",
  },
  {
    id: 5,
    name: "Puma Future 7 Ultimate Neymar JR FG/AG",
    price: "219,99 €",
    sizes: "Sizes (UK): 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/221183/medianas/bota-puma-future-7-ultimate-neymar-jr-fgag-sunset-glow-black-sun-stream-green-bluemazing-1.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/221183/750/bota-puma-future-7-ultimate-neymar-jr-fgag-sunset-glow-black-sun-stream-green-bluemazing-0.jpg",
  },
  {
    id: 6,
    name: "adidas Adipure 11pro Toni Kroos Edition FG",
    price: "259,99 €",
    sizes: "Sizes (UK): 6, 6.5, 7, 10.5, 11, 11.5, 12, 12.5, 13",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/230639/medianas/bota-adidas-adipure-11pro-toni-kroos-edition-fg-white-gold-core-black-1.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/230639/750/bota-adidas-adipure-11pro-toni-kroos-edition-fg-white-gold-core-black-0.jpg",
  },
  {
    id: 7,
    name: "adidas Predator Elite FT FG Kids",
    price: "149,99 €",
    sizes: "KIDS",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/229404/medianas/bota-adidas-predator-elite-ft-nino-fg-lucid-blueftwr-whitesolar-red-1.jpg",
    imgHover: "",
  },
  {
    id: 8,
    name: "Ultra Ultimate Cage Turf Football Boots",
    price: "124,99 €",
    sizes: "Sizes (UK): 6, 6.5, 7, 10.5, 11",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/220586/medianas/bota-puma-ultra-ultimate-cage-poison-pink-white-black-1.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/220586/750/bota-puma-ultra-ultimate-cage-poison-pink-white-black-0.jpg",
  },
  {
    id: 9,
    name: "adidas Copa Mundial Football Boots",
    price: "149,99 €",
    sizes: "Sizes (UK): 6, 6.5, 7, 10.5, 11",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/88055/330/bota-adidas-copa-mundial-1.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/88055/750/bota-adidas-copa-mundial-0.jpg",
  },
  {
    id: 10,
    name: "adidas Copa Icon FG Football Boots",
    price: "89,99 €",
    sizes: "Sizes (UK): 6, 6.5, 7, 10.5, 11",
    imgNormal:
      "https://www.futbolemotion.com/imagesarticulos/112439/330/zapatilla-de-futbol-sala-adidas-samba-black-1.jpg",
    imgHover:
      "https://www.futbolemotion.com/imagesarticulos/112439/750/zapatilla-de-futbol-sala-adidas-samba-black-4.jpg",
  },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filter = products.filter((product) => {
    if (!searchTerm) return false;
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  console.log(filter);

  return (
    <div>
      <div style={{ position: "sticky", top: "0", zIndex: "9999" }}>
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

          <div className="navbar">
            <div className="vertical-align">
              <Link to="/">
                <IoFootballOutline className="icon" />
              </Link>
              <p
                style={{
                  fontFamily: "Calibri",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}> Fútbol <br /> Emotion </p>

              <div style={{ display: "inline-flex", marginLeft: "82rem" }}>
                <Link
                  to="/login"
                  target="_self"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    transform: "translateX(11em)",}}>
                  <AiOutlineUser style={{ fontSize: "25px" }} />
                  <p style={{ fontSize: "1px", transform: "translateX(-5em)" }}>
                    Log in
                  </p>
                </Link>

                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                    transform: "translateX(13em)",}}>
                  <TbShoppingBag style={{ fontSize: "25px" }} />
                  <p
                    style={{
                      fontSize: "0.2px",
                      transform: "translateX(-25em)", }}> My cart
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="searching">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
          <button type="submit" className="search-icon">
            <AiOutlineClose />
          </button>
        </div>
      </div>

      {filter.length > 0 ? (
          <div style={{ display: 'flex', marginTop:'10px' }}>
            <div className="filter-product">
              <div className="boot-brands">
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    marginTop: "7px",
                  }}> Category </p>
                <ul className="list-ul" style={{ marginLeft: "-35px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Fans</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Football boots</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Lifestyle</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Training</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Futsal</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Accessories</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Goalkeeper gloves</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Textile</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Shoes</label>
                  </li>
                </ul>
              </div>

              <div className="colour">
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",
                  }}> Colour </p>
                <button style={{ backgroundColor: "#333333" }}></button>
                <button style={{ backgroundColor: "#ffffff" }}></button>
                <button style={{ backgroundColor: "#303f9f" }}></button>
                <button style={{ backgroundColor: "#4dd0e1" }}></button>
                <button style={{ backgroundColor: "#ff9800" }}></button>
                <button style={{ backgroundColor: "#2196f3" }}></button>
                <button style={{ backgroundColor: "#ffeb3b" }}></button>
                <button style={{ backgroundColor: "#e53935" }}></button>
                <button style={{ backgroundColor: "#b0bec5" }}></button>
                <button style={{ backgroundColor: "#ab2a3e" }}></button>
                <button style={{ backgroundColor: "#fff3e0" }}></button>
                <button style={{ backgroundColor: "#ec407a" }}></button>
                <button style={{ backgroundColor: "#8bc34a" }}></button>
                <button style={{ backgroundColor: "#ffc107" }}></button>
                <button style={{ backgroundColor: "#7e57c2" }}></button>
              </div>

              <div className="gender">
                <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px", }}> Sex </p>
                <ul className="list-ul" style={{ marginLeft: "-5px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Male</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Female</label>
                  </li>
                </ul>
              </div>

              <div className="outsole">
                <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",
                  }}> Type of outsole </p>
                <ul className="list-ul">
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>AG - Artificial Ground</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>FG - Firm Ground</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Football boots with FG/AG</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>MG - Multi-Ground</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>SG - Soft Ground</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>TURF - Synthetic ground</label>
                  </li>
                </ul>
              </div>

              <div className="material">
                <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",
                  }}> Type of material </p>
                <ul className="list-ul" style={{ marginLeft: "-85px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Leather Boots</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Synthetic Boots</label>
                  </li>
                </ul>
              </div>

              <div className="age">
                <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",}}> Age </p>
                <ul className="list-ul" style={{ marginLeft: "-10px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Adult</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Kids</label>
                  </li>
                </ul>
              </div>

              <div className="shape">
                <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",
                  }}> Shape </p>
                <ul className="list-ul" style={{ marginLeft: "-24px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Narrow shape</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Wide shape</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Normal shape</label>
                  </li>
                </ul>
              </div>

              <div className="laces">
                <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",}}> Laces </p>
                <ul className="list-ul" style={{ marginLeft: "-20px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>with lace</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Laceless</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>Elastic laces</label>
                  </li>
                </ul>
              </div>

              <div className="anklet">
                <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",
                  }}> Anklet </p>
                <ul className="list-ul" style={{ marginLeft: "-28px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>With ankle sock</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>No sock</label>
                  </li>
                </ul>
              </div>

              <div className="size-boots">
                <p> Size </p>
                <button> 19 </button>
                <button> 20 </button>
                <button> 21 </button>
                <button> 22 </button>
                <button> 23 </button>
                <button> 24 </button>
                <button> 25 </button>
                <button> 27 </button>
                <button> 28 </button>
                <button> 29 </button>
                <button> 30 </button>
                <button> 31 </button>
                <button> 32 </button>
                <button> 33 </button>
                <button> 34 </button>
                <button> 35 </button>
                <button> 36 </button>
                <button> 37 </button>
                <button> 38 </button>
                <button> 39 </button>
                <button> 40 </button>
                <button> 41 </button>
                <button> 42 </button>
                <button> 43 </button>
                <button> 44 </button>
                <button> 45 </button>
                <button> 46 </button>
                <button> 47 </button>
                <button style={{ gridColumn: "1/ 4", width: "130px" }}> 48 </button>
                <button style={{ gridColumn: "4/ -1", width: "170px" }}> 49 </button>
              </div>

              <div className="minimum-price">
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",}}> Minimum price
                </p>
                <ul className="list-ul" style={{ marginLeft: "-80px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>80 €</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>150 €</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>220 €</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>290 €</label>
                  </li>
                </ul>
              </div>

              <div className="maximum-price">
                <p style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginTop: "7px",}}> Maximum price </p>
                <ul className="list-ul" style={{ marginLeft: "-80px" }}>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>290 €</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>220 €</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>150 €</label>
                  </li>
                  <li>
                    <input className="list-input" type="checkbox" />
                    <label>80 €</label>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p style={{ marginLeft: "20px" }}> Order by: <br />
                <select
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #ced4da",
                    color: "black",
                    width: "13rem",}}>
                  <option> Relevance </option>
                  <option> Price: Less expensive first </option>
                  <option> Price: Most expensive first </option>
                  <option> By name: a - z </option>
                  <option> By name: z - a </option>
                </select>
              </p>
            </div>

            <div className="list-search">
              {filter.map((product) => (
                <div key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <div className="result">
                      <img
                        src={product.imgNormal}
                        alt={product.name}
                        className="normal-image"/>
                      <img src={product.imgHover}
                        alt=""
                        className="hover-image"/>
                        <p>{product.name}</p>
                        <p style={{ fontSize: '16px' }}>{product.price}</p>
                        <div className="add-text">
                          <span className="hover-text"> {product.sizes} </span>
                        </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
      ) : (
        <div className="search-page">
          <div className="top-search">
            <p style={{ fontWeight: "bold" }}> Top searches </p>
            <ul>
              <p><ImSearch /> adida predator
                <GoArrowRight style={{ position: "relative", left: "180px" }} />
              </p>
              <p>
                <ImSearch /> nike mercurial
                <GoArrowRight style={{ position: "relative", left: "184px" }} />
              </p>
              <p>
                <ImSearch /> football boot
                <GoArrowRight style={{ position: "relative", left: "192px" }} />
              </p>
              <p>
                <ImSearch /> adida
                <GoArrowRight style={{ position: "relative", left: "243px" }} />
              </p>
              <p>
                <ImSearch /> predator
                <GoArrowRight style={{ position: "relative", left: "220px" }} />
              </p>
            </ul>
          </div>

          <div className="most-search">
            <p style={{ fontWeight: "bold" }}> Most searched products </p>
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
                  <p className="p-container">
                    Predator Ellte FT F Football Boots <br /> 279,99 €
                  </p>
                  <span className="hover-text">
                    Sizes (UK): 6, 6,5, 7, 7,5, 8, 8,5, 9, 9,5, 10, 10,5, 11
                  </span>
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
                  <p className="p-container">
                    adidas Predator Elite FT FG Football Boots <br /> 279,99 €
                  </p>
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
                  <p className="p-container">
                    Nike Air Max Excee Trainers <br /> 269,99 €
                  </p>
                  <span className="hover-text">
                    SIZES (USA): 7, 8, 10, 10'5
                  </span>
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
                <p className="p-container">
                  Predator Ellte LL AG Football Boots <br /> 269,99 €
                </p>
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
                  <p className="p-container">
                     Predator Ellte L AG Football Boots <br /> 219,99 €
                  </p>
                  <span className="hover-text">
                    Sizes (UK): 6, 6,5, 7, 7,5, 8, 8,5, 9, 9,5, 10, 10,5
                  </span>
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
                  <p className="p-container">
                    Predator Ellte FG Football Boots <br /> 259,99 €
                  </p>
                  <span className="hover-text">
                    Sizes (UK): 6, 6,5, 7, 10,5, 11, 11,5, 12, 12,5, 13
                  </span>
                </div>
              </div>
              <div className="product">
                <img
                  src="https://www.futbolemotion.com/imagesarticulos/229404/medianas/bota-adidas-predator-elite-ft-nino-fg-lucid-blueftwr-whitesolar-red-1.jpg"
                  alt=""/>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className="new-release" style={{ marginRight: "10px" }}>
                    NEW RELEASES
                  </p>
                  <span
                    style={{
                      border: "2px solid blue",
                      borderRadius: "20px",
                      color: "#0043a8",
                      fontSize: "11px",
                      fontWeight: "bold",
                      padding: "1px 7px",}}>KIDS</span>
                </div>
                <p className="p-container">
                  Predator Ellte FT FG Football Boots <br /> 149,99 €
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
