import React from "react";
import { Link } from "react-router-dom";
import { TiArrowRightOutline } from "react-icons/ti";
import FooterBar from "./../FooterBar";
import { FaYoutube } from 'react-icons/fa';

const Categories = () => {
    return (
        <div className="Categories">
            <hr style={{ border: '1px solid #e5e7eb'}}/>
            <p style={{fontWeight: 'bold', fontSize: '16px', marginLeft: '10px', marginTop: '10px'}}> Related categories </p>
            <ul className="related-categories">
                <Link> Deals on cheap Football and futsal shin guards for kids </Link>
                <Link> Football shin guards (shin pads) </Link>
                <Link> Football </Link>
                <Link> Kids adidas shin guards </Link>
                <Link> Kids Nike shin guards </Link>
            </ul>
            <ul className="related-categories">
                <Link> Outlet Deals on cheap Football and futsal shin guards for kids </Link>
                <Link> Shin guards kids </Link>
                <Link> Sneakers </Link>
            </ul>

            <div style={{position: 'relative', marginTop: '40px'}}>
                <img style={{objectFit: 'cover', width: '100%'}}
                src="https://www.futbolemotion.com/imagescontenidos/portadas_idiomas/botas/recomendador.jpg" 
                alt="" />
                <h1 style={{position: 'absolute', bottom: '50%', right: '10%', fontSize: '50px', fontWeight: '300', lineHeight: '1.2', width: '35rem'}}> Don't you know which boots to choose? </h1>
                <p style={{position: 'absolute', bottom: '40%', right: '5.2%', lineHeight: '1.2', width: '40rem'}}> 
                    Our boot recommender will help you choose the best boots for you, your child or your friend so you can give them the best present. </p>
                <button style={{
                    position: 'absolute', 
                    bottom: '30%', 
                    right: '31%', 
                    lineHeight: '1.2',
                    fontSize: '10px', 
                    padding: '5px 10px', 
                    borderRadius: '5px',
                    fontWeight: '600',
                    backgroundColor: '#1d1d1d', 
                    color: 'white', 
                    display: 'flex'}}> Boots recommender <TiArrowRightOutline style={{ marginLeft: '5px', fontSize: '15px'}}/> </button>
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
                        <p style={{ fontWeight: 'bold', textAlign: 'center'}}> Leo Messi </p>
                    </div>
                    <div className="idols">
                        <img width={340} height={240}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/1523441359cristiano.jpg" alt="" />
                        <p style={{ fontWeight: 'bold', textAlign: 'center'}}> Cristiano Ronaldo </p>
                    </div>
                    <div className="idols">
                        <img width={340} height={240}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/1507283100neymar2-botas.jpg" alt="" />
                        <p style={{ fontWeight: 'bold', textAlign: 'center'}}> Neymar JR </p>
                    </div>
                    <div className="idols">
                        <img width={340} height={240}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/suarez.jpg" alt="" />
                        <p style={{ fontWeight: 'bold', textAlign: 'center'}}> Luis Suárez </p>
                    </div>  
                </div>
                <hr />

                <div>
                    <h1 style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Verdana', marginTop: '80px'}}> THE LASTEST AT @FUTBOLEMOTION </h1>
                    <div style={{ display: "flex", gap: "2rem", marginTop: '30px'}}>
                        <div>
                            <video controls 
                            width={800} height={400}
                            style={{marginLeft: '10px'}}
                            src="https://youtu.be/o_oidriv86U"></video>
                        </div>
                        <div className="list-video">
                            <div className="video-box">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                   <img 
                                    src="https://www.futbolemotion.com/imagesEstructura/logos/download_app_black.png" alt="" />
                                    <span style={{ marginLeft: '10px', marginTop: '10px', color: 'white', fontWeight: 'bold' }} > Fútbol Emotion  <br /> 4.800 </span>
                                </div>
                                <button> <FaYoutube style={{ fontSize: '18px' }} /> Subscribe </button>
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
                    

                    <p style={{ fontWeight: '600' , marginLeft: '10px', fontSize: '15px'}}>Review Nike Flood Lights Pack </p>
                    <p style={{ marginLeft: '10px', marginBottom: '50px'}}>New Nike Floodlights pack for the 2016/17 season. Available in our web site: http://bit.ly/2f8sFD5 soloporteros_portada_en _en</p>
                </div>

                <div className="items">
                <p style={{
                fontWeight: '600', 
                textAlign: 'left',
                marginTop: '3rem',
                }}>YOU MIGHT BE INTERESTED IN...</p>
                <hr />
                <table>
                    <tr>
                        <td><Link 
                        to="https://www.futbolemotion.com/en/football-boots"
                        className="link-hover">Football boots</Link></td>
                        <td><Link>adidas football boots</Link></td>
                        <td><Link>Boots for kids</Link></td>
                        <td><Link>Thermal clothing</Link></td>
                        <td><Link>Raincoats</Link></td>
                    </tr>
                    <tr>
                        <td><Link className="link-hover">Futsal boots</Link></td>
                        <td><Link>Football balls</Link></td>
                        <td><Link>Clothing for kids</Link></td>
                        <td><Link>Football Socks</Link></td>
                        <td><Link>Shin pads</Link></td>
                    </tr>
                    <tr>
                        <td><Link className="link-hover">Boots of Haaland</Link></td>
                        <td><Link>Boots for kids</Link></td>
                        <td><Link>Goalkeeper gloves</Link></td>
                        <td><Link>Spain jerseys</Link></td>
                        <td><Link>Goalkeeper clothing</Link></td>
                    </tr>
                    <tr>
                        <td><Link className="link-hover">Neymar's boots</Link></td>
                        <td><Link>Gloves for kids</Link></td>
                        <td><Link>Real Madrid jerseys</Link></td>
                        <td><Link>Camisetas de la Eurocopa</Link></td>
                        <td><Link>Football team's tracksuits</Link></td>
                    </tr>
                </table> 
            </div>
            <FooterBar />
            </div>
        </div>
        
    );
}

export default Categories;