import React, { Fragment } from "react";

const Sushi = ({ sushi, eatenSushi, eatenSushis }) => {
  const handleOnClick = () => {
    eatenSushi(sushi);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClick}>
        {eatenSushis.find((eatenSushi) => eatenSushi.id === sushi.id) ? null : (
          <img src={sushi.img_url} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
