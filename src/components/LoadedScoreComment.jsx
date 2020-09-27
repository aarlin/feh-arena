import React from "react";
import { Segment, Comment, Icon, Divider } from "semantic-ui-react";
import tier from "../assets/arena/tier_icon_medium.png";
import score from "../assets/arena/score_icon_medium.png";
import upOne from "../assets/arena/up_one_medium.png";

const LoadedScoreComment = () => {
  return (
    <Segment color="yellow">
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={tier} />
          <Comment.Content>
            <Comment.Author>Rank in Tier</Comment.Author>
            <Comment.Text>2049</Comment.Text>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src={score} />
          <Comment.Content>
            <Comment.Author>Score</Comment.Author>
            <Comment.Text>3980</Comment.Text>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src={upOne} />
          <Comment.Content>
            <Comment.Author>Tier Progression</Comment.Author>
            <Comment.Text>
              Tier 20
              <Icon name="long arrow alternate right" />
              Tier 21
            </Comment.Text>
          </Comment.Content>
        </Comment>

        {Math.random() * 2 > 1 ? (
          <Comment>
            <Comment.Content>
              <Comment.Author>Submitted</Comment.Author>
              <Comment.Text>{new Date().toUTCString()}</Comment.Text>
            </Comment.Content>
          </Comment>
        ) : (
          <Comment>
            <Comment.Content>
              <Comment.Text>
                <b>Submitted:</b> {new Date().toUTCString()}
              </Comment.Text>
            </Comment.Content>
          </Comment>
        )}
      </Comment.Group>
    </Segment>
  );
};

export default LoadedScoreComment;
