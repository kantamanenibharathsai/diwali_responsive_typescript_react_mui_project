import React, { Component } from "react";
import bannerStyles from "./banner.styles";
import happyDiwali from "../assets/happty_diwal.png";
import backGroundImg from "../assets/bg_diwali.png";
import { Box } from "@mui/material";

class Banner extends Component {
  render() {
    return (
      <>
        <Box sx={bannerStyles.bannerContainer}>
          <Box
            sx={{ paddingBottom: { lg: "340px" } }}
          >
            <Box
              component="img"
              alt=""
              src={happyDiwali}
              sx={bannerStyles.happyDiwaliLargeImage}
            />
          </Box>
        </Box>
        <Box sx={bannerStyles.bannerSmallContainer}>
          <Box
            component="img"
            alt=""
            src={backGroundImg}
            sx={bannerStyles.bannerSmallImage}
          />
          <Box
            component="img"
            alt=""
            src={happyDiwali}
            sx={bannerStyles.happyDiwaliSmallImage}
          />
        </Box>
      </>
    );
  }
}

export default Banner;
