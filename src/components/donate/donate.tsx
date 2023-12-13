import { Component } from "react";
import donateStyles from "./donate.styles";
import { Box, Typography } from "@mui/material";
import bannerImg from "../assets/banner1_inner.png";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReplayIcon from '@mui/icons-material/Replay';

class Donate extends Component {
  render() {
    return (
      <Box sx={donateStyles.mainContainer}>
        <Typography component="h1" sx={donateStyles.titleBox}>
          Donate
        </Typography>
        <Box sx={donateStyles.respContainer}>
          <Box src={bannerImg} alt="" sx={donateStyles.image} component="img" />
          <Box sx={donateStyles.allContentparentcontainer}>
          <Box sx={donateStyles.contentContainer}>
            <CardGiftcardIcon sx={{color: "white", width: "50px", height: "50px"}}/>
            <Box sx={donateStyles.textContainer}>
              <Typography sx={donateStyles.heading}>Best Wishes</Typography>
              <Typography sx={donateStyles.paragraph}>
                The tradition was also embraced by retailers, for whom the weeks
                and, eventually, the entire month before Christmas.
              </Typography>
            </Box>
          </Box>
      
          <Box sx={donateStyles.contentContainer}>
          <LocalShippingIcon sx={{color: "white", width: "50px", height: "50px"}}/>
            <Box sx={donateStyles.textContainer}>
              <Typography sx={donateStyles.heading}>Free Shipping</Typography>
              <Typography sx={donateStyles.paragraph}>
                The tradition was also embraced by retailers, for whom the weeks
                and, eventually, the entire month before Christmas.
              </Typography>
        </Box>
        </Box>
          <Box sx={donateStyles.contentContainer}>
          < ReplayIcon sx={{color: "white", width: "50px", height: "50px"}}/>
            <Box sx={donateStyles.textContainer}>
              <Typography sx={donateStyles.heading}>Easy Return</Typography>
              <Typography sx={donateStyles.paragraph}>
                The tradition was also embraced by retailers, for whom the weeks
                and, eventually, the entire month before Christmas.
              </Typography>
        </Box>
      </Box>
      </Box>
      </Box>
      </Box>
    );
  }
}

export default Donate;
