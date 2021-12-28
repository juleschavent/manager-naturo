import { Box } from "@mui/material";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import { makeStyles } from '@mui/styles';
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles({
    title: {
        marginBottom: 15,
        textAlign: "right",
        fontSize: 32,
        "&:first-letter": {
            textTransform: "uppercase",
        },
    },
    description: {
        lineHeight: 1.8,
    },
});

const CurrentDetails = () => {
    const classes = useStyles()
    const { currDetails } = useContext(StateContext)

    // console.log("curr details", currDetails);
    return (
        <Box ml="50px" textAlign="justify">
            <h2 className={classes.title}>{currDetails.name}</h2>
            <ReactMarkdown className={classes.description}>
                {currDetails.description}
            </ReactMarkdown>
        </Box>
    );
}

export default CurrentDetails;