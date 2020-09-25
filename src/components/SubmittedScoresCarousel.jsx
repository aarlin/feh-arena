import React from "react";
import { Divider, Image, Statistic } from "semantic-ui-react";
import leftArrow from "../assets/general/slide_arrow_left.png";
import rightArrow from "../assets/general/slide_arrow_right.png";
import SubmittedScore from './SubmittedScore';

// 250px for mobile
// todo: add season blessings
const SubmittedScores = () => {
  return (
    <>
    <Image.Group>
    <Image as="img" src={leftArrow} size="mini" />
    <Statistic inverted>
      <Statistic.Value>Arena Season</Statistic.Value>
      <Statistic.Value>Week 190</Statistic.Value>
      <Statistic.Label>190</Statistic.Label>
    </Statistic>
    <Image as="img" src={rightArrow} size="mini" />

      {/* <Image.Group> */}
      {/* <Image as="img" src={leftArrow} size="mini" /> */}
      {/* <Image src={frame} size="medium" /> */}
     <Image>

     <SubmittedScore></SubmittedScore>
     </Image>
      {/* <Image as="div" alt="An example alt" size="medium" src={frame} /> */}
      {/* <Image src={frame} size="medium" /> */}
      {/* <Image as="img" src={rightArrow} size="mini" /> */}
      {/* </Image.Group> */}

    </Image.Group>

      <Divider hidden />
    </>
  );
};

export default SubmittedScores;
