import React from "react";
import { Divider, Image, Statistic, Header } from "semantic-ui-react";
import leftArrow from "../assets/general/slide_arrow_left.png";
import rightArrow from "../assets/general/slide_arrow_right.png";
import SubmittedScore from "./SubmittedScore";
import goldenBg from "../assets/general/goldbox_bg.png";
import results from "../assets/general/results.png";

// 250px for mobile
// todo: add season blessings
const SubmittedScores = () => {
  return (
    <>
      {/* <Image.Group > */}
        {/* <Image as="img" src={leftArrow} size="mini" /> */}
        <div style={{background: `url(${goldenBg}) no-repeat`, width: '100%', height: '100%'}} >
          <Image as="img" src={results} size="small"/>
        </div>

        {/* <Image as="img" src={rightArrow} size="mini" /> */}

      {/* </Image.Group> */}


      <Divider hidden />
    </>
  );
};

export default SubmittedScores;
