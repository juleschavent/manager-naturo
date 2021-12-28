import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateContextProvider = ({ children }) => {

    const [currSysteme, setCurrSysteme] = useState("false")
    const [currOrgane, setCurrOrgane] = useState("false")
    const [currMaladie, setCurrMaladie] = useState("false")
    const [currTraitement, setCurrTraitement] = useState("false")

    const [currDetails, setCurrDetails] = useState()

    const handleSystemeChange = (event, details) => {
        setCurrSysteme(event.target.value);
        details.forEach(element => {
            element.attributes.name === event.target.value && setCurrDetails(element.attributes)
        });
        setCurrOrgane("false")
        setCurrMaladie("false")
        setCurrTraitement("false")
    };

    const handleOrganeChange = (event, details) => {
        setCurrOrgane(event.target.value);
        details.forEach(element => {
            element.attributes.name === event.target.value && setCurrDetails(element.attributes)
        });
        setCurrMaladie("false")
        setCurrTraitement("false")
    };

    const handleMaladieChange = (event, details) => {
        setCurrMaladie(event.target.value);
        details.forEach(element => {
            element.attributes.name === event.target.value && setCurrDetails(element.attributes)
        });
        setCurrTraitement("false")
    };


    return (
        <StateContext.Provider value={{
            currSysteme, setCurrSysteme,
            currOrgane, setCurrOrgane,
            currMaladie, setCurrMaladie,
            currTraitement, setCurrTraitement,
            currDetails, setCurrDetails,
            handleSystemeChange,
            handleOrganeChange,
            handleMaladieChange,
        }}>
            {children}
        </StateContext.Provider>
    );
}

export default StateContextProvider;

