import "./App.scss";
import { useState } from "react";
import { Select } from "./ui/Selects/Select"
import SearchIcon from "./assets/icons/SearchIcon.svg";
import { optionsData } from "./ui/Selects/optionsData"

function App() {
    console.log('render app');
    const [singleValue, setSingleValue] = useState(null);
    const [multiValue, setMultiValue] = useState([]);

    return (
        <>
            <h2>Single select</h2>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                iconBefore={SearchIcon}
                options={optionsData}
                onChange={setSingleValue}
            />
            <h2>Multiple select</h2>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                options={optionsData}
                mode="multiple"
                size="48"
                onChange={setMultiValue}

            />
        </>
    )
}

export default App;