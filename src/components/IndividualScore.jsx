import React from "react";
import { Segment, Placeholder } from "semantic-ui-react";

const IndividualScore = () => {
  return (
    <Segment color="yellow" raised>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Header image>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Header>
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  );
};

export default IndividualScore;
