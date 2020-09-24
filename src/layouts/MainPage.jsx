import React from "react";
import FormContainer from "../components/FormContainer";
import TierGraph from "../components/TierGraph";
import SiteHeader from "../components/SiteHeader";
import Statistics from "../components/Statistics";
import biegeBackground from "../assets/general/biege_bg.jpg";
import greyBackground from "../assets/general/grey_bg.jpg";
import useWindowSize from "../utils/useWindowSize";
import SubmittedScores from '../components/SubmittedScores';
import { Segment, Grid, Form, Button, Divider } from "semantic-ui-react";

const MainPage = () => {
  const windowSize = useWindowSize();
  return (
    <div
      style={{
        backgroundImage: `url(${greyBackground})`,
        backgroundRepeat: "repeat-y",
        alignItems: "center",
        textAligned: "center",
      }}
    >
      <Grid columns={1} centered container>
        <Grid.Column verticalAlign="middle">
          <SiteHeader></SiteHeader>
        </Grid.Column>
      </Grid>
      <Grid columns={1} centered container>
        <Grid.Column verticalAlign="middle">
          <FormContainer></FormContainer>
        </Grid.Column>
      </Grid>
      <Grid columns={1} centered container>
        <Grid.Column verticalAlign="middle">
          <TierGraph></TierGraph>
          <Statistics></Statistics>
        </Grid.Column>
      </Grid>
      <Grid columns={1} centered container>
        <Grid.Column verticalAlign="middle">
          <SubmittedScores></SubmittedScores>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default MainPage;
