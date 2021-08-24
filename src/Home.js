import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div>
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
                <div className="home__row">
                    <Product id="1234" title='The lean startup' price={29} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.__AC_SY400_.jpg' rating={3}/>
                    <Product id="123434" title='Delicious Samosa with free chutney' price={10} image='https://m.media-amazon.com/images/I/61POqVM2O-L._SL1100_.jpg' rating={5}/>
                    
                    {/*Product*/}
                    {/*Product*/}
                </div>
                <div className="home__row">
                    <Product id="56143" title='1200 gm s
                    Bikano Mini Samosa (400 Gm, Pack Of 3)' price={578} image='https://cdn.staticans.com/image/tr:h-1355,w-1080,cm-pad_resize/data/BIKANERVALA/30-sep-2020/BIKANO1080_1.jpg' rating={4}/>
                    <Product id="5634" title='SAVAYAV ; the organic way Honey 400g | Pure Natural and organic Multi Flora Honey From Western Ghats 2 Pack of 200g' price={218} image='https://m.media-amazon.com/images/I/91-z7ZcU5VL._SL1500_.jpg' rating={4}/>
                    <Product id="3212" title='Amazon Brand - Solimo Back Case for Samsung Galaxy M31 Prime / M31 / F41 (Flexible|Transparent)' price={9} image='https://m.media-amazon.com/images/I/71IXbzY5DcL._SL1500_.jpg' rating={3}/>
                    {/*Product*/}
                    {/*Product*/}
                    {/*Product*/}
                </div>
                <div className="home__row">
                    <Product id="9999" title='The answer to "How to start with python?"' price={1239} image='https://images-na.ssl-images-amazon.com/images/I/51R9msLhVrL._SX352_BO1,204,203,200_.jpg' rating={5}/>
                    {/*Product*/}
                </div>
            </div>
        </div>
    )
}

export default Home
