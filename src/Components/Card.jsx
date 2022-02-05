import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card my-3" style={{ width: "300px", height: "350px" }}>
        <img
          src={props.imgsrc}
          className="card-img-top"
          alt="..."
          style={{ height: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
