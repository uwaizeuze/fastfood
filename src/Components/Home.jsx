import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <section className="section__container">
        <div className="section__box">
          <h1 className="section__box__title">FastFood</h1>
          <p className="section__box__description">
            Better you will feel if you eat healthy meal
          </p>
          <button type="button" class="btn btn-outline-primary">
            Get Start
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
