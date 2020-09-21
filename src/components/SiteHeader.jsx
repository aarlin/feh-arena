import React from "react";
import { Header, Image, ImageGroup, Icon } from "semantic-ui-react";
import fehBanner from "../assets/general/feh_waifu2x.png";
import arena from "../assets/arena/cont4_title.png";

const SiteHeader = () => {
  return (
    // <Header size='large' as='h2' icon textAlign='center'>
    // </Header>
    <Header as="h2" textAlign="center">
      <ImageGroup>
        <Image centered size="medium" bordered src={fehBanner} />
      </ImageGroup>
      <ImageGroup>
        <Image centered size="medium" bordered src={arena} />
      </ImageGroup>
    </Header>
  );
};

export default SiteHeader;
