import React from "react";
import { Divider, Image, Responsive } from "semantic-ui-react";
import leftArrow from "../assets/general/slide_arrow_left.png";
import rightArrow from "../assets/general/slide_arrow_right.png";
import menu from "../assets/arena/menu.png";
// import menuMed from "../assets/arena/menu_med.png";
import results from "../assets/general/results.png";
// import lumpyBlue from "../assets/arena/bg_votebtn_blue.png";
import lumpyBlueSmall from "../assets/arena/bg_votebtn_blue_small.png";

// 250px for mobile
// todo: add season blessings
const SubmittedScores = () => {
  return (
    <>
        <Image.Group>
          <Image src={leftArrow} size="mini" />
          {/* <Responsive
            as={Image}
            {...Responsive.onlyMobile}
            style={{
              background: `url(${menuMed}) no-repeat`,
              backgroundSize: "auto",
              width: 350,
              height: 42,
            }}
          >
            <Image as="img" src={results} size="small" />
          </Responsive> */}
          <Responsive
            as={Image}
            {...Responsive.onlyComputer}
            style={{
              background: `url(${menu}) no-repeat`,
              backgroundSize: "auto",
              width: 732,
              height: 87,
            }}
          >
            <Image as="img" src={results} size="small" />
          </Responsive>

          <Responsive
            as={Image}
            {...Responsive.onlyMobile}
            style={{
              background: `url(${lumpyBlueSmall}) no-repeat`,
              backgroundSize: "auto",
              width: 230,
              height: 57,
            }}
          >
            <Image as="img" src={results} size="small" />
          </Responsive>
          {/* <Responsive
            as={Image}
            {...Responsive.onlyComputer}
            style={{
              background: `url(${lumpyBlue}) no-repeat`,
              backgroundSize: "auto",
              width: 460,
              height: 114,
            }}
          >
            <Image as="img" src={results} size="small" />
          </Responsive> */}

          <Image src={rightArrow} size="mini" />
        </Image.Group>

        <Divider hidden />
    </>
  );
};

export default SubmittedScores;
