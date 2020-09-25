import React from "react";
import { Divider, Grid } from "semantic-ui-react";
import FormContainer from "../components/FormContainer";
import SiteHeader from "../components/SiteHeader";
import Statistics from "../components/Statistics";
import SubmittedScoresCarousel from '../components/SubmittedScoresCarousel';
import TierGraph from "../components/TierGraph";
import greyBackground from "../assets/general/grey_bg.jpg";
// import biegeBackground from "../assets/general/biege_bg.jpg";
// import whiteBackground from "../assets/general/white_bg.jpg"
import useWindowSize from "../utils/useWindowSize";

const MainPage = () => {
  const windowSize = useWindowSize();
  return (
    <div
      style={{
        backgroundImage: `url(${greyBackground})`,
        backgroundRepeat: "repeat-y repeat-x",
        alignItems: "center",
        textAligned: "center",
      }}
    >
      <Grid columns={1} centered container>
        <Grid.Column verticalAlign="middle">
          <Divider hidden></Divider>
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
          <SubmittedScoresCarousel></SubmittedScoresCarousel>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default MainPage;
