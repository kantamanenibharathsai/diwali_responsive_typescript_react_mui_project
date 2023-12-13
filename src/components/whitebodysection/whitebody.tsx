import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import wone from "../assets/w1.png";
import wtwo from "../assets/w2.png";
import style from "./whitebody.styles";

class WhiteBodySection extends Component {
  render() {
    return (
      <Box sx={style.sectionCon}>
        <Box sx={style.sectionCardCon}>
          <Box sx={style.imageContainer}>
            <Box sx={style.image2} src={wone} component="img"></Box>
          </Box>

          <Box sx={style.contentCard}>
            <Typography variant="h5" sx={style.wishesHead}>
              Your wishes
            </Typography>
            <Typography variant="h6" sx={style.wishesText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an unknown..
            </Typography>
            <Typography variant="h6" sx={style.wishesText}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi.
            </Typography>
            <Typography sx={style.readMore}>Read More</Typography>
          </Box>
        </Box>

        <Box sx={style.sectionCardCon2}>
          <Box sx={style.imageContainer}>
            <Box sx={style.image2} src={wtwo} component="img"></Box>
          </Box>

          <Box sx={style.contentCard}>
            <Typography variant="h5" sx={style.wishesHead}>
              Your wishes
            </Typography>
            <Typography variant="h6" sx={style.wishesText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an unknown..
            </Typography>
            <Typography variant="h6" sx={style.wishesText}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi.
            </Typography>
            <Typography sx={style.readMore}>Read More</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default WhiteBodySection;
