import "./App.scss";
import Select from "./ui/Select/Select"
import SearchIcon from "./assets/icons/SearchIcon.svg";

function App() {
    const iconBefore = <img src={SearchIcon} alt="search" />;
    console.log('render app');

    return (
        <>
            <Select size="44" tooltipText="This is a tooltip" placeholder='Select...' isQuiet iconBefore={iconBefore} helperText="This is a helper text" label="What color do you like?" />
        </>
    )
}

export default App;