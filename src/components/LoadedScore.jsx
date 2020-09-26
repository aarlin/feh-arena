import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";
import tier from "../assets/arena/tier_icon.png";
import score from "../assets/arena/score_icon.png";

const LoadedScore = () => {
  return (
    <>
      <Segment color="yellow" raised>
        <Image floated src={tier}>

        </Image>
        <Image src={score}></Image>
        <Header>Tier </Header>
        <div>It's a segment</div>
      </Segment>
    </>
  );
};

export default LoadedScore;
