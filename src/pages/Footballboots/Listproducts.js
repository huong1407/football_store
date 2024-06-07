import React from "react";

const Listproducts = () => {
    return (
        <div className="list-container">
            <div className="filter-product">
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
                    <button style={{ gridColumn: '1/ 4', width: '130px' }}> 48 </button>
                    <button style={{ gridColumn: '4/ -1', width: '170px' }}> 49 </button>

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

            <div>
                <div>
                    <p style={{ marginLeft: '20px'}}> Order by: <br />
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
                    <span style={{ fontWeight: '600', marginLeft: '790px'}}>Total Items: 648</span></p> 
                </div>

                <div className="list-product">
                    <div className="product">
                        <img src="https://www.futbolemotion.com/imagesuploads/cromoslistados/adidas_F50_440x510.jpg" 
                        alt="" />
                        <p style={{ border: 'none', backgroundColor: '#f7f8f9', padding: '5px', fontSize: '15px', fontWeight: '600'}}>SEARCH</p>
                    </div>
                    <div className="product">
                        <img src="https://www.futbolemotion.com/imagesuploads/cromoslistados/adidas_advancement24_440x510.jpg" 
                        alt="" />
                        <p style={{ border: 'none', backgroundColor: '#f7f8f9', padding: '5px', fontSize: '15px', fontWeight: '600'}}> SEARCH </p>
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
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p className="new-release" style={{ marginRight: '10px' }}> NEW RELEASES </p> 
                            <span style={{ border: '2px solid blue', borderRadius: '20px', color: '#0043a8', fontSize: '11px', fontWeight: 'bold', padding: '1px 7px' }}> KIDS </span>
                        </div>
                        <p className="p-container"> Predator Ellte FT FG Football Boots <br /> 149,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229319/medianas/bota-adidas-predator-elite-fg-nino-lucid-blueftwr-whitesolar-red-1.jpg" 
                        alt="" />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p className="new-release" style={{ marginRight: '10px' }}> NEW RELEASES </p> 
                            <span style={{ border: '2px solid blue', borderRadius: '20px', color: '#0043a8', fontSize: '11px', fontWeight: 'bold', padding: '1px 7px' }}> KIDS </span>
                        </div>
                        <p className="p-container"> Predator Ellte LL FG Football Boots <br /> 129,99 €  </p>
                    </div>
                    <div className="product">
                        <img 
                        src="https://www.futbolemotion.com/imagesarticulos/229319/medianas/bota-adidas-predator-elite-fg-nino-lucid-blueftwr-whitesolar-red-1.jpg" 
                        alt="" />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p className="pre-order" style={{ width: '6rem', marginRight: '10px' }}> PRE-ORDER </p> 
                            <span style={{ border: '2px solid blue', borderRadius: '20px', color: '#0043a8', fontSize: '11px', fontWeight: 'bold', padding: '1px 7px' }}> KIDS </span>
                        </div>
                        <p className="p-container"> Predator Ellte FG NIno Football Boots <br /> 119,99 €  </p>
                    </div>
                    <div className="product">
                        <img
                        src="https://www.futbolemotion.com/imagesuploads/cromoslistados/puma_faster24_440x510.jpg" 
                        alt="" />
                        <p style={{ border: 'none', backgroundColor: '#f7f8f9', padding: '5px', fontSize: '15px', fontWeight: '600'}}>SEARCH</p>
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
                        <div style={{ display: 'flex', alignItems: 'center' }}>
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
                        <p className="new-release" style={{ width: '9rem' }}> LIMITED EDITION </p>
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
                    <p style={{ marginLeft: '20px'}}> Order by: <br />
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
                    <span style={{ fontWeight: '600', marginLeft: '790px'}}>Total Items: 648</span></p> 
                </div>

                <hr style={{ border: '1px dashed #f3f3f5'}}/>
            </div>
        </div>
    );
}

export default Listproducts;