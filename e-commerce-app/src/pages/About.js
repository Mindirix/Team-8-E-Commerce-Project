import React from "react";
import percent from "../assets/images/percent.png";
import shopping from "../assets/images/shopping-cart.png";
import delivery from "../assets/images/delivery-box.png";
import customer from "../assets/images/customer-service.png";


const About = () => {
  return (
    <section className="section-center">
      {/* Content before waves */}
    <div className="header">
      <div className="inner-header flex">
        <h1 id="about-us">About Us</h1>
      </div>
      <div className="about-section">
        <h2 id="info">We are building the most beloved and trusted shopping destination Worldwide.</h2>
        <div className="about-icons">
          <div className="about-img-div">
            <img src={percent} alt="100%"></img>
            <p>Access 100% <br></br> Genuine Products <br></br> from Local and <br></br> International Vendors</p>
          </div>
          <div className="about-img-div">
            <img src={shopping} alt="shopping-cart"></img>
            <p>Buy Anything You <br></br>  want online at  <br></br> the Best Prices </p>
          </div>
          <div className="about-img-div">
            <img src={delivery} alt="delivery-box"></img>
            <p>Search, Order on <br></br> all Platforms, <br></br> Pay on Delivery </p>
          </div>
          <div className="about-img-div">
            <img src={customer} alt="customer-service"></img>
            <p>Assisting Our Customers <br></br> for the best <br></br> Shopping Experience </p>
          </div>
        </div>
      </div>
    </div>
    {/* Header ends */}


  <h2 id="our-team">Our Team</h2>


    <div className="column">

      <div>
         <div className="card">
           <div className="card-front card1"></div>
         </div>
         <h3 id="team-names">Jack Marshall<br></br><span>Chief Operating Officer</span></h3>
      </div>

    <div>
      <div className="card">
        <div className="card-front card2"></div>
      </div>
      <h3 id="team-names">Andrew Redwood<br></br><span>Chief Executive Officer</span></h3>
    </div>  

    <div>
      <div className="card">
        <div className="card-front card3"></div>
      </div>
      <h3 id="team-names">John Thomason<br></br><span>Chief Financial Officer</span></h3>
    </div> 

    </div>


    </section>
  );
};

export default About;
