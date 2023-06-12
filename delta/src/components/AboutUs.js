import React from 'react';
import './AboutUs.css';
import bitmoji2 from './bitmoji2.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Delta is a group of four individuals who came together to create an ecommerce app. We are passionate about delivering a seamless shopping experience to our users.
      </p>
      <p>
        With our app, you can explore a wide range of products, add them to your shopping cart, and make secure transactions. Our goal is to provide a user-friendly and reliable platform for all your shopping needs.
      </p>
      <div className="team-members">
        <div className="team-member">
          <img src={bitmoji2} alt="Team Member 1" />
          <h4>Denis Omondi</h4>
          <p>Scrum Master, Backend, Frontend</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="team-member">
          <img src={bitmoji2} alt="Team Member 2" />
          <h4>Teddy Wambua</h4>
          <p>Frontend, Backend,css</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="quote">
        <p>"Working together to build amazing experiences!"</p>
      </div>
    </div>
  );
};

export default AboutUs;
