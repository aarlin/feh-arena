import React from "react";
import { Header, Image, ImageGroup, Icon } from "semantic-ui-react";
import fehBanner from "../assets/general/feh_waifu2x.png";
import arena from "../assets/arena/cont4_title.png";

const SiteHeader = () => {
  return (
    <Header as="h2" textAlign="center">
      <ImageGroup>
        <Image centered size="medium" src={fehBanner} />
      </ImageGroup>
      <ImageGroup>
        <Image centered size="medium" src={arena} />
      </ImageGroup>
    </Header>
  );
};

export default SiteHeader;
