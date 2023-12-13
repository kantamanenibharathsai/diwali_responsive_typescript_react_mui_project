import { Component } from "react";
import countdownStyles from "./countdown.styles";
import { Box, Typography } from "@mui/material";


interface state {
    // timeElapsedInSeconds: number,
    now: number,
}

const countDownDate = new Date("Nov 12, 2023 00:00:00").getTime()
// console.log(countDownDate)
class CountDown extends Component<{}, state> {
    private timerInterval: NodeJS.Timer | null;

    constructor(props: {}) {
        super(props);
        this.state = {
          // timeElapsedInSeconds: 0,
          now : new Date().getTime()
          
        };
        this.timerInterval = null;
      }

      updateTime = () => {
        this.setState({now: new Date().getTime()})
      }
    
      onStartTimer = () => {
        this.timerInterval = setInterval(this.updateTime, 1000)
      }

      componentDidMount() {
        this.onStartTimer()
      }

      componentWillUnmount() {
       // console.log(this.timerInterval)
        if (this.timerInterval) {
        clearInterval(this.timerInterval);
        }
        this.timerInterval = null;
        // console.log(this.timerInterval)
      }

      renderSeconds = (gap: number) => {
        // const {timeElapsedInSeconds} = this.state
        // const seconds = Math.floor(timeElapsedInSeconds % 60)
        const seconds = Math.floor((gap % (1000 * 60)) / 1000)
        if (seconds < 10) {
          return `0${seconds}`
        }
        return `${seconds}`
      }

      renderMinutes = (gap: number) => {
        // const {timeElapsedInSeconds} = this.state
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
        // const displayMins = Math.floor(minutes % 60)
        if (minutes < 10) {
          return `0${minutes}`
        }
        return `${minutes}`
      }

      renderHours = (gap: number) => {
        // const {timeElapsedInSeconds} = this.state
        // const hours = Math.floor(timeElapsedInSeconds / 3600)
        // const displayHours = Math.floor(hours % 24)
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        if (hours < 10) {
          return `0${hours}`
        }
        return `${hours}`
      }

      renderDays = (gap: number) => {
      //   const {timeElapsedInSeconds} = this.state
      //   const days = Math.floor(timeElapsedInSeconds / 86400)
    
      //   if (days < 10) {
      //     return days
      //   }
      //   return days
      // }
      const days = Math.floor(gap / (1000 * 60 * 60 * 24))
      if (days < 10) {
        return `0${days}`
      }
      return `${days}`
    }

  render() {
    const {now} = this.state
    const distance = countDownDate - now
    return (
      <Box sx={countdownStyles.mainContainer}>
        <Box sx={countdownStyles.responsiveCotainer}>
          <Typography component="h1" sx={countdownStyles.diwaliComingText}>
            Diwali is Coming!
          </Typography>
          <Typography component="p" sx={countdownStyles.diwaliCountdownText}>
            Let's countdown to Diwali!
          </Typography>
          <Box component="ul" sx={countdownStyles.unorderedListCountDown}>
            <Typography sx={countdownStyles.countdown} component="li">
              <Typography sx={countdownStyles.spanEl} component="span">
                {this.renderDays(distance)}
              </Typography>
              Days
            </Typography>
            <Typography sx={countdownStyles.countdown} component="li">
              <Typography sx={countdownStyles.spanEl} component="span">
                {this.renderHours(distance)}
              </Typography>
              Hours
            </Typography>
            <Typography sx={countdownStyles.countdown} component="li">
              <Typography sx={countdownStyles.spanEl} component="span">
                {this.renderMinutes(distance)}
              </Typography>
              Minutes
            </Typography>
            <Typography sx={countdownStyles.countdown} component="li">
              <Typography sx={countdownStyles.spanEl} component="span">
                {this.renderSeconds(distance)}
              </Typography>
              Seconds
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default CountDown;
