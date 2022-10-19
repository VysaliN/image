import React from "react";
import Picture from "./image.jpeg";
import "./Images.css";

const Images = () => {
  return (
    <div>
      <center>
        <h1>How to Import an Image</h1>
        <div className="image">
          <img src={Picture} height="300" width="500" />
        </div>
      </center>
    </div>
  );
};

export default Images;
