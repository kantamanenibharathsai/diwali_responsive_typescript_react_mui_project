const countdownStyles = {
  mainContainer: {
    backgroundImage:
      "url('https://html.design/demo/diwali/images/bg_counter.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // height: "500px",
    // border: "2px solid red"
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0px"
  },

  responsiveCotainer: {
    width: "70%",
    margin: "auto",
    // border: "2px solid red",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  diwaliComingText: {
    fontFamily: "Abril fatface",
    color: "#ffffff",
    fontSize: "50px",
    fontWeight: "700",
  },

  diwaliCountdownText: {
    fontFamily: "Abril fatface",
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "600",
    letterSpacing: "4px",
  },

  unorderedListCountDown: {
    listStyleType: "none",
    alignItems: "center",
    display: "flex",
    // border: "2px solid red",
    flexWrap: "wrap"
  },
  countdown: {
    display: "inline-block",
    fontSize: "21px",
    listStyleType: "none",
    padding: "30px 0px",
    textAlign: "center",
    color: "#521407",
    background: "#ffd030",
    width: "155px",
    fontWeight: "700",
    height: "50px",
    borderRadius: "0 50px 0 50px",
    marginTop: "30px",
    marginRight: "10px",
    marginLeft: "10px",
  },

  spanEl: {
    display: "block",
    fontSize: "38px",
    lineHeight: "35px",
    fontWeight: "800",
    // border: "2px solid red"
  },
};

export default countdownStyles;
