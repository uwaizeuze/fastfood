import React from "react";
import "../Styles/About.css";
import Puri from "../images/puri.jpg";

const About = () => {
  return (
    <>
      <section className="section__about">
        <div className="about__left">
          <h1 className="about__left__title">FastFood</h1>
          <p className="about__left__description">
            Fast food is popular because the food is inexpensive, convenient,
            and tastes good. However, fast food is often made with cheaper
            ingredients such as high fat meat, refined grains, and added sugar
            and fats, instead of nutritious ingredients such as lean proteins,
            whole grains, fresh fruits, and vegetables. Fast food is also high
            in sodium (aka salt) which is used as a preservative and makes food
            more flavorful and satisfying.
          </p>
          <button type="button" class="btn btn-outline-success">
            About
          </button>
        </div>
        <div className="about__right">
          <img src={Puri} alt="puri" className="img--" />
        </div>
      </section>
    </>
  );
};

export default About;
