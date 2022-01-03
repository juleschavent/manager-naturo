import { Box } from "@mui/material";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import { makeStyles } from '@mui/styles';
import ReactMarkdown from 'react-markdown'
import { Edit } from "../assets/icons";

const useStyles = makeStyles({
    title: {
        marginLeft: 10,
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
            <Box display="flex" alignItems="center" justifyContent="end" mb="30px">
                <Edit id={currDetails.id} collection={currDetails.attributes.__typename.toLowerCase()} />
                <h2 className={classes.title}>{currDetails.attributes.name}</h2>
            </Box>
            <ReactMarkdown className={classes.description}>
                {currDetails.attributes.description}
            </ReactMarkdown>
        </Box>
    );
}

export default CurrentDetails;