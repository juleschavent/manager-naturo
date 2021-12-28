import { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateContext";
import { GET_FILTER_ORGANES } from "../assets/query";
import { useQuery } from "@apollo/client";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const Organe = () => {
    const { currSysteme, currOrgane, handleOrganeChange } = useContext(StateContext)

    const { loading, error, data } = useQuery(GET_FILTER_ORGANES, {
        variables: { systeme: currSysteme }
    })

    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>

    const organeList = data.organes.data

    // console.log("organe", organeList);
    return (
        <Box mt="20px" maxWidth="300px">
            <FormControl fullWidth>
                <InputLabel>Organe</InputLabel>
                <Select
                    value={currOrgane}
                    label="Organe"
                    onChange={(e) => handleOrganeChange(e, organeList)}
                >
                    {organeList.map((organe, index) => (
                        <MenuItem key={index} value={organe.attributes.name}>{organe.attributes.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Organe;