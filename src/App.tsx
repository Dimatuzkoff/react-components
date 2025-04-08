import "./App.scss";
import { Select } from "./ui/Selects/Select"
// import SearchIcon from "./assets/icons/SearchIcon.svg";

function App() {
    // const iconBefore = <img src={SearchIcon} alt="search" />;
    console.log('render app');

    return (
        <>
            <Select placeholder="Select ..."
                label="What color you like?"
                tooltipText="Tooltip text"
                helperText="Helper text" />

        </>
    )
}

export default App;