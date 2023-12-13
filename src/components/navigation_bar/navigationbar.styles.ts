const navigationBarStyle = {
    navigationBarParentContainer: {
        // padding: { xs: "10px", md: "20px" },
        background: "rgb(255, 255, 225, 10)",
        boxShadow: "0 0 30px -10px #000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        // border: "2px solid red",
        height: "70px"
      },

      navigationBarChildContainer: {
        display: "flex",
        justifyContent: { xs: "space-between", md: "space-around" },
        alignItems: "center",
        width: { xs: "90%", md: "100%"},
        // border: "2px solid orange",
        height: "70px"
      },

      imageContainer: {
        width: "25%",
        display: "flex",
        justifyContent: { xs: "flex-start", md: "flex-end" },
        // border: "2px solid blue",
      },

      logoImg: {
        height: "50px",
        width: "80px",
      },

      rightContainer: {
        display: "flex",
        justifyContent: {xs: "flex-end", md:"center"},
        alignItems: "center",
        // border: "2px solid pink",
        width: "75%"
      },

      unorderList: {
        justifyContent: "center",
        alignItems: "center",
        // flexGrow: "1",
        width: "75%",
        // border: "2px solid green",
        display: { xs: "none", md: "flex" },
      },

      listItem: {
        background: "#FFFFE1",
        borderRadius: "0 135px",
        textTransform: "capitalize",
        fontSize: "14px",
        padding: "10px 25px",
        // position: relative;
        fontWeight: "600",
        overflow: "hidden",
        color: "#521407",
        fontFamily: "raleway",
        outline: "none",
        border: "none",
        "&:hover": { backgroundColor: "#FFD030" },
      },
      
      menuContainer: {
        padding: "5px",
        border: "2px solid red",
        color: "red",
        display: { xs: "block", md: "none" },
        cursor: "pointer",
        transition: '4s'
        // marginLeft: { xs: "20px" },
      },
      menuContentParentContainer: {
        width: "100%",
        marginTop: "0px",
        // position: "relative",
        // top: "0px",
        // left: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        background: "rgb(255, 255, 225, 10)",
        boxShadow: "0 0 30px -10px #000",
        // border: "2px solid green",
        // height: "200px",
        // trasformOrigin: "top center 0px",
        // transform: "translateY(200px)",
        // transition: 'transform 0.5s ease-in-out',

      },

      menuContentChildContainer: {
        width: "70%",
        // border: "2px solid green",
      },

      menuIcon: {
        "&:hover": {
          background: "#ffd030;",
          textAlign: "start",
        },
      },
}

export default navigationBarStyle