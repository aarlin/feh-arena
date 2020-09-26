import React from "react";
// import frame from "../assets/general/bg_frame_white.png";
// import wideFrame from "../assets/general/waku_white.png";
// import frameBackground from "../assets/general/menu_bg.jpg";
import { Grid } from "semantic-ui-react";
import IndividualScore from "./IndividualScore";

// 250px for mobile
const SubmittedScore = () => {
  return (
    <>
      <Grid columns={"equal"} divided>
        <Grid.Row>
          <Grid.Column>
            <IndividualScore></IndividualScore>
          </Grid.Column>
          <Grid.Column>
            <IndividualScore></IndividualScore>
          </Grid.Column>
          <Grid.Column>
            <IndividualScore></IndividualScore>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <IndividualScore></IndividualScore>
          </Grid.Column>
          <Grid.Column>
            <IndividualScore></IndividualScore>
          </Grid.Column>
          <Grid.Column>
            <IndividualScore></IndividualScore>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <IndividualScore></IndividualScore>
          </Grid.Column>
          <Grid.Column>
            <IndividualScore></IndividualScore>
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
