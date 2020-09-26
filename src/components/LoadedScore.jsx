import React from "react";
import { Segment, Icon, Comment, Divider } from "semantic-ui-react";
import tier from "../assets/arena/tier_icon_medium.png";
import score from "../assets/arena/score_icon_medium.png";
import upOne from "../assets/arena/up_one_medium.png"

const LoadedScore = () => {
  return (
    <>
      <Segment color="yellow" raised>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src={tier} />
            <Comment.Content>
              <Comment.Author>Rank in Tier</Comment.Author>
              <Comment.Text>
                2049
              </Comment.Text>
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
              <Comment.Text>
                Tier 20
                <Icon name="long arrow alternate right" />
                Tier 21
              </Comment.Text>
            </Comment.Content>
          </Comment>

          <Divider hidden></Divider>

          <Comment>
            <Comment.Text>Submitted: {new Date().toUTCString()}</Comment.Text>
          </Comment>
        </Comment.Group>
      </Segment>
    </>
  );
};

export default LoadedScore;
