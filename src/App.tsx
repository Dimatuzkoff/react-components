import "./App.scss";
import { Select } from "./ui/Selects/Select"
import SearchIcon from "./assets/icons/SearchIcon.svg";

function App() {
    console.log('render app');

    const colors = [
        { value: "Midnight Blue" },
        { value: "Crimson Sky " },
        { value: " Electric Lime" },
        { value: " Golden Sun" },
        { value: "Sapphire Sea " },
        { value: " Ruby Rose" }]

    return (
        <>
            <h2>Single select</h2>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                iconBefore={SearchIcon}
                dropdownContent={colors} />
            <h2>Multiple select</h2>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                dropdownContent={colors}
                mode="multiple"
                size="48" />
        </>
    )
}

export default App;