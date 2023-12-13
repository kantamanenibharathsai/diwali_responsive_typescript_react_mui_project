const styles = {
  parent: {
    backgroundImage:
      "url('https://html.design/demo/diwali/images/slider-1.png')",
    backgrondSize: "cover",
    // border: "3px solid green",
    padding: "10px",
  },

  child: {
    width: { lg: "75%", md: "90%", sm: "90%" },
    margin: "auto",
    // border: "3px solid red",
    paddingTop: "50px",
  },

  title: {
    fontSize: "50px",
    color: "#521407",
    textAlign: "center",
    fontWeight: "800",
    fontFamily: "Abril Fatface",
  },

  child1: {
    display: "flex",
    justifyContent: {
      xs: "space-between",
      sm: "space-evenly",
      md: "space-between",
    },
    alignItems: "flex-start",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    // border: "4px solid green",
    paddingTop: "10px",
  },

  left: {
    width: { lg: "35%", md: "50%" },
    // border: "3px solid pink",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  iconTextContainer: {
    display: "flex",
    // justifyContent: { xs: "space-between", sm: "space-evenly" },
    alignItems: "flex-start",
    // border: "5px solid red",
    gap: "14px",
  },

  iconImg: {
    width: "50px",
    height: "50px",
    bgcolor: "#ffd030",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  textContainer: {
    width: { xs: "80%", md: "40%" },
  },

  add1: {
    fontSize: "21px",
    color: "#521407",
    fontWeight: "800",
    fontfamily: "Abril fatface",
  },

  add2: {
    fontSize: "16px",
    color: "#521407",
    fontWeight: "100",
    fontfamily: "Abril fatface",
  },

  right: {
    width: { sm: "100%", xs: "100%", md: "40%" },
    // border: "2px solid yellow",
    marginTop: { xs: "10px", lg: "0" },

    // marginTop: { xs: "7vw", sm: "4vw", md: "7vw" },
  },

  inprow1: {
    display: "flex",
    justifyContent: "space-between",

    width: { xs: "100%", md: "100%" },
    // border: "2px solid green",
    // alignItems: "center",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
    gap: { xs: "30px", lg: "0px" },
  },
  inputCard: {
    width: { xs: "90%", sm: "90%", md: "45%", lg: "45%" },
    // border: "1px solid blue",
    padding: 0,
    // border: "none",

    outline: "none",
  },

  inp1: {
    padding: "18px 10px",
    // marginLeft: "10px",
    border: "none",
    outline: "none",
    width: { xs: "100%", sm: "100%", md: "85%", lg: "94%" },
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 10px 25px -20px rgba(0,0,0,0.5)",
  },

  name: {
    width: { xs: "100%", sm: "100%", md: "100%", lg: "44%" },
  },

  email: {
    display: { xs: "none", sm: "none", md: "none", lg: "inline" },
  },

  inprow2: {
    marginTop: "20px",
    width: { md: "96.5%", lg: "97.5%" },
    // backgroundColor: "white",
  },

  inp2: {
    padding: "18px 10px",
    border: "none",
    outline: "none",
    width: {xs: "90%", sm: "90%", md: "96.5%", lg: "100%" },
    backgroundColor: "white",
    borderRadius: "5px",
    margin: "auto"
  },

  inp3: {
    padding: "18px 10px",
    border: "none",
    outline: "none",
    backgroundColor: "white",
    borderRadius: "5px",
    height: "80px",
    width: {xs: "90%", sm: "90%", md: "96.5%", lg: "100%" },
  },

  btnContainer: {
    textAlign: "center",
    marginTop: "20px",
    // border: "2px solid red"
  },

  mess: {
    bgcolor: "#ffd030",
    padding: "12px 30px",
    borderRadius: "0 15px 0 15px",
    outline: "none",
    cursor: "pointer",
    fontSize: "12px",
    color: "#521407",
    fontWeight: "600",
    alignSelf: "center",
    "&:hover": { backgroundColor: "#521407", color: "#ffd030" },
  },

  errorMsg: {
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "red",
    fontWeight: "500",
  },
};
export default styles;
