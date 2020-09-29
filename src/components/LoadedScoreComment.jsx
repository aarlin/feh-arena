import React from "react";
import { Segment, Comment, Icon } from "semantic-ui-react";
import tier from "../assets/arena/tier_icon_medium.png";
import scoreIcon from "../assets/arena/score_icon_medium.png";
import upOne from "../assets/arena/up_one_medium.png";

const LoadedScoreComment = ({
  tierRank,
  score,
  startingTier,
  endingTier,
  dateSubmitted,
}) => {
  return (
    <Segment color="yellow">
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={tier} />
          <Comment.Content>
            <Comment.Author>Rank in Tier</Comment.Author>
            <Comment.Text>{tierRank}</Comment.Text>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Avatar src={scoreIcon} />
          <Comment.Content>
            <Comment.Author>Score</Comment.Author>
            <Comment.Text>{score}</Comment.Text>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Avatar src={upOne} />
          <Comment.Content>
            <Comment.Author>Tier Progression</Comment.Author>
            <Comment.Text>
              Tier {startingTier} ⇒ Tier {endingTier}
            </Comment.Text>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Content>
            <Comment.Text>
              <b>Submitted:</b> {dateSubmitted}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Segment>
  );
};

export default LoadedScoreComment;
