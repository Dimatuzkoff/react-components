import "./App.scss";
import { useState } from "react";
import { Select } from "./ui/Selects/Select"
import SearchIcon from "./assets/icons/SearchIcon.svg";
import { optionsData } from "./ui/Selects/optionsData"

function App() {
    console.log('render app');
    const getSingleSelectValue = (value: string[]) => {
        console.log("Single", value);
        return value
    };

    const getMultipleSelectValue = (value: string[]) => {
        console.log("Multiple", value);
        return value
    };
    return (
        <>
            <h2>Single select</h2>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                iconBefore={SearchIcon}
                options={optionsData}
                changeValue={getSingleSelectValue} />
            <h2>Multiple select</h2>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                options={optionsData}
                mode="multiple"
                size="48"
                changeValue={getMultipleSelectValue} />
        </>
    )
}

export default App;