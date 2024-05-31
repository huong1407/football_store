import React from "react";
import { Link } from "react-router-dom";

function Recommended() {
    return (
        <div>
            <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '3px', textAlign: 'center'}}> RECOMMENDED </p>
            
            <div className="recommender">
                <div className="gallery">
                    <Link>
                        <img width={350} height={250}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/1713163568adidas_copa_america24_461x310.webp"
                        alt=""/> 
                    </Link>
                    <div className="desc">kkk</div>
                </div>

            <div className="recommender">
                <div className="gallery">
                    <Link>
                        <img width={350} height={250}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/sp_white_pack24_461x310.webp"
                        alt=""/> 
                    </Link>
                    <div className="desc">awpeka</div>
                </div>
            </div>
                
            <div className="recommender">
                <div className="gallery">
                    <Link>
                        <img width={350} height={250}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/puma_manchester_city_home24_461x310.jpg"
                        alt=""/>
                    </Link>
                    <div className="desc">anreo</div>
                </div>
            </div>
                
            <div className="recommender">
                <div className="gallery">
                    <Link>
                        <img width={350} height={250}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/nike_premiere_league_officialball_461x310.jpg"
                        alt=""/>
                    </Link>
                     <div className="desc">HIII</div>
                </div>
            </div>
                
            <div className="recommender">
                <div className="gallery">
                    <Link>
                        <img width={350} height={250}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/munich_0324_461x310.jpg"
                        alt=""/> 
                    </Link>
                    <div className="desc"> Hi </div>
                </div>
            </div>
                
            <div className="recommender">
                <div className="gallery">
                    <Link>
                        <img width={350} height={250}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/skechers_laser24_461x310.jpg"
                        alt=""/> 
                    </Link>
                    <div className="desc"> Hello </div>
                </div>
            </div>

            <div className="recommender">
                <div className="gallery">
                    <Link>
                        <img width={350} height={250}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/semana_mujer24_461x310_balones.jpg"
                        alt=""/>
                    </Link>
                     <div className="desc"> Add des </div>
                </div>
            </div>
                
            <div className="recommender">
                <div className="gallery">
                    <Link>
                        <img width={350} height={250}
                        src="https://www.futbolemotion.com/imagesuploads/cromosportadas/web/originals_gazelle_coral24_461x310.jpg"
                        alt=""/> 
                    </Link>
                    <div className="desc"> Add </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Recommended;