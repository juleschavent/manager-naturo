import { Box } from "@mui/material";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    btn: {
        cursor: "pointer",
        color: "#666",
        "&:hover": {
            textDecoration: "underline",
        },
    },
});

const ResetDropdown = () => {
    const classes = useStyles()
    const { setCurrSysteme, setCurrOrgane, setCurrMaladie, setCurrTraitement } = useContext(StateContext)

    const handleReset = () => {
        setCurrSysteme("false")
        setCurrOrgane("false")
        setCurrMaladie("false")
        setCurrTraitement("false")
    }
    return (
        <Box textAlign="right" mt="10px">
            <p className={classes.btn} onClick={() => handleReset()}>Réinitialiser la recherche</p>
        </Box>
    );
}

export default ResetDropdown;