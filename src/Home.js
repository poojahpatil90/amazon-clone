import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </div>

        <div className="home__row">
          <Product
            id={100}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={13.42}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={101}
            title="KitchenAid KP26M1XER 6 Qt. Professional 600 Series Bowl-Lift Stand Mixer - Empire Red"
            price={239.6}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81BOGWDXGHL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={102}
            title="Twinkle Star 300 LED Window Curtain String Light Wedding Party Home Garden Bedroom Outdoor Indoor Wall Decorations, Warm White"
            price={17.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61p74O5Nc%2BL._AC_SL1001_.jpg"
          />
          <Product
            id={103}
            title="Amazon Echo - Black (1st Generation)"
            price={64.94}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61GlYAX7WoL._AC_SL1000_.jpg"
          />
          <Product
            id={104}
            title="Beamia At-Home IPL Hair Removal for Women and Men Permanent Painless Hair Remover Device for Facial Whole Body, Upgraded to 999,999 Flashes"
            price={99.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61SyKuLn7OL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={105}
            title="Asus ROG Strix XG49VQ 49” Curved Gaming FreeSync Monitor 144Hz Dual Full HD HDR Eye Care with DP HDMI"
            price={1149.9}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71PjhKA%2BllL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
