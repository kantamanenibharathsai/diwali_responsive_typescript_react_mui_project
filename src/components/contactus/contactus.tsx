import { Component, ChangeEvent, ChangeEventHandler, FocusEvent, FormEvent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./contactus.styles";
import NearMeIcon from "@mui/icons-material/NearMe";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";


interface state {
  formData: {
    name: string;
    email: string;
    number: number | string;
    message: string;
    isnameFocused: boolean;
    isemailFocused: boolean;
    isnumberFocused: boolean;
    ismessageFocused: boolean;
    buttonError : string
  };
}
class Contactus extends Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        number: "",
        message: "",
        isnameFocused: false,
        isemailFocused: false,
        isnumberFocused: false,
        ismessageFocused: false,
        buttonError : ""
      },
    };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
        [`is${name}Focused`]: false,
      },
    }));
    if (value === "") {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [`is${name}Focused`]: true,
        },
      }));
    }
  };

  handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log("blurInput", value);
    if (value === "") {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [`is${name}Focused`]: true,
        },
      }));
    } else {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [`is${name}Focused`]: false,
        },
      }));
    }
  };

  handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        message: value,
        [`is${name}Focused`]: false,
      },
    }));
    if (value === "") {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [`is${name}Focused`]: true,
        },
      }));
    }
  };

  handleTextareaBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (value === "") {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [`is${name}Focused`]: true,
        },
      }));
    } else {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [`is${name}Focused`]: false,
        },
      }));
    }
  };

  onSubmitEventhandler = (e : FormEvent) => {
    e.preventDefault()
    const {formData} = this.state
    const {name, email, message, number} = this.state.formData
    if (name === "" || email === "" || message === "" || number === "") {
        this.setState({formData : {...formData, buttonError : "Did you fill in the form properly?"}})
    }
    else {
      this.setState({formData : {...formData, buttonError : "form submitted successfully"}})
    }
  }

  render() {
    const {
      name,
      email,
      message,
      number,
      isemailFocused,
      ismessageFocused,
      isnumberFocused,
      isnameFocused,
      buttonError
    } = this.state.formData;

    return (
      <Box sx={styles.parent}>
        <Box sx={styles.child}>
          <Typography sx={styles.title}>Contact us</Typography>
          <Box sx={styles.child1}>
            <Box sx={styles.left}>
              <Box sx={styles.iconTextContainer}>
                <Typography sx={styles.iconImg}>
                  <NearMeIcon />
                </Typography>
                <Box sx={styles.textContainer}>
                  <Typography sx={styles.add1}>Address</Typography>
                  <Typography sx={styles.add2}>
                    Fleming 196 Woodside Circle, FL 36602
                  </Typography>
                </Box>
              </Box>
              <Box sx={styles.iconTextContainer}>
                <Typography sx={styles.iconImg}>
                  <EmailIcon />
                </Typography>
                <Box sx={styles.textContainer}>
                  <Typography sx={styles.add1}>Email</Typography>
                  <Typography sx={styles.add2}>demoinfo@gmail.com</Typography>
                </Box>
              </Box>
              <Box sx={styles.iconTextContainer}>
                <Typography sx={styles.iconImg}>
                  <PhoneIcon />
                </Typography>
                <Box sx={styles.textContainer}>
                  <Typography sx={styles.add1}>Phone Number</Typography>
                  <Typography sx={styles.add2}>+91 12345 67890</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.right} component="form" onSubmit={this.onSubmitEventhandler}>
              <Box sx={styles.inprow1}>
                <Box sx={styles.inputCard}>
                  <Box
                    sx={styles.inp1}
                    component="input"
                    placeholder="Your name"
                    onChange={this.handleInputChange}
                    value={name}
                    name="name"
                    onBlur={this.handleInputBlur}
                    type="text"
                  />

                  {isnameFocused && (
                    <Typography component="p" sx={styles.errorMsg}>
                      Please enter your name
                    </Typography>
                  )}
                </Box>
                <Box sx={styles.inputCard}>
                  <Box
                    sx={styles.inp1}
                    component="input"
                    placeholder="Your Email"
                    onChange={this.handleInputChange}
                    value={email}
                    name="email"
                    onBlur={this.handleInputBlur}
                    type="email"
                  />
                  {isemailFocused && (
                    <Typography component="p" sx={styles.errorMsg}>
                      Please enter your email
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box sx={styles.inprow2}>
                <Box
                  component="input"
                  sx={styles.inp2}
                  placeholder="Your number"
                  onChange={this.handleInputChange}
                  value={number}
                  name="number"
                  onBlur={this.handleInputBlur}
                  type="number"
                />
                {isnumberFocused && (
                  <Typography component="p" sx={styles.errorMsg}>
                    Please enter your number
                  </Typography>
                )}
              </Box>
              <Box sx={styles.inprow2}>
                <Box
                  component="textarea"
                  sx={styles.inp3}
                  placeholder="Your message"
                  onChange={this.handleTextareaChange}
                  value={message}
                  name="message"
                  onBlur={this.handleTextareaBlur}
                 
                />
                {ismessageFocused && (
                  <Typography component="p" sx={styles.errorMsg}>
                    Write your message
                  </Typography>
                )}
              </Box>
              <Box sx={styles.btnContainer}>
                <Button sx={styles.mess} variant="contained" type="submit">
                  Send Message
                </Button>
                {buttonError && (<Typography component="p" sx={styles.errorMsg}>
                    {buttonError}
                  </Typography>)}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Contactus;
