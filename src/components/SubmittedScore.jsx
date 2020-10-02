import React from "react";
// import frame from "../assets/general/bg_frame_white.png";
// import wideFrame from "../assets/general/waku_white.png";
// import frameBackground from "../assets/general/menu_bg.jpg";
import { Grid } from "semantic-ui-react";
import IndividualScore from "./IndividualScore";
// import PurpleContentScore from "./PurpleContentScore";
import LoadedScore from "./LoadedScore";
import LoadedScoreComment from "./LoadedScoreComment";
import chunk from "lodash.chunk";

const score = {
  tierRank: 201,
  score: 3940,
  startingTier: 20,
  endingTier: 21,
  dateSubmitted: new Date().toUTCString(),
};

const scoreDown = {
  tierRank: 201,
  score: 3940,
  startingTier: 21,
  endingTier: 20,
  dateSubmitted: new Date().toUTCString(),
};

const scoreUpTwo = {
  tierRank: 201,
  score: 3940,
  startingTier: 10,
  endingTier: 12,
  dateSubmitted: new Date().toUTCString(),
};


let scores = [score, score, scoreDown, scoreUpTwo];
let groupedScores = chunk(scores, 3);

// 250px for mobile
const SubmittedScore = () => {
  return (
    <>
      <Grid columns={3} divided stackable>
        {groupedScores.map((group) => {
          return (
            <Grid.Row>
              {group.map((score) => {
                return (
                  <Grid.Column stretched>
                    <LoadedScore {...score}></LoadedScore>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          );
        })}
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
