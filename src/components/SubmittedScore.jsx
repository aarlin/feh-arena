import React from "react";
// import frame from "../assets/general/bg_frame_white.png";
// import wideFrame from "../assets/general/waku_white.png";
// import frameBackground from "../assets/general/menu_bg.jpg";
import { Grid, Image, Segment, Placeholder } from "semantic-ui-react";
import sampleData from "../assets/semantic/media-paragraph.png";

// 250px for mobile
const SubmittedScore = () => {
  return (
    <>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Image src={sampleData} />
          </Grid.Column>
          <Grid.Column>
            <Image src={sampleData} />
          </Grid.Column>
          <Grid.Column>
            <Image src={sampleData} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src={sampleData} />
          </Grid.Column>
          <Grid.Column>
            <Image src={sampleData} />
          </Grid.Column>
          <Grid.Column>
            <Image src={sampleData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SubmittedScore;
