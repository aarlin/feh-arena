import React from "react";
import { Segment, Icon, Feed } from "semantic-ui-react";
import tier from "../assets/arena/tier_icon_medium.png";
import score from "../assets/arena/score_icon_medium.png";
import upOne from "../assets/arena/up_one_medium.png";

const LoadedScore = () => {
  return (
    <>
      <Segment color="yellow" raised>
        <Feed>
          <Feed.Event>
            <Feed.Label image={tier}></Feed.Label>
            <Feed.Content>
              <Feed.Summary>Rank in Tier</Feed.Summary>
              <Feed.Extra text>2940</Feed.Extra>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image={score} />
            <Feed.Content>
              <Feed.Summary>Score</Feed.Summary>
              <Feed.Extra text>3940</Feed.Extra>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image={upOne} />
            <Feed.Content>
              <Feed.Summary>Tier Progression</Feed.Summary>
              <Feed.Extra text>
                Tier 20
                <Icon name="long arrow alternate right" />
                Tier 21
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>Submitted</Feed.Summary>
              <Feed.Extra text>{new Date().toUTCString()}</Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
    </>
  );
};

export default LoadedScore;
