import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import './link.css';
import Banner from "../../components/Layout/Banner";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { FaChevronLeft, FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaYoutube } from 'react-icons/fa';

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

      useEffect(() => {
        const timer = setTimeout(goToNext, 5000);
        return () => {
          clearTimeout(timer);
        }
      }, [goToNext]);
    
    return (
     <div>
        <Banner />
        <div className="sticky top-0 w-full z-10">
           <Header /> 
        </div>

        <div>
            <div className="slideshow-container">
                <img style={{ width: "100%", maxWidth: '1454px', height: '360px', marginTop: '10px'}}
                    src={slides[slide]}
                     alt="" />
                <button className="prev-slide" onClick={goToPrevious}><FaChevronLeft /></button>
                <button className="next-slide" onClick={goToNext}><FaChevronRight /></button>   

                    {slides.map((_, index) => (
                        <span key={index}
                        className={`bullet ${slide === index + 0 ?
                            'active' : ''}`}
                        onClick={() => goToSlide(index + 0)}></span>
                    ))}
            </div>    

            <Link style={{textDecoration: 'none'}}>
                <div className="football-box">
                    <span style={{fontWeight:'bold', filter: 'blur(0.4px)'}}>UEFA EURO '24</span> | 
                    <span style={{filter: 'blur(0.4px)'}}> EVERYONE'S PARTY </span> | 
                    <span style={{fontWeight:'bold', filter: 'blur(0.4px)'}}> SHOW YOUR COLOURS!</span>
                    <span className="button-slide">See products</span>
                </div>
            </Link>
        </div>
        
        <div className="page-container">
          <div className="footballboots-container">
            <div className="fb-content" style={{marginLeft: '10px', marginTop: '40px'}}>
                <h1 style={{fontSize: '28px', fontWeight: 'bold', fontFamily: 'Verdana'}}>FOOTBALL BOOTS 
                <br />
                <button style={{ 
                    backgroundColor: 'black', 
                    color: 'white',
                    padding: '7px', 
                    fontSize: '10px', 
                    fontWeight: '600',
                    borderRadius: '3px', 
                    display: 'flex',
                    marginBottom: '30px'}}> See all boots <FaArrowRightLong style={{ marginLeft: '10px', marginTop: '5px'}}/> </button> </h1>
                <p className="leading-6 md:max-w-fit"> To choose the right football boots for you, you need to take into account the grass or land you play on, 
                        your skills and technical characteristics. Choosing a sole that guarantees good traction on the football 
                        field you play on or a boot with the weight and material characteristics that best suit your characteristics
                        is paramount. Here you will find all the <span className="font-semibold"> football boots </span> on the market,
                        from those made of natural leather to ultralight and synthetic boots, including laceless boots with sock,
                        for men, women and children. All of them mounted on all types of soles and ranges available. Even if you don't know 
                        which boots to buy, we have a recommender to offer you what you need based on your needs in the field.
                </p>
                <h1 className="font-semibold mt-5 mb-3">You may be interested in: </h1>
                <div className="inline-block"> 
                    <button className="button-interested"> Boots recommender </button>
                    <button className="button-interested"> Boots on sales </button>
                    <button className="button-interested"> Football accessories </button>
                </div> 
            </div>

            <div className="search-filter">
                    <h1 className="text-center text-xl font-bold mt-2.5 mb-3.5"> What boots are you looking for? </h1>
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

        <div className="list-container sm:mt-12 md:mt-10 lg:mt-6">
            <div className="filter-product">
                <div className="h-64">
                    <div className="boot-brands">
                        <p style={{fontWeight: '600', fontSize: '15px', marginTop: '7px'}}>Football boots</p>
                        <ul className="list-ul">
                            <li><input className="list-input" type="checkbox" /><label for="adidas">adidas boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label for="nike">Nike boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label for="puma">Puma Boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label for="joma">Joma boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label for="mizuno">Mizuno boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label for="munich">Munich boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label for="skecher">Skecher boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label for="newbalance">New Balance boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label for="umbro">Umbro football boots</label></li>
                        </ul>
                    </div>

                    <div className="outsole">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Type of outsole</p>
                        <ul className="list-ul">
                            <li><input className="list-input" type="checkbox" /><label>AG - Artificial Ground</label></li>
                            <li><input className="list-input" type="checkbox" /><label>FG - Firm Ground</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Football boots with FG/AG</label></li>
                            <li><input className="list-input" type="checkbox" /><label>MG - Multi-Ground</label></li>
                            <li><input className="list-input" type="checkbox" /><label>SG - Soft Ground</label></li>
                            <li><input className="list-input" type="checkbox" /><label>TURF - Synthetic ground</label></li>
                        </ul>
                    </div>

                    <div className="material">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Type of material</p>
                        <ul className="list-ul" style={{marginLeft: '-85px'}}>
                            <li><input className="list-input" type="checkbox" /><label>Leather Boots</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Synthetic Boots</label></li>
                        </ul>
                    </div>

                    <div className="special-features">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Special features</p>
                        <ul className="list-ul" style={{ marginLeft: '-80px'}}>
                            <li><input className="list-input" type="checkbox" /><label>Most wanted</label></li>
                        </ul>
                    </div>

                    <div className="size-boots">
                        <p> Size </p> 
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
                        <button> 48 </button>
                        <button> 49 </button>

                    </div>

                    <div className="age">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Age</p>
                        <ul className="list-ul" style={{ marginLeft: '-10px'}}>
                            <li><input className="list-input" type="checkbox" /><label>Adult</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Kids</label></li>
                        </ul>
                    </div>

                    <div className="gender">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Gender</p>
                        <ul className="list-ul" style={{ marginLeft: '-30px'}}>
                            <li><input className="list-input" type="checkbox" /><label>Male</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Female</label></li>
                        </ul>
                    </div>

                    <div className="shape">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Shape</p>
                        <ul className="list-ul" style={{ marginLeft: '-24px'}}>
                            <li><input className="list-input" type="checkbox" /><label>Narrow shape</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Wide shape</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Normal shape</label></li>
                        </ul>
                    </div>

                    <div className="laces">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Laces</p>
                        <ul className="list-ul" style={{ marginLeft: '-20px'}}>
                            <li><input className="list-input" type="checkbox" /><label>with lace</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Laceless</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Elastic laces</label></li>
                        </ul>
                    </div>

                    <div className="anklet">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Anklet</p>
                        <ul className="list-ul" style={{ marginLeft: '-28px'}}>
                            <li><input className="list-input" type="checkbox" /><label>With ankle sock</label></li>
                            <li><input className="list-input" type="checkbox" /><label>No sock</label></li>
                        </ul>
                    </div>

                    <div className="discount">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Type of discount</p>
                        <ul className="list-ul" style={{ marginLeft: '-85px'}}>
                            <li><input className="list-input" type="checkbox" /><label>Sale</label></li>
                            <li><input className="list-input" type="checkbox" /><label>Outlet</label></li>
                        </ul>
                    </div>

                    <div className="colour">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Colour</p>
                        <button style={{ backgroundColor: '#333333'}}></button>
                        <button style={{ backgroundColor: '#ffffff'}}></button>
                        <button style={{ backgroundColor: '#303f9f'}}></button>
                        <button style={{ backgroundColor: '#4dd0e1'}}></button>
                        <button style={{ backgroundColor: '#ff9800'}}></button>
                        <button style={{ backgroundColor: '#2196f3'}}></button>
                        <button style={{ backgroundColor: '#ffeb3b'}}></button>
                        <button style={{ backgroundColor: '#e53935'}}></button>
                        <button style={{ backgroundColor: '#b0bec5'}}></button>
                        <button style={{ backgroundColor: '#ab2a3e'}}></button>
                        <button style={{ backgroundColor: '#fff3e0'}}></button>
                        <button style={{ backgroundColor: '#ec407a'}}></button>
                        <button style={{ backgroundColor: '#8bc34a'}}></button>
                        <button style={{ backgroundColor: '#ffc107'}}></button>
                        <button style={{ backgroundColor: '#7e57c2'}}></button>
                    </div>

                    <div className="minimum-price">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Minimum price </p>
                        <ul className="list-ul" style={{ marginLeft: '-83px'}}>
                            <li><input className="list-input" type="checkbox" /><label>80 €</label></li>
                            <li><input className="list-input" type="checkbox" /><label>150 €</label></li>
                            <li><input className="list-input" type="checkbox" /><label>220 €</label></li>
                            <li><input className="list-input" type="checkbox" /><label>290 €</label></li>
                        </ul>
                    </div>

                    <div className="maximum-price">
                        <p style={{fontWeight: '600', fontSize: '14px', marginTop: '7px'}}>Maximum price </p>
                        <ul className="list-ul" style={{ marginLeft: '-85px'}}>
                            <li><input className="list-input" type="checkbox" /><label>290 €</label></li>
                            <li><input className="list-input" type="checkbox" /><label>220 €</label></li>
                            <li><input className="list-input" type="checkbox" /><label>150 €</label></li>
                            <li><input className="list-input" type="checkbox" /><label>80 €</label></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className="subtitle">
                    <p className="ml-5"> Order by: <br />
                    <select style={{ 
                        backgroundColor: '#ffffff', 
                        border: '1px solid #ced4da', 
                        color: 'black', 
                        width: '13rem'}}>
                            <option> Date: Most recent first </option>
                            <option> Price: Less expensive first </option>
                            <option> Price: Most expensive first </option>
                            <option> By name: a - z </option>
                            <option> By name: z - a </option>
                            <option> Discount: highest first </option>
                    </select>
                    <span className="absolute right-1.5 font-bold">Total Items: 648</span></p> 
                </div>
                
                <div className="list-product">
                    <div className="product">
                        <img src="https://www.futbolemotion.com/imagesuploads/cromoslistados/adidas_F50_440x510.jpg" 
                        alt="" />
                        <p className="border-none p-1 text-base font-semibold" style={{ backgroundColor: '#f7f8f9' }}>SEARCH</p>
                    </div>
                    <div className="product">
                        <img src="https://www.futbolemotion.com/imagesuploads/cromoslistados/adidas_advancement24_440x510.jpg" 
                        alt="" />
                        <p className="border-none p-1 text-base font-semibold" style={{ backgroundColor: '#f7f8f9' }}> SEARCH </p>
                    </div>
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
                        src="https://www.futbolemotion.com/imagesarticulos/229248/medianas/bota-adidas-predator-elite-ft-sg-lucid-blue-white-solar-red-1.jpg" 
                        alt="" 
                        className="normal-image"/>
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229346/750/bota-adidas-predator-elite-ft-fg-azul-0.jpg" 
                        alt="" 
                        className="hover-image"/>
                        <div className="add-text">
                            <p className="new-release"> NEW RELEASES </p>
                            <p className="p-container"> Predator Ellte FT SG Football Boots <br /> 279,99 €  </p>
                            <span className="hover-text"> Sizes (UK): 6,5, 7,5, 8, 8,5, 9,5 </span>
                        </div>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229228/medianas/bota-adidas-predator-elite-ll-ag-lucid-blueftwr-whitesolar-red-1.jpg" 
                        alt="" 
                        className="normal-image"/>
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229305/750/bota-adidas-predator-elite-ll-sg-azul-0.jpg" 
                        alt="" 
                        className="hover-image"/>
                        <div className="add-text">
                            <p className="new-release"> NEW RELEASES </p>
                            <p className="p-container"> Predator Ellte LL SG Football Boots <br /> 269,99 €  </p>
                            <span className="hover-text"> Sizes (UK): 6,5, 7,5, 8, 8,5, 9,5, 10 </span>
                        </div>
                        
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229333/medianas/bota-adidas-predator-elite-ag-azul-1.webp" 
                        alt="" 
                        className="normal-image"/>
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229228/750/bota-adidas-predator-elite-ll-ag-lucid-blueftwr-whitesolar-red-0.jpg" 
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
                        <div className="flex items-center">
                            <p className="new-release mr-2"> NEW RELEASES </p> 
                            <span style={{ border: '2px solid blue', borderRadius: '20px', color: '#0043a8', fontSize: '11px', fontWeight: 'bold', padding: '1px 7px' }}> KIDS </span>
                        </div>
                        <p className="p-container"> Predator Ellte FT FG Football Boots <br /> 149,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229319/medianas/bota-adidas-predator-elite-fg-nino-lucid-blueftwr-whitesolar-red-1.jpg" 
                        alt="" />
                        <div className="flex items-center">
                            <p className="new-release mr-2"> NEW RELEASES </p> 
                            <span style={{ border: '2px solid blue', borderRadius: '20px', color: '#0043a8', fontSize: '11px', fontWeight: 'bold', padding: '1px 7px' }}> KIDS </span>
                        </div>
                        <p className="p-container"> Predator Ellte LL FG Football Boots <br /> 129,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229319/medianas/bota-adidas-predator-elite-fg-nino-lucid-blueftwr-whitesolar-red-1.jpg" 
                        alt="" />
                        <div className="flex items-center">
                            <p className="pre-order mr-2"> PRE-ORDER </p> 
                            <span style={{ border: '2px solid blue', borderRadius: '20px', color: '#0043a8', fontSize: '11px', fontWeight: 'bold', padding: '1px 7px' }}> KIDS </span>
                        </div>
                        <p className="p-container"> Predator Ellte FG NIno Football Boots <br /> 119,99 €  </p>
                    </div>
                    <div className="product">
                        <img
                        src="https://www.futbolemotion.com/imagesuploads/cromoslistados/puma_faster24_440x510.jpg" 
                        alt="" />
                        <p className="border-none p-1 text-base font-semibold" style={{ backgroundColor: '#f7f8f9' }}>SEARCH</p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229353/medianas/bota-adidas-f50-elite-ll-fg-ftwr-whitesolar-redlucid-blue-1.jpg" 
                        alt="" />
                        <p className="new-release"> NEW RELEASES </p>
                        <p className="p-container"> F50 Ellte LL FG Football Boots <br /> 269,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229270/medianas/bota-adidas-f50-elite-ll-sg-blanco-1.jpg" 
                        alt="" />
                        <p className="new-release"> NEW RELEASES </p>
                        <p className="p-container"> F50 Ellte LL SG Football Boots <br /> 269,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229267/medianas/bota-adidas-f50-elite-sg-ftwr-whitesolar-redlucid-blue-1.jpg" 
                        alt="" />
                        <p className="pre-order"> PRE-ORDER NOW  </p>
                        <p className="p-container"> F50 Ellte SG Football Boots <br /> 269,99 €  </p>
                    </div>
                    <div className="product">
                        <img
                        src="https://www.futbolemotion.com/imagesarticulos/229352/medianas/bota-adidas-f50-elite-fg-ftwr-whitesolar-redlucid-blue-1.jpg" 
                        alt="" />
                        <p className="new-release"> NEW RELEASES </p>
                        <p className="p-container"> F50 Ellte AG Football Boots <br /> 259,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229255/medianas/bota-adidas-f50-elite-mid-fg-mujer-ftwr-whitelucid-bluesolar-red-1.jpg" 
                        alt="" />
                        <div className="flex items-center">
                            <p className="new-release" style={{ marginRight: '10px'}}> NEW RELEASES </p> 
                            <span style={{ border: '2px solid #0043a8', borderRadius: '20px', color: '#0043a8', fontSize: '11px', fontWeight: 'bold', padding: '1px 7px' }}> WOMEN </span>
                        </div>
                        <p className="p-container"> Women F50 Ellte MId FG Football Boots <br /> 259,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229357/medianas/bota-adidas-copa-pure-2-elite-fg-blanco-1.jpg" 
                        alt="" />
                        <p className="new-release"> NEW RELEASES </p>
                        <p className="p-container"> Copa Pure 2 Ellte FG Football Boots <br /> 299,99 €  </p>
                    </div>

                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/224645/medianas/bota-adidas-f50-elite-ll-fg-limited-edition-purple-1.jpg"
                        alt="" />
                        <p className="new-release"> LIMITED EDITION </p>
                        <p className="p-container"> F50 Ellte LL FG LImIted EdItIon Football Boots <br /> 269,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/224646/medianas/bota-adidas-f50-elite-l-fg-limited-edition-purple-1.jpg"
                        alt="" />
                        <p className="new-release"> NEW RELEASES </p>
                        <p className="p-container"> F50 Ellte L FG LImIted EdItIon Football Boots <br /> 259,99 €  </p>
                    </div>
                </div> 

                <hr style={{ border: '1px dashed #f3f3f5'}}/>

                <div>
                    <p className="ml-5"> Order by: <br />
                    <select style={{ 
                        backgroundColor: '#ffffff', 
                        border: '1px solid #ced4da', 
                        color: 'black', 
                        width: '13rem'}}>
                            <option> Date: Most recent first </option>
                            <option> Price: Less expensive first </option>
                            <option> Price: Most expensive first </option>
                            <option> By name: a - z </option>
                            <option> By name: z - a </option>
                            <option> Discount: highest first </option>
                    </select>
                    <span className="absolute right-1.5 font-bold">Total Items: 648</span></p> 
                </div>

                <hr style={{ border: '1px dashed #f3f3f5'}}/>
            </div>
        </div>

        <div className="Categories">
            <hr style={{ border: '1px solid #e5e7eb'}}/>
            <div>
                <p  className="font-semibold text-xl ml-3 mt-3"> Related categories </p>
                <ul className="related-categories">
                    <Link> Deals on cheap Football and futsal shin guards for kids </Link>
                    <Link> Football shin guards (shin pads) </Link>
                    <Link> Football </Link>
                    <Link> Kids adidas shin guards </Link>
                    <Link> Kids Nike shin guards </Link>
                    <Link> Outlet Deals on cheap Football and futsal shin guards for kids </Link>
                    <Link> Shin guards kids </Link>
                    <Link> Sneakers </Link>
                </ul>
            </div>

            <div className="relative mt-10 text-center">
                <img className="object-cover max-w-full max-h-fit"
                src="https://www.futbolemotion.com/imagescontenidos/portadas_idiomas/botas/recomendador.jpg" 
                alt="" />
                <div className="responsive-text"> Don't you know which boots to choose? </div>
                <div className="responsive-text-small"> 
                    Our boot recommender will help you choose the best boots for you, 
                    your child or your friend so you can give them the best present. </div>
                <button className="responsive-button font-semibold"> 
                    Boots recommender <TiArrowRightOutline style={{ marginLeft: '5px', fontSize: '15px'}}/></button>
            </div>

            <div>
                <h1 style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana', marginTop: '80px'}}> OUR BEST PRODUCTS </h1>
                <div style={{ whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden', height: '500px', width: '100%'}}>
                    <div className="best-product">
                        <img src="https://www.futbolemotion.com/imagesarticulos/197481/330/bota-adidas-copa-gloro-fg-granate-0.jpg" alt="" />
                        <br /> 
                        <img style={{ position: 'relative', left: '40%' }}
                        src="https://www.futbolemotion.com/imagesmarcas/listados/adidas_35_22.jpg" alt="" />
                        <p style={{ border: '1px solid red', backgroundColor: 'red', width: '4.5rem', color: 'white', fontWeight: 'bold', textAlign: 'center'}}> - 50% </p>
                        <h3> adidas Copa Gloro FG Football Boots </h3>
                        <p style={{ color: 'red', fontWeight: '600'}}> 49.99 €  <span style={{textDecoration: 'line-through', color: 'black'}}> 99.99 € </span></p>
                    </div>
                    <div className="best-product">
                        <img src="https://www.futbolemotion.com/imagesarticulos/188243/330/bota-adidas-copa-gloro-fg-negro-0.jpg" alt="" />
                        <br /> 
                        <img style={{ position: 'relative', left: '40%' }}
                        src="https://www.futbolemotion.com/imagesmarcas/listados/adidas_35_22.jpg" alt="" />
                        <p style={{ border: '1px solid red', backgroundColor: 'red', width: '4.5rem', color: 'white', fontWeight: 'bold', textAlign: 'center'}}> - 14% </p>
                        <h3> adidas Copa Gloro FG Football Boots </h3>
                        <p style={{ color: 'red', fontWeight: '600'}}> 85.99 €  <span style={{textDecoration: 'line-through', color: 'black'}}> 99.99 € </span></p>
                    </div>
                    <div className="best-product">
                        <img src="https://www.futbolemotion.com/imagesarticulos/197584/330/bota-adidas-x-crazyfast.3-ll-fg-bright-royal-ftwr-white-solar-red-0.jpg" alt="" />
                        <br /> 
                        <img style={{ position: 'relative', left: '40%' }}
                        src="https://www.futbolemotion.com/imagesmarcas/listados/adidas_35_22.jpg" alt="" />
                        <p style={{ border: '1px solid red', backgroundColor: 'red', width: '4.5rem', color: 'white', fontWeight: 'bold', textAlign: 'center'}}> - 40% </p>
                        <h3> adidas X Crazyfast.3 LL FG Football Boots </h3>
                        <p style={{ color: 'red', fontWeight: '600'}}> 59.99 € <span style={{textDecoration: 'line-through', color: 'black'}}> 99.99 € </span></p> 
                    </div>
                    <div className="best-product">
                        <img src="https://www.futbolemotion.com/imagesarticulos/220919/330/bota-adidas-predator-pro-fg-negro-0.jpg" alt="" />
                        <br /> 
                        <img style={{ position: 'relative', left: '40%' }}
                        src="https://www.futbolemotion.com/imagesmarcas/listados/adidas_35_22.jpg" 
                        alt="" />
                        <p style={{ border: '1px solid red', backgroundColor: 'red', width: '4.5rem', color: 'white', fontWeight: 'bold', textAlign: 'center'}}> - 20% </p>
                        <h3> adidas Predator Pro L FG Football Boots </h3>
                        <p style={{ color: 'red', fontWeight: '600'}}> 119.99 € <span style={{textDecoration: 'line-through', color: 'black'}}> 149.99 € </span></p>
                    </div>
                    <div className="best-product">
                        <img src="https://www.futbolemotion.com/imagesarticulos/188120/330/bota-adidas-predator-accuracy-fg-solar-orange-core-black-0.jpg" alt="" />
                        <br /> 
                        <img style={{ position: 'relative', left: '40%' }}
                        src="https://www.futbolemotion.com/imagesmarcas/listados/adidas_35_22.jpg" alt="" />
                        <p style={{ border: '1px solid red', backgroundColor: 'red', width: '4.5rem', color: 'white', fontWeight: 'bold', textAlign: 'center'}}> - 48% </p>
                        <h3> adidas Predator Pro L FG Football Boots </h3>
                        <p style={{ color: 'red', fontWeight: '600'}}> 154.99 € <span style={{textDecoration: 'line-through', color: 'black'}}> 299.99 € </span></p>
                    </div>
                    <div className="best-product">
                        <img src="https://www.futbolemotion.com/imagesarticulos/91329/330/bota-adidas-mundial-team-negra-0.jpg" alt="" />
                        <br /> 
                        <img style={{ position: 'relative', left: '40%' }}
                        src="https://www.futbolemotion.com/imagesmarcas/listados/adidas_35_22.jpg" alt="" />
                        <p style={{ border: '1px solid red', backgroundColor: 'red', width: '4.5rem', color: 'white', fontWeight: 'bold', textAlign: 'center'}}> - 20% </p>
                        <h3> adidas Predator Pro L FG Football Boots </h3>
                        <p style={{ color: 'red', fontWeight: '600'}}> 119.99 € <span style={{textDecoration: 'line-through', color: 'black'}}> 149.99 € </span></p>
                    </div>
                </div> 
            </div>

            <div>
                <h1 style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana', marginTop: '80px'}}> THE BOOTS OF YOUR IDOLS </h1>
                <div style={{display: 'flex', gap: '1.3rem', marginLeft: '15px', marginTop: '30px'}}>
                   <div className="idols">
                        <img width={340} height={240}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/1523439723messi.jpg" alt="" />
                        <p className="text-center font-semibold mt-2"> Leo Messi </p>
                    </div>
                    <div className="idols">
                        <img width={340} height={240}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/1523441359cristiano.jpg" alt="" />
                        <p className="text-center font-semibold mt-2"> Cristiano Ronaldo </p>
                    </div>
                    <div className="idols">
                        <img width={340} height={240}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/1507283100neymar2-botas.jpg" alt="" />
                        <p className="text-center font-semibold mt-2"> Neymar JR </p>
                    </div>
                    <div className="idols">
                        <img width={340} height={240}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/suarez.jpg" alt="" />
                        <p className="text-center font-semibold mt-2"> Luis Suárez </p>
                    </div>  
                </div>
                <hr />

                <div>
                    <h1 style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana', marginTop: '80px'}}> THE LASTEST AT @FUTBOLEMOTION </h1>
                    <div className="grid grid-cols-2 max-w-full h-max gap-8 mt-8 ml-5">
                        <div className="max-w-screen-xl max-h-fit ml-4">
                            <video controls 
                                className="w-full h-full"
                                src="https://youtu.be/o_oidriv86U"></video>

                        </div>

                        <div className="list-video">
                            <div className="video-box">
                                <div className="flex items-center">
                                   <img 
                                    src="https://www.futbolemotion.com/imagesEstructura/logos/download_app_black.png" alt="" />
                                    <span className="ml-2.5 mt-2.5 font-semibold text-white"> 
                                        Fútbol Emotion  <br /> 4.800 </span>

                                    <div className="absolute right-28 mt-3">
                                        <button className="flex align-middle"><FaYoutube className="text-lg mr-2 mt-1"/> Subscribe </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="scroll">
                                <div className="image-video">
                                    <img   
                                    src="https://i.ytimg.com/vi/o_oidriv86U/mqdefault.jpg" alt=""/>
                                    <span> Review Nike Flood Lights Pack </span> 
                                </div>
                                <div className="image-video">
                                    <img 
                                    src="https://i.ytimg.com/vi/O7tbpHcBc_0/mqdefault.jpg" alt="" />
                                    <span> Review Futsal New Balance Audazo </span> 
                                </div>
                                <div className="image-video">
                                    <img 
                                    src="https://i.ytimg.com/vi/6-CDEMOcl7U/mqdefault.jpg" alt="" />
                                    <span> Review Nike Spark Brillance Pack </span> 
                                </div>
                                <div className="image-video">
                                    <img 
                                    src="https://i.ytimg.com/vi/Qn_BbZGyrAI/mqdefault.jpg" alt="" />
                                    <span> Review Nike Hypervenom Neymar X Jordan </span> 
                                </div>
                                <div className="image-video">
                                    <img 
                                    src="https://i.ytimg.com/vi/VAT5xrXgci4/mqdefault.jpg" alt="" />
                                    <span> Review Nike What the mercurial </span> 
                                </div>
                                <div className="image-video">
                                    <img 
                                    src="https://i.ytimg.com/vi/P6JlzhYNVBk/mqdefault.jpg" alt="" />
                                    <span> Review Futsal PUMA Tricks 2016 </span> 
                                </div>
                                <div className="image-video">
                                    <img 
                                    src="https://i.ytimg.com/vi/ekGjGJW335Y/mqdefault.jpg" alt="" />
                                    <span> Review NikefootballX Indigo Pack: MagistaX, HypervenomX and MercurialX </span> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 ml-10 max-w-5xl">
                        <p className="font-semibold text-lg mt-5"> Review Nike Flood Lights Pack </p>
                        <p className="mb-12 mt-2 text-lg"> New Nike Floodlights pack for the 2016/17 season. 
                            Available in our web site: http://bit.ly/2f8sFD5 soloporteros_portada_en _en</p>
                    </div>
                    
                </div>

                <div className="items">
                    <p className="font-semibold text-left mt-12">YOU MIGHT BE INTERESTED IN...</p>
                    <hr />
                    <div className="grid grid-flow-col w-full sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-5 lg:gap-20 max-w-fit max-h-fit mt-4">
                        <div className="grid grid-rows-4 text-left leading-10 font-sans font-normal">
                            <Link className="link-hover"> Football boots </Link>
                            <Link className="link-hover"> Futsal boots </Link>
                            <Link className="link-hover"> Boots of Haaland </Link>
                            <Link className="link-hover"> Neymar's boots </Link>
                        </div>
                        <div className="grid grid-rows-4 text-left leading-10 font-sans font-normal">
                            <Link> adidas football boots </Link>
                            <Link> Football balls </Link>
                            <Link> Boots for kids </Link>
                            <Link> Gloves for kids </Link>
                        </div>
                        <div className="grid grid-rows-4 text-left leading-10 font-sans font-normal">
                            <Link> Boots for kids </Link>
                            <Link> Clothing for kids </Link>
                            <Link> Goalkeeper gloves </Link>
                            <Link> Real Madrid jerseys </Link>
                        </div>
                        <div className="grid grid-rows-4 text-left leading-10 font-sans font-normal">
                            <Link> Thermal clothing </Link>
                            <Link> Football Socks </Link>
                            <Link> Spain jerseys </Link>
                            <Link> Euro jerseys </Link>
                        </div>
                        <div className="grid grid-rows-4 text-left leading-10 font-sans font-normal">
                            <Link> Raincoats </Link>
                            <Link> Shin pads </Link>
                            <Link> Goalkeeper clothing </Link>
                            <Link> Football team's tracksuits </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </div>
        

        <Footer />
      </div>
    );
}

export default Footballboots;