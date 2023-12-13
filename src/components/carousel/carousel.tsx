import { Box,  Rating, Typography } from "@mui/material";
import React, { Component,  RefObject } from "react";
import { styles } from "./carousel.styles";
import ReactSwipe from "react-swipe";
import img1 from "../assets/watch_screen_01.png";
import img2 from "../assets/watch_screen_02.png";   
import img3 from "../assets/watch_screen_03.png";
import img4 from "../assets/watch_screen_04.png";
import img5 from "../assets/watch_screen_05.png";
import img6 from "../assets/watch_screen_06.png";

export default class Carousal extends Component {
//   reactSwipeEl =  null;
private reactSwipeEl: RefObject<ReactSwipe> = React.createRef<ReactSwipe>();

  handleNext = () => {
    this.reactSwipeEl.current?.next();
  };

  handlePrev = () => {
    this.reactSwipeEl.current?.prev();
  };

  render() {
    // let reactSwipeEl: {
    //   next(): void;
    //   prev: () => void;
    // };
    return (
      <>
        <Box sx={styles.carousalContainer}>
          <Typography sx={styles.offerText}>Diwali offer products</Typography>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={this.reactSwipeEl}
          >
            <Box sx={styles.carousalBody}>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img1}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $100.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $169.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={4} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img2}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $25.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $23.99
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={4} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img3}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $899.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $649.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating
                    defaultValue={4.5}
                    precision={0.5}
                    name="read-only"
                    readOnly
                  />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img4}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $315.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $250.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={3} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
            </Box>
            <Box sx={styles.carousalBody}>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img1}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $100.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $169.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={4} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img2}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $25.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $23.99
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={4} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img5}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $899.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $649.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating
                    defaultValue={4.5}
                    precision={0.5}
                    name="read-only"
                    readOnly
                  />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img6}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $315.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $250.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={3} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
            </Box>
            <Box sx={styles.carousalBody}>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img1}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $100.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $169.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={4} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img2}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $25.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $23.99
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={4} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img3}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $899.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $649.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating
                    defaultValue={4.5}
                    precision={0.5}
                    name="read-only"
                    readOnly
                  />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={styles.carousalImg} component="img" src={img4}></Box>
                <Typography sx={styles.productHeading}>Product Name</Typography>
                <Box sx={styles.priceSection}>
                  <Box sx={styles.strikePrice} component="span">
                    $315.00
                  </Box>
                  <Box sx={styles.offerPrice} component="span">
                    $250.00
                  </Box>
                  
                </Box>
                <Box sx={styles.ratingSection}>
                  <Rating defaultValue={3} name="read-only" readOnly />
                </Box>
                <Box sx={styles.visitWeb}>visit website</Box>
              </Box>
            </Box>
          </ReactSwipe>
          <Box sx={styles.dotContainer}>
            <Box sx={styles.dotNext} onClick={this.handleNext}></Box>
            <Box sx={styles.dotPrev} onClick={this.handleNext}></Box>
            <Box sx={styles.dotNext} onClick={this.handlePrev}></Box>
          </Box>
        </Box>
      </>
    );
  }
}