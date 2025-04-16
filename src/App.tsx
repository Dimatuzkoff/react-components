import "./App.scss";
import { useState } from "react";
import { Select } from "./ui/Selects/Select"
import SearchIcon from "./assets/icons/SearchIcon.svg";
import { optionsData } from "./ui/Selects/optionsData"
import { OptionType } from "./ui/Selects/Select"
import { Tabs } from "./ui/Tabs/Tabs"

function App() {
    console.log('render app');
    const [singleValue, setSingleValue] = useState<OptionType[]>([]);
    const [multiValue, setMultiValue] = useState<OptionType[]>([]);
    console.log(singleValue, multiValue);


    return (
        <>
            <h2>Single select</h2>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                iconBefore={SearchIcon}
                options={optionsData}
                setSelected={setSingleValue}

            />
            <h2>Multiple select</h2>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                options={optionsData}
                mode="multiple"
                size="48"
                setSelected={setMultiValue}
            />
            <h2>scrollable Tabs</h2>
            <div className="tabWrapper" style={{ maxWidth: "700px" }}>
                <Tabs size="36" />
            </div>
            <h2>dropdown Tabs</h2>
            <div className="tabWrapper" style={{ maxWidth: "700px", paddingBottom: "250px" }}>
                <Tabs size="40" behavior="dropdown" />
            </div>
        </>
    )
}

export default App;