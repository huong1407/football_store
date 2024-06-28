import React, { useState, useEffect, useCallback } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";
import Banner from "../../components/Layout/Banner";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaChevronLeft, FaChevronRight, FaRegCalendarDays } from "react-icons/fa6";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { FaCheckCircle, FaYoutube, FaInstagram, FaFacebook, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdTimer, MdStars } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { SiPuma, SiJordan, SiNewbalance } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";

const Homepage = () => {
  const slides = [
    "https://www.futbolemotion.com/imagesbanners/xxl/adidas_F50fast24.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/adidas_tonikroos_11pro2.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/puma_carbon_ultimate.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/puma_manchester-city-home-24-25_HB.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/adidas_arsenal_home24.jpg",
    "https://www.futbolemotion.com/imagesbanners/xxl/1718135128copa_america24_EN.jpg"
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    let newIndex = slideIndex - 1;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    setSlideIndex(newIndex);                                                         
  }, [slideIndex, slides.length]);

  const goToNext = useCallback(() => {
    const newIndex = (slideIndex + 1) % slides.length;
    setSlideIndex(newIndex);
  }, [slideIndex, slides.length]);

  const goToSlide = (index) => {
    setSlideIndex(index);
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
        <Link to="https://www.futbolemotion.com/gb/eurocup" target="_self" style={{textDecoration:'none'}}>
          <div className="box">
            <span style={{fontWeight:'bold', filter: 'blur(0.4px)'}}>UEFA EURO '24</span> | 
            <span style={{filter: 'blur(0.4px)'}}> EVERYONE'S PARTY </span> | 
            <span style={{fontWeight:'bold', filter: 'blur(0.4px)'}}> SHOW YOUR COLOURS!</span>
            <span className="button-slide">See products</span>
          </div>
        </Link>

        <div className="slideshow-container">
          <img src={slides[slideIndex]} alt="" style={{ width: '100%', maxWidth: '1454px', height: '360px' }} />
          <button className="prev" onClick={goToPrevious}><FaChevronLeft /></button>
          <button className="next" onClick={goToNext}><FaChevronRight /></button>

          <div>
            {slides.map((_, index) => (
              <span key={index}
              className={`dot ${slideIndex === index + 0 ?
                'active' : ''}`}
              onClick={() => goToSlide(index + 0)}></span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 w-full sm:grid-cols-2 md:grid-cols-5 md:gap-6 lg:gap-20 max-w-fit mx-10 my-16">
        <div className="flex flex-col items-center border bg-zinc-50">
          <span className="text-5xl"><TbLockSquareRoundedFilled /></span>
          <p className="mx-6 my-5 text-center max-w-56"><span className="font-semibold">#1 retailer</span> of football technical 
                equipment in Spain and <br/> European top 3 </p>
          <img className="w-full mt-auto border"
            src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/premios.jpg"
            alt=""/>
        </div>

        <div className="flex flex-col items-center border bg-zinc-50">
          <span className="text-5xl"><FaCheckCircle /></span>
          <p className="font-semibold mx-6 mt-5 text-center max-w-56 px-4"> 100% Genuine products </p>
          <img className="w-full mt-auto border"
            src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/originales-202307.jpg"
            alt=""/>
        </div>
      
        <div className="flex flex-col items-center border bg-zinc-50">
          <span className="text-5xl"><AiOutlineGlobal /></span>
          <p className="font-semibold mx-6 mt-5 text-center max-w-56 px-4"> Secure international payment </p>
          <img className="w-full mt-auto border"
            src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/pagos.jpg"
            alt=""/>
        </div>

        <div className="flex flex-col items-center border bg-zinc-50">
          <span className="text-5xl"><MdStars /></span>
          <p className="mx-6 mt-5 text-center max-w-56 px-4"> Become a <span className="font-semibold">member</span> and
            enjoy <span className="font-semibold">permanent offers </span> instantly </p>
          <img className="w-full mt-auto border"
              src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/eclub-202307.jpg"
              alt=""/>
        </div>

        <div className="flex flex-col items-center border bg-zinc-50">
          <span className="text-5xl"><MdTimer /></span>
          <p className="mx-6 mt-5 text-center max-w-56 px-4"> 100% <span className="font-semibold"> Secure worldwide shipping </span></p>
          <img className="w-full mt-auto border"
            src="https://www.futbolemotion.com/imagesEstructura/trusted-shop/INT/envios-202307.jpg"
            alt=""/>
        </div>
      </div>

      <div>
          <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana', marginTop: '100px', marginBottom: '-50px'}}>
            FEATURED PRODUCTS
          </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-12 md:grid-cols-6 md:gap-6 lg:grid-cols-6 lg:gap-20 w-full max-w-fit mx-7 my-24 justify-items-center">
              <div className="image max-w-fit">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <div className="featured-img">
                    <img width={200} height={240}
                    loading="lazy"
                    src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_0327_adidas.jpg"
                    alt=""/>
                  </div>
                  <p>Football boots</p>
                </Link>
              </div>

              <div className="image max-w-fit">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <div className="featured-img">
                    <img width={200} height={240}
                    loading="lazy"
                    src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_gloves0424.jpg"
                    alt=""/>
                  </div>
                  <p> Goalkeeper gloves </p>
                </Link>
              </div>

              <div className="image max-w-fit">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <div className="featured-img">
                    <img width={200} height={240}
                    loading="lazy"
                    src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_0224_futsal.jpg"
                    alt=""/>
                  </div>
                  <p> Futsal Shoes </p>
                </Link>
              </div>

              <div className="image max-w-fit">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <div className="featured-img">
                    <img width={200} height={240}
                    loading="lazy"
                    src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/cromos_297x353_mayo22_lifestyle1.jpg"
                    alt=""/>
                  </div>
                  <p> LIFESTYLE </p>
                </Link>
              </div>

              <div className="image max-w-fit">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <div className="featured-img">
                    <img width={200} height={240}
                    loading="lazy"
                    src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/destacados_297x353_acc0424.jpg"
                    alt="" />
                  </div>
                  <p> Accessories</p>
                </Link>
              </div>

              <div className="image max-w-fit">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <div className="featured-img">
                    <img width={200} height={240}
                    loading="lazy"
                    src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/cromos_297x353_manchester_mayo23.jpg"
                    alt=""/>
                  </div>
                  <p> FOOTBALL JERSEYS </p>
                </Link>
              </div>
          </div>
      </div>
     
      <div>
          <h1 style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana'}}> WHICH BOOTS OR GLOVES SHOULD I GET? </h1>
          <div className="options">
            <div className="option-container">
              <p className="caption max-w-96 ml-2 py-7 pl-3.5">
                Depending on your playstyle, playfield and preferences, this
                recommender will help you choose the best boots to shine with your skills.
              <br />
              <button className="click">
                <Link to="https://www.futbolemotion.com/en/recommender/football-boots" target="_blank" className="font-semibold">Boots recommender</Link>
              </button> 
              </p>
            </div>
            <div className="option-container ml-10">
              <img loading="lazy"
                src="https://www.futbolemotion.com/imagescontenidos/portada/recomendador/recomendador-jugador-abril-veintidos.png"
                alt="Boots recommender"/>
            </div>
            <div className="option-container mx-10 ">
              <img loading="lazy"
                src="https://www.futbolemotion.com/imagescontenidos/portada/recomendador/recomendador-portero-abril-veintidos.png"
                alt="Gloves recommender"/>
            </div>
            <div className="option-container">
              <p className="caption max-w-96 mr-4 py-7">
                There are thousands of goalkeeper gloves on the market, but which
                are better for you? With this recommender we'll help you choose
                the ones that are better for you according to our questions. 
                <br />
                <button className="click">
                  <Link to="https://www.futbolemotion.com/en/recommender/goalkeeper-gloves" target="_blank" className="font-semibold p-6">Gloves recommender</Link>
                </button>
              </p>
            </div>
          </div>
      </div>  

      <div>
        <p style={{ fontFamily: 'Verdana', fontSize: '28px', fontWeight: 'bold', letterSpacing: '3px', textAlign: 'center', marginBottom: '40px' }}> RECOMMENDED </p>
        <div className="recommended">
          <div className="gallery">
            <div className="recommended-image">
              <img width={350} height={180}
                  src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/1713163568adidas_copa_america24_461x310.webp"
                  alt=""/> 
              </div>
                <p> Copa América 2024 </p>
          </div>

          <div className="gallery">
            <div className="recommended-image">
              <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/sp_white_pack24_461x310.webp"
                alt=""/> 
              </div>
                <p> SP White Pack </p>
          </div>
            
          <div className="gallery">
            <div className="recommended-image">
              <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/new_kits_general_461x310.jpg"
                alt=""/>
            </div>
                <p> New official kits 2024-2025 </p>
          </div>

          <div className="gallery">
              <div className="recommended-image">
                  <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/1718606380ventajasFE_member24_388x261.jpg"
                    alt=""/>
              </div>
                <p> Become a member </p>
          </div>

          <div className="gallery">
            <div className="recommended-image">
              <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/munich_0324_461x310.jpg"
                    alt=""/> 
              </div>
                <p> Munich New Futsal Collection </p>
          </div>

          <div className="gallery">
            <div className="recommended-image">
              <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/skechers_laser24_461x310.jpg"
                alt=""/> 
            </div>
              <p> Skechers Laser-Comfort </p>
          </div>

          <div className="gallery">
            <div className="recommended-image">
              <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/semana_mujer24_461x310_balones.jpg"
                alt=""/>
            </div>
              <p> Eurocup balls </p>
          </div>

          <div className="gallery">
            <div className="recommended-image">
              <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/adidas_samba_messi24_16x9_4.jpg"
                alt=""/> 
            </div>
              <p> Originals: Samba x Messi x Inter Miami </p>
          </div>
        </div>
      </div>

      <div>
        <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana', marginTop: '70px'}}> THE LATEST AT @FUTBOLEMOTION </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-full max-w-fit gap-5 ml-6 my-7">
            <div className="motion">
              <Link to="https://www.futbolemotion.com/imagescms/postblogs/22240/tamanofijo/post-nike-rising-gem-pack-portjpg0.webp" 
                target="_blank">
                  <div style={{position: 'relative'}}>
                    <img width={450} height={300} 
                      src="https://www.futbolemotion.com/imagescms/postblogs/22240/tamanofijo/post-nike-rising-gem-pack-portjpg0.jpg" alt="" />
                      <button className="motion-box">Boots</button>
                  </div>
                  <br /> <div> Nike presents the new "Rising Gem Pack" </div>    
              </Link>
              <p className="comment"> A new pack from the American brand that aims to focus on young players, 
                those new gems emerging in the world of football who will wear the swoosh. 
                Let's delve into all the details.</p>
              <br /> <FaRegCalendarDays style={{ float:'left', fontSize: '1.2rem', color: '#6c757d'}}/> <span style={{float: 'left', marginLeft: '6px', color: '#6c757d'}}> May 12 </span>
            </div>

            <div className="motion">
              <Link to="https://www.futbolemotion.com/imagescms/postblogs/22230/tamanofijo/post-nike-tiempo-30-aniversario-portjpg0.jpg"
                target="_blank">
                  <div style={{position:'relative'}}>
                    <img width={450} height={300} 
                      src="https://www.futbolemotion.com/imagescms/postblogs/22230/tamanofijo/post-nike-tiempo-30-aniversario-portjpg0.jpg" alt="" />
                    <button className="motion-box">Boots</button>
                  </div>
                  <br /> <div> Nike Tiempo Legend X "Emerald" 30th Anniversary </div> 
              </Link>
              <p className="comment"> Introducing the new Nike Tiempo Legend X Emerald, 
                a special edition commemorating the 30th anniversary of the American brand's oldest silo. 
                Let's explore all the details. </p>
              <br /> <FaRegCalendarDays style={{float:'left', fontSize: '1.2rem', color: '#6c757d'}}/> <span style={{float: 'left', marginLeft: '6px', color: '#6c757d'}}> April 14 </span>
            </div>

            <div className="motion">
              <Link to="https://www.futbolemotion.com/imagescms/postblogs/22154/tamanofijo/puma-gear-up-packpng0.webp"
                target="_blank">
                  <div style={{position: 'relative'}}>
                    <img width={450} height={300} 
                      src="https://www.futbolemotion.com/imagescms/postblogs/22154/tamanofijo/puma-gear-up-packpng0.png" alt="" />
                    <button className="motion-box">Boots</button>
                  </div>
                  <br /> <div> Nike Tiempo Legend X "Emerald" 30th Anniversary </div>
              </Link>
              <p className="comment"> The starting whistle has already been blown, 
                so many brands are introducing their novelties for those stragglers who have not yet 
                chosen their <span> football boots. </span>
                Puma is one of them, so in this post we are going to present the latest release from the German brand. </p>
              <br /> <FaRegCalendarDays style={{float:'left', fontSize: '1.2rem', color: '#6c757d'}}/> <span style={{float: 'left', marginLeft: '6px', color: '#6c757d'}}> September 30 </span>
            </div>
          </div>
      </div>
            
      <div className="grid grid-cols-3 w-full h-24 text-center bg-gray-100 gap-4 mt-16">
        <div className="inline-flex items-center justify-center">
          <Link to="https://www.youtube.com/channel/UC1Flg_fnXXgsYz6gCfYAeUg?sub_confirmation=1"
            target="_blank"
            className="network-link flex"> 
              <FaYoutube style={{ color: 'red', fontSize: '2rem', verticalAlign: 'middle' }} />
                <span className="mt-1 ml-3 font-semibold">4.810</span>
          </Link> 
        </div>
        <div className="inline-flex items-center justify-center">
          <Link to="http://www.instagram.com/futbolemotion"
            target="_blank"
            className="network-link flex">
            <FaInstagram style={{color: '#E1306C', fontSize: '2rem'}}/> 
            <span className="mt-1 ml-3 font-semibold"> 686.000 </span>
          </Link>
        </div>
        <div className="inline-flex items-center justify-center">
          <Link to="http://www.facebook.com/futbolemotionen"
            target="_blank"
            className="network-link flex">
              <FaFacebook style={{color: '#3b5998', fontSize: '2rem'}}/> 
              <span  className="mt-1 ml-3 font-semibold"> 320.000 </span>
          </Link>
        </div> 
      </div>
            
      <div>
        <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana', marginTop: '100px', marginBottom: '30px'}}>
            RATINGS BY OUR CLIENTS </p>
        <div className="rating">
          <div className="rating1 grid grid-rows-3 bg-black rounded-lg w-40 h-52 ml-9">
            <p className="text-white text-6xl mt-7"> 4.7 </p>
            <div className="mt-12">
              <span className="star"><FaStar /></span>
              <span className="star"><FaStar /></span>
              <span className="star"><FaStar /></span>
              <span className="star"><FaStar /></span>
              <span className="star"><FaStarHalfAlt /></span>
            </div>
            <Link  className="text-white mt-5">30246 opinions</Link>
          </div>

          <div className="rating2 leading-9 mt-7 ml-8">
            <p style={{textAlign: 'left'}}>Easiness <span><div className="progress"></div></span></p>
            <p style={{textAlign: 'left'}}>Service <span><div className="progress"></div></span></p>
            <p style={{textAlign: 'left'}}>Shipment <span><div className="progress"></div></span></p>
            <p style={{textAlign: 'left'}}>Information <span><div className="progress"></div></span></p>
          </div>

          <div className="customer-review ml-32">
            <p className="font-bold text-left">LAST OPINIONS: </p>
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
                <p  className="font-normal">You was brilliant, I couldn't get these boots in England. But you did 
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

      <Footer />
    </div>
  );
}

export default Homepage;
