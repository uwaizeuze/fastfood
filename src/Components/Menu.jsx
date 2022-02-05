import React from "react";
import "../Styles/Menu.css";
import Card from "./Card";
import Sdata from "./Sdata";

const Menu = () => {
  return (
    <>
      <section className="container__service">
        <h1 className="service-title">Our Menu</h1>
        <div className="service__box">
          {Sdata.map((current) => {
            return (
              <Card
                key={current.id}
                imgsrc={current.imgsrc}
                title={current.title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
