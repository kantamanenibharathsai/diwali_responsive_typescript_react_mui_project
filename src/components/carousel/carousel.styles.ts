export const styles = {
    carousalContainer: {
      width: "100%",
    //   height: "600px",
      // border: "2px solid red",
    },
    offerText: {
      textAlign: "center",
      // border : '1px solid red',
      margin: "20px",
      fontSize: "60px",
      fontFamily: "Abril Fatface",
      color: "#521407",
    },
  
    carousalBody: {
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection : {xs : "column" , sm : 'column' , md : "row"}
    },
  
    carousalImg: {
      width: "250px",
      height: "250px",
    },
    productHeading: {
      fontSize: "25px",
      fontFamily: "Abril Fatface",
      margin: "8px",
    },
    strikePrice: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#999999",
      textDecoration: "line-through",
    },
    offerPrice: {
      fontSize: "20px",
      color: "#8DC161",
      marginLeft: "6px",
      fontWeight: "600",
    },
    priceSection: {
      // border : '2px solid red',
      marginBottom: "8px",
    },
    ratingSection: {
      marginBottom: "10px",
    },
  
    visitWeb: {
      width: "145px",
      // height : '40px',
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "500",
      padding: " 12px 20px",
      textTransform: "uppercase",
      margin: "auto",
      border: "1px solid grey",
      color: "#000",
      "&:hover": {
        backgroundColor: "black",
        color: "#fff",
      },
    },
    dotContainer : {
      padding : '50px 0px',
      // marginBottom : '50px',
    //   border : '2px solid red',
      display : 'flex',
      justifyContent : 'center'
    },
    dotPrev : {
      width : '20px',
      height : '20px',
      marginRight : '10px',
      background : '#000',
      borderRadius : '100%',
      "&:active" : {
          background : 'orange'
      }
      
  },
  dotNext : {
      width : '20px',
      marginRight : '10px',
      height : '20px',
      background : '#000',
      borderRadius : '100%'
  
    }
  };