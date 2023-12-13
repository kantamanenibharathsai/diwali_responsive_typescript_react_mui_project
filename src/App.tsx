import React from "react";
// import Home from "./components/home/home"
import NavigationBar from "./components/navigation_bar/navigationbar";
import Banner from "./components/banner/banner";
import WhiteBodySection from "./components/whitebodysection/whitebody";
import CountDown from "./components/countdown/countdown";
import { Box } from "@mui/material";
import "./App.css";
import Carousal from "./components/carousel/carousel";
import Donate from "./components/donate/donate";
import Contactus from "./components/contactus/contactus";
import Footer from "./components/footer/footer";
import Arrow from "./components/arrow/arrow";

interface state {
  isLoadingDisplayed: boolean;
}

class App extends React.Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoadingDisplayed: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoadingDisplayed: false });
    }, 1500);
  }

  render() {
    return this.state.isLoadingDisplayed ? (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{ height: "100vh", width: "100%" }}
          src="https://html.design/demo/diwali/images/loading_img.gif"
          alt=""
        />
      </Box>
    ) : (
      <>
      <Box id="arrow"></Box>
        <NavigationBar />
        <Banner />
        <WhiteBodySection />
        <CountDown />
        <Carousal />
        <Donate />
        <Contactus/>
        <Footer/>
        <Arrow/>
      </>
    );
  }
}

export default App;
