import React from "react";
// import frame from "../assets/general/bg_frame_white.png";
// import wideFrame from "../assets/general/waku_white.png";
// import frameBackground from "../assets/general/menu_bg.jpg";
import { Grid } from "semantic-ui-react";
import IndividualScore from "./IndividualScore";
// import PurpleContentScore from "./PurpleContentScore";
import LoadedScore from "./LoadedScore";
import LoadedScoreComment from "./LoadedScoreComment";

const score = {
  tierRank: 201,
  score: 3940,
  startingTier: 20,
  endingTier: 21,
  dateSubmitted: new Date().toUTCString()
}

// 250px for mobile
const SubmittedScore = () => {
  return (
    <>
      <Grid columns={"equal"} divided stackable>
        <Grid.Row>
          <Grid.Column>
            <LoadedScore {...score}></LoadedScore>
          </Grid.Column>
          <Grid.Column>
            <LoadedScoreComment {...score}></LoadedScoreComment>
          </Grid.Column>
          <Grid.Column>
            <LoadedScoreComment {...score}></LoadedScoreComment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <LoadedScoreComment {...score}></LoadedScoreComment>
          </Grid.Column>
          <Grid.Column>
            <LoadedScoreComment {...score}></LoadedScoreComment>
          </Grid.Column>
          <Grid.Column>
            <LoadedScoreComment {...score}></LoadedScoreComment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <LoadedScoreComment></LoadedScoreComment>
          </Grid.Column>
          <Grid.Column>
            <LoadedScore></LoadedScore>
          </Grid.Column>
          <Grid.Column>
            <IndividualScore></IndividualScore>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default SubmittedScore;
