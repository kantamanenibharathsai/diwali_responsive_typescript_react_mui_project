import React, { Component } from "react";
import navigationBarStyle from "./navigationbar.styles";
import { Box, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import diwaliLogo from "../assets/diwali-logo.png";

interface state {
  isHamburgerIconClicked: boolean;
  isHomeBtnClicked: boolean;
  isWishesBtnClicked: boolean;
  isDealsBtnClicked: boolean;
  isDonateGiftBtnClicked: boolean;
  isContactBtnClicked: boolean;
}

class NavigationBar extends Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isHamburgerIconClicked: false,
      isHomeBtnClicked: false,
      isWishesBtnClicked: false,
      isDealsBtnClicked: false,
      isDonateGiftBtnClicked: false,
      isContactBtnClicked: false,
    };
  }

  hamburgerIconEventHandler = () => {
    this.setState((prevState) => ({
      isHamburgerIconClicked: !prevState.isHamburgerIconClicked,
    }));
  };

  homeBtnEventhandler = () => {
    this.setState({
      isHomeBtnClicked: true,
      isWishesBtnClicked: false,
      isDealsBtnClicked: false,
      isDonateGiftBtnClicked: false,
      isContactBtnClicked: false,
    });
  };

  wishesBtnEventhandler = () => {
    this.setState({
      isHomeBtnClicked: false,
      isWishesBtnClicked: true,
      isDealsBtnClicked: false,
      isDonateGiftBtnClicked: false,
      isContactBtnClicked: false,
    });
  };

  dealsBtnEventhandler = () => {
    this.setState({
      isHomeBtnClicked: false,
      isWishesBtnClicked: false,
      isDealsBtnClicked: true,
      isDonateGiftBtnClicked: false,
      isContactBtnClicked: false,
    });
  };

  donateBtnEventhandler = () => {
    this.setState({
      isHomeBtnClicked: false,
      isWishesBtnClicked: false,
      isDealsBtnClicked: false,
      isDonateGiftBtnClicked: true,
      isContactBtnClicked: false,
    });
  };

  contactBtnEventhandler = () => {
    this.setState({
      isHomeBtnClicked: false,
      isWishesBtnClicked: false,
      isDealsBtnClicked: false,
      isDonateGiftBtnClicked: false,
      isContactBtnClicked: true,
    });
  };

  render() {
    const {
      isHamburgerIconClicked,
      isContactBtnClicked,
      isDealsBtnClicked,
      isDonateGiftBtnClicked,
      isHomeBtnClicked,
      isWishesBtnClicked,
    } = this.state;
    return (
      <>
        <Box sx={navigationBarStyle.navigationBarParentContainer}>
          <Box sx={navigationBarStyle.navigationBarChildContainer}>
            <Box sx={navigationBarStyle.imageContainer}>
              <Box
                component="img"
                src={diwaliLogo}
                alt="logo"
                sx={navigationBarStyle.logoImg}
              />
            </Box>
            <Box component="div" sx={navigationBarStyle.rightContainer}>
              <Box component="ul" sx={navigationBarStyle.unorderList}>
                <List
                  component="button"
                  sx={{
                     ...navigationBarStyle.listItem,
                    backgroundColor: isHomeBtnClicked
                      ? "#ffd030"
                      : "transparent",
                  }}
                  onClick={this.homeBtnEventhandler}
                >
                  Home
                </List>
                <List
                  component="button"
                  sx={{
                    ...navigationBarStyle.listItem,
                    backgroundColor: isWishesBtnClicked
                      ? "#ffd030"
                      : "transparent",
                  }}
                  onClick={this.wishesBtnEventhandler}
                >
                  Wishes
                </List>
                <List
                  component="button"
                  sx={{
                    ...navigationBarStyle.listItem,
                    backgroundColor: isDealsBtnClicked
                      ? "#ffd030"
                      : "transparent",
                  }}
                  onClick={this.dealsBtnEventhandler}
                >
                  Best Deals
                </List>
                <List
                  component="button"
                  sx={{
                    ...navigationBarStyle.listItem,
                    backgroundColor: isDonateGiftBtnClicked
                      ? "#ffd030"
                      : "transparent",
                  }}
                  onClick={this.donateBtnEventhandler}
                >
                  Donate & Gift
                </List>
                <List
                  component="button"
                  sx={{
                    ...navigationBarStyle.listItem,
                    backgroundColor: isContactBtnClicked
                      ? "#ffd030"
                      : "transparent",
                  }}
                  onClick={this.contactBtnEventhandler}
                >
                  Contact
                </List>
              </Box>
              <Box sx={navigationBarStyle.menuContainer}>
                <MenuIcon onClick={this.hamburgerIconEventHandler} />
              </Box>
            </Box>
          </Box>
        </Box>
        {isHamburgerIconClicked && (
          <Box sx={navigationBarStyle.menuContentParentContainer}>
            <Box sx={navigationBarStyle.menuContentChildContainer}>
              <List sx={navigationBarStyle.listItem}>Home</List>
              <List sx={navigationBarStyle.listItem}>Wishes</List>
              <List sx={navigationBarStyle.listItem}>Best Deals</List>
              <List sx={navigationBarStyle.listItem}>Donate & Gift</List>
              <List sx={navigationBarStyle.listItem}>Contact</List>
            </Box>
          </Box>
        )}
      </>
    );
  }
}
export default NavigationBar;
