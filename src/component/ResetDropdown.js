import { Box } from "@mui/material";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    btn: {
        cursor: "pointer",
        color: "#666",
        transition: "all .2s ease",
        "&:hover": {
            textDecoration: "underline",
            color: "#219ebc",
        },
    },
});

const ResetDropdown = () => {
    const classes = useStyles()
    const { setCurrSysteme, setCurrOrgane, setCurrMaladie, setCurrTraitement, setCurrDetails } = useContext(StateContext)

    const handleReset = () => {
        setCurrSysteme("false")
        setCurrOrgane("false")
        setCurrMaladie("false")
        setCurrTraitement("false")
        setCurrDetails("false")
    }
    return (
        <Box textAlign="right">
            <p className={classes.btn} onClick={() => handleReset()}>Réinitialiser la recherche</p>
        </Box>
    );
}

export default ResetDropdown;