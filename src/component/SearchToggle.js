import React, { createContext, useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { StateContext } from "../Context/StateContext";

const useStyles = makeStyles({
    container: {
        textAlign: "center",
        width: 150,
        padding: "5px 0",
        cursor: "pointer",
        fontSize: 20,
        "&:first-child": {
            borderRadius: "5px 0 0 5px",
        },
        "&:last-child": {
            borderRadius: "0 5px 5px 0",
        },
    },
    active: {
        backgroundColor: "#219ebc",
        color: "white !important",
    },
    inactive: {
        color: "#219ebc",
        transition: "all .1s ease",
        border: "1px solid #219ebc",
        "&:hover": {
            color: "#219ebc",
        },
    },
});

const SearchToggle = () => {
    const { currTab, setCurrTab } = useContext(StateContext)
    const classes = useStyles()

    return (
        <Box display="flex" justifyContent="space-between" maxWidth="fit-content" mx="auto" mb="70px" overflow="hidden">
            <h2 className={currTab === "parcourir" ? classes.active + " " + classes.container : classes.inactive + " " + classes.container} onClick={() => setCurrTab("parcourir")}>
                Parcourir
            </h2>
            <h2 className={currTab === "search" ? classes.active + " " + classes.container : classes.inactive + " " + classes.container} onClick={() => setCurrTab("search")}>
                Rechercher
            </h2>
        </Box>
    );
}

export default SearchToggle;