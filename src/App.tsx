import "./App.scss";
import Select from "./ui/Select/Select"
import SearchIcon from "./assets/icons/SearchIcon.svg";

function App() {
    const iconBefore = <img src={SearchIcon} alt="search" />;
    return (
        <>
            <Select placeholder='Select...' isQuiet iconBefore={iconBefore} label="What color do you like?" />
        </>
    )
}

export default App;