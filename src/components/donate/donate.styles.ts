const donateStyles = {
  mainContainer: {
    backgroundImage:
      "url('https://html.design/demo/diwali/images/donate_bg.png')",
    // backgroundSize: "cover",
    // height: "500px",
    marginTop: "70px",
    backgroundAttachment: "fixed",
    // backgroundPosition: "center top",
    padding: "70px 0px 70px",
    boxSizing: "border-box",
  },

  titleBox: {
    fontSize: {xs: "40px", lg: "75px"},
    color: "#fff",
    fontWeight: "normal",
    padding: "0",
    letterSpacing: "0",
    lineHeight: "75px",
    marginBottom: "50px",
    boxSizing: "border-box",
    textAlign: "center",
    fontFamily: "Abril fatface",
  },

  respContainer: {
    display: "flex",
    flexDirection: {xs: "column", lg: "row"},
    alignitems: "center",
    justifyContent: "center",
    margin: "auto",
    // border: "4px solid red",
    // textAlign: "center"
  },

  image: {
    // width: "%",
    height: {xs: "280px", sm: "310px", md: "350px", lg:"400px"},
    width: {xs: "280px", sm: "310px", md: "350px", lg:"400px"},
    margin: "auto"
    // border: "5px solid black"
  },

  allContentparentcontainer : {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: {xs: "90%", lg:"50%"},
    margin: "auto"

  },

  contentContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: "30px"
  },

  imgContentContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: "30px",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
  },

  heading: {
    color: "#fff",
    fontSize: {xs:"23px", lg: "32px"},
    fontWeight: "700",
    paddingBottom: "0",
    fontFamily: "Abril fatface"
  },

  paragraph: {
    color: "#fff",
    fontSize: {xs:"16px", lg: "18px"},
    fontWeight: "normal",
    paddingBottom: "0",
  },
};

export default donateStyles;
