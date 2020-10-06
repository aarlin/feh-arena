import React from "react";
import { Segment, Feed } from "semantic-ui-react";
import tierIcon from "../assets/arena/tier_icon_medium.png";
import scoreIcon from "../assets/arena/score_icon_medium.png";
import upOne from "../assets/arena/up_one_medium.png";
import upThree from "../assets/arena/up_three_medium.png"
import upTwo from "../assets/arena/up_two_medium.png"
import staySame from "../assets/arena/stay_same_medium.png"
import downOne from "../assets/arena/down_one_medium.png"

const generateTierIcon = (startingTier, endingTier) => {
  switch (endingTier - startingTier) {
    case 3:
      return upThree;
    case 2:
      return upTwo;
    case 1:
      return upOne;
    case 0:
      return staySame;
    case -1:
      return downOne;
    default:
      return null;
  }
}

// TODO: add arena week #, hours before submission end, arena week run dates

const LoadedScore = ({
  tierRank,
  score,
  startingTier,
  endingTier,
  dateSubmitted,
}) => {
  return (
    <>
      <Segment color="yellow" raised>
        <Feed>
          <Feed.Event>
            <Feed.Label image={tierIcon}></Feed.Label>
            <Feed.Content>
              <Feed.Summary>Rank in Tier</Feed.Summary>
              <Feed.Extra text>{tierRank}</Feed.Extra>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image={scoreIcon} />
            <Feed.Content>
              <Feed.Summary>Score</Feed.Summary>
              <Feed.Extra text>{score}</Feed.Extra>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image={generateTierIcon(startingTier, endingTier)} />
            <Feed.Content>
              <Feed.Summary>Tier Progression</Feed.Summary>
              <Feed.Extra text>
                Tier {startingTier} ⇒ Tier {endingTier}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Content>
              <Feed.Extra text>
                <b>Submitted:</b> {dateSubmitted}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
    </>
  );
};

export default LoadedScore;
