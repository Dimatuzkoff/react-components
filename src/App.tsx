import "./App.scss";
import { Select } from "./ui/Selects/Select"
import SearchIcon from "./assets/icons/SearchIcon.svg";

function App() {
    console.log('render app');

    const colors = [
        { colorName: "Midnight Blue" },
        { colorName: "Crimson Sky " },
        { colorName: " Electric Lime" },
        { colorName: " Golden Sun" },
        { colorName: "Sapphire Sea " },
        { colorName: " Ruby Rose" }]

    return (
        <>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text"
                iconBefore={SearchIcon}
                dropdownContent={colors} />

        </>
    )
}

export default App;