import { Component } from "react";
import styles from "./arrow.styles"
import { Box } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

class Arrow extends Component {



    render() {
        return(
            <Box component="a" href="#arrow" sx={styles.arrowContainer}>
                < KeyboardArrowUpIcon sx={styles.arrowIcon}/>
            </Box>
        )
    }
}

export default Arrow