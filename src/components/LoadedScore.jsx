import React from "react";
import { Segment, Feed } from "semantic-ui-react";
import tier from "../assets/arena/tier_icon_medium.png";
import scoreIcon from "../assets/arena/score_icon_medium.png";
import upOne from "../assets/arena/up_one_medium.png";

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
            <Feed.Label image={tier}></Feed.Label>
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
            <Feed.Label image={upOne} />
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
