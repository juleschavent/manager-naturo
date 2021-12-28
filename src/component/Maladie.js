import { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateContext";
import { GET_FILTER_MALADIE } from "../assets/query";
import { useQuery } from "@apollo/client";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const Maladie = () => {
    const { currOrgane, currMaladie, handleMaladieChange } = useContext(StateContext)

    const { loading, error, data } = useQuery(GET_FILTER_MALADIE, {
        variables: { organe: currOrgane }
    })

    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>

    const maladieList = data.maladies.data

    // console.log("maladie", maladieList);
    return (
        <Box mt="20px" maxWidth="300px">
            <FormControl fullWidth>
                <InputLabel>Maladie</InputLabel>
                <Select
                    value={currMaladie}
                    label="Maladie"
                    onChange={(e) => handleMaladieChange(e, maladieList)}
                >
                    {maladieList.map((maladie, index) => (
                        <MenuItem key={index} value={maladie.attributes.name}>{maladie.attributes.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Maladie;