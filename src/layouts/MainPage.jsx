import React from "react";
import FormContainer from "../components/FormContainer";
import TierGraph from "../components/TierGraph";
import arena from "../assets/arena/Bg_ArenaDuels.png";
import useWindowSize from '../utils/useWindowSize';

const MainPage = () => {
  const windowSize = useWindowSize();
  return (
    <div style={{
      backgroundImage: `url(${arena})`,
      width: windowSize.width,
      height: windowSize.height,
      backgroundRepeat: 'no-repeat',
      alignItems: "center"
      }}>
      <FormContainer></FormContainer>
      <TierGraph></TierGraph>
    </div>
  );
};

export default MainPage;
