import "./App.scss";
import { useState } from "react";
import { OptionType } from "./ui/Selects/Select"
import { Tabs } from "./ui/Tabs/Tabs"

function App() {
    console.log('render app');
    const [singleValue, setSingleValue] = useState<OptionType[]>([]);
    const [multiValue, setMultiValue] = useState<OptionType[]>([]);
    console.log(singleValue, multiValue);


    return (
        <>
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