import { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateContext";
import { GET_FILTER_TRAITEMENT } from "../assets/query";
import { useQuery } from "@apollo/client";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { handleChange } from "../assets/hooks";

const Traitement = () => {
    const { currMaladie, currTraitement, setCurrTraitement, setCurrDetails } = useContext(StateContext)

    const { loading, error, data } = useQuery(GET_FILTER_TRAITEMENT, {
        variables: { maladie: currMaladie }
    })

    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>

    const traitementList = data.traitements.data

    // console.log("traitement", traitementList);
    return (
        <Box mt="20px" maxWidth="300px">
            <FormControl fullWidth>
                <InputLabel>Traitement</InputLabel>
                <Select
                    value={currTraitement}
                    label="Traitement"
                    // onChange={(e) => handleChange(e, setCurrTraitement)}
                    onChange={(e) => handleChange(e, setCurrTraitement, setCurrDetails, traitementList)}
                >
                    {traitementList.map((traitement, index) => (
                        <MenuItem key={index} value={traitement.attributes.name}>{traitement.attributes.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Traitement;