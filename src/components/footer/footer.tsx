import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { FooterStyles } from "./footer.styles";

export default class Footer extends Component {
  render() {
    return (
      <Box sx={FooterStyles.footerContainer}>
        <Typography variant="subtitle1" sx={FooterStyles.footerContent}>
          Copyright © 2021 All Rights Reserved.
          <Typography
            component="a"
            href="https://html.design/"
            sx={FooterStyles.footerContent}
          >
            Designed by Free Html Templates
          </Typography>
        </Typography>
      </Box>
    );
  }
}