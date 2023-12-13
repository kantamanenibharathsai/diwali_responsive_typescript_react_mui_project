import backGroundImg from "../assets/bg_diwali.png";

const bannerStyles = {
  bannerContainer: {
    height: { lg: "960px" },
    width: "100%",
    backgroundImage: { lg: `url(${backGroundImg})` },
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // position: "relative",
    // border: "4px solid red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: { xs: "none", lg: "flex" },
  },

  happyDiwaliLargeImage: {
    width: { lg: "720px" },
    height: "300px",
    verticalAlign: "middle",
  },

  bannerSmallContainer: {
    width: "100%",
    // border: "4px solid red",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    display: { xs: "flex", lg: "none" },
  },

  bannerSmallImage: {
    width: '100%',
    verticalAlign: "middle",
  },

  happyDiwaliSmallImage: {
    width: {xs: "180px", sm: "290px", md: "450px"}
  }
};

export default bannerStyles;
