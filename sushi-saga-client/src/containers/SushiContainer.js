import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = ({ sushis, loadSushi, eatenSushi, eatenSushis }) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map((sushi) => (
          <Sushi
            sushi={sushi}
            key={sushi.id}
            eatenSushi={eatenSushi}
            eatenSushis={eatenSushis}
          />
        ))}
        <MoreButton loadSushi={loadSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
