import React from "react";
import FormContainer from "../components/FormContainer";
import TierGraph from "../components/TierGraph";
import SiteHeader from "../components/SiteHeader";
import background from "../assets/general/grey_bg.jpg";
import useWindowSize from '../utils/useWindowSize';

const MainPage = () => {
  const windowSize = useWindowSize();
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      width: windowSize.width,
      height: windowSize.height,
      backgroundRepeat: 'no-repeat',
      alignItems: "center"
      }}>
      <SiteHeader></SiteHeader>
      <FormContainer></FormContainer>
      <TierGraph></TierGraph>
    </div>
  );
};

export default MainPage;
