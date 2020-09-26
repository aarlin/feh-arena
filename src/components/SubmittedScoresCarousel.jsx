import React from "react";
import { Divider, Image, Header } from "semantic-ui-react";
import leftArrow from "../assets/general/slide_arrow_left.png";
import rightArrow from "../assets/general/slide_arrow_right.png";
import menu from "../assets/arena/menu.png";
import results from "../assets/general/results.png";

// 250px for mobile
// todo: add season blessings
const SubmittedScores = () => {
  return (
    <>
      <Image.Group >
        <Image as="img" src={leftArrow} size="mini" />
        <div style={{background: `url(${menu}) no-repeat`, backgroundSize: 'auto', width: 732, height: 87}} >
          <Image as="img" src={results} size="small"/>
          <Header>Week 190</Header>
        </div>

        <Image as="img" src={rightArrow} size="mini" />

      </Image.Group>


      <Divider hidden />
    </>
  );
};

export default SubmittedScores;
