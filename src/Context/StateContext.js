import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateContextProvider = ({ children }) => {

    const [currSysteme, setCurrSysteme] = useState("false")
    const [currOrgane, setCurrOrgane] = useState("false")
    const [currMaladie, setCurrMaladie] = useState("false")
    const [currTraitement, setCurrTraitement] = useState("false")

    const [currDetails, setCurrDetails] = useState("false")

    const [currTab, setCurrTab] = useState("parcourir")

    const handleSystemeChange = (event, details) => {
        setCurrSysteme(event.target.value);
        details.forEach(element => {
            element.attributes.name === event.target.value && setCurrDetails(element)
        });
        setCurrOrgane("false")
        setCurrMaladie("false")
        setCurrTraitement("false")
    };

    const handleOrganeChange = (event, details) => {
        setCurrOrgane(event.target.value);
        details.forEach(element => {
            element.attributes.name === event.target.value && setCurrDetails(element)
        });
        setCurrMaladie("false")
        setCurrTraitement("false")
    };

    const handleMaladieChange = (event, details) => {
        setCurrMaladie(event.target.value);
        details.forEach(element => {
            element.attributes.name === event.target.value && setCurrDetails(element)
        });
        setCurrTraitement("false")
    };

    const handleTraitementChange = (event, details) => {
        setCurrTraitement(event.target.value);
        details.forEach(element => {
            element.attributes.name === event.target.value && setCurrDetails(element)
        });
    };

    return (
        <StateContext.Provider value={{
            currTab, setCurrTab,
            currSysteme, setCurrSysteme,
            currOrgane, setCurrOrgane,
            currMaladie, setCurrMaladie,
            currTraitement, setCurrTraitement,
            currDetails, setCurrDetails,
            handleSystemeChange,
            handleOrganeChange,
            handleMaladieChange,
            handleTraitementChange,
        }}>
            {children}
        </StateContext.Provider>
    );
}

export default StateContextProvider;

