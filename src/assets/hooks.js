import { useContext } from "react";
import { StateContext } from "../Context/StateContext";

export const handleChange = (event, value, setDetails, details) => {
    value(event.target.value);
    details.forEach(element => {
        element.attributes.name === event.target.value && setDetails(element.attributes)
    });

};

export const HandleSystemeChange = (event, setDetails, details) => {
    const { setCurrOrgane, setCurrMaladie, setCurrTraitement, setCurrSysteme } = useContext(StateContext)
    setCurrSysteme(event.target.value);
    details.forEach(element => {
        element.attributes.name === event.target.value && setDetails(element.attributes)
    });
    // setCurrOrgane(undefined)
    // setCurrMaladie(undefined)
    // setCurrTraitement(undefined)
};
