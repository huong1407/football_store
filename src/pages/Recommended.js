import React from "react";
import { Link } from "react-router-dom";

function Recommended() {
    return (
        <div>
            <p style={{fontSize: '28px', fontWeight: 'bold', letterSpacing: '3px', textAlign: 'center'}}> RECOMMENDED </p>

            <div className="recommender">
                <div className="picture">
                   <Link to ="https://www.futbolemotion.com/en/copaamerica"> 
                        <div className="h1">
                            <img 
                            width={350} height={250}
                            src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/1713163568adidas_copa_america24_461x310.webp"
                            alt=""/>
                            <h1> Copa América 2024</h1>
                        </div>
                    </Link> 
                </div>
            </div>

                <div className="picture">
                   <Link to ="https://www.futbolemotion.com/en/copaamerica"> 
                        <div>
                            <img 
                            width={350} height={250}
                            src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/sp_white_pack24_461x310.webp"
                            alt=""/>
                            <h1>SP White Pack</h1>
                        </div>
                    </Link> 
                </div>
        </div>
    );
}

export default Recommended;