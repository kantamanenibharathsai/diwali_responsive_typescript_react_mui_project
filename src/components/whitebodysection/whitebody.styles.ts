// import backGroundImg from "."


const style = {
  sectionCon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: { xs: "20%", md: "15%", lg: "0%" },
    backgroundImage: `url(${"https://html.design/demo/diwali/images/fire_work.png"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    position: "relative",
  },
  sectionCardCon: {
    margin: "2%",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: { xs: "center", sm: "flex-start" },
    width: { sm: "90vw", md: "80vw" },
  },
  sectionCardCon2: {
    display: "flex",
    margin: "2%",
    flexDirection: { xs: "column", sm: "row-reverse" },
    justifyContent: { xs: "center", sm: "flex-start" },
    width: { sm: "90vw", md: "80vw" },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: { sm: "center" },
    width: { xs: "80vw", sm: "40vw", md: "40vw" },
  },

  image2: {
    width: "100%",
  },
  contentCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", sm: "flex-start" },
    width: { xs: "80vw", sm: "40vw", md: "40vw" },
    margin: { sm: "4%" },
  },
  wishesHead: {
    fontSize: { xs: "7.5vw", sm: "5.5vw", md: "3.2vw" },
    color: "#521407",
    fontWeight: "950",
  },
  wishesText: {
    alignSelf: { xs: "center", sm: "flex-start" },
    fontSize: { xs: "4.2vw", sm: "2.2vw", lg: "1.2vw" },
    color: "#836d69",
    fontWeight: "400",
    textAlign: { xs: "center", sm: "left" },
    padding: "2%",
  },
  readMore: {
    width: { xs: "90px", sm: "90px", md: "90px", lg: "120px" },

    marginTop: "20px",
    alignSelf: { xs: "center", sm: "flex-start" },
    textAlign: "center",
    color: "#521407",
    fontSize: {xs:"14px", lg:"20px"},
    fontWeight: "900",
    padding: "3%",
    backgroundColor: "#ffd030",
    "&:hover": {
      backgroundColor: "#521407",
      color: "#ffd030"
    },
    borderTopLeftRadius: "0px",

    borderTopRightRadius: "45px",
    borderBottomLeftRadius: "45px",
    borderBottomRightRadius: "0px",
  },
  counterContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "50vh",
  },
  countBgIMg: {
    width: "100%",
    postion: "relative",
  },
};

export default style;
