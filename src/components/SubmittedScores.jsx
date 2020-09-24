import React from "react";
import frame from "../assets/general/bg_frame.png";
import leftArrow from "../assets/general/slide_arrow_left.png";
import rightArrow from "../assets/general/slide_arrow_right.png";
import { Image, Divider, Label } from "semantic-ui-react";

const SubmittedScores = () => {
  return (
    <>
      <Image.Group>
      <Image src={leftArrow} size="tiny" />
        <Image src={frame} size="medium" />
        <Image as="div" alt="An example alt" size="medium" src={frame} />
        <Image src={frame} size="medium" />
        <Image as="img" src={rightArrow} size="tiny" />
      </Image.Group>



      <Divider hidden />
    </>
  );
};

export default SubmittedScores;
