import "./App.scss";
import Input from "./Input";
import SearchIcon from "./assets/icons/SearchIcon.svg";
import Badge from "./assets/icons/Badge.svg";


function App() {
    const iconBefore = <img src={SearchIcon} alt="search" />;
    const iconBadge = <img src={Badge} alt="badge" />;
    return (
        <>
            <Input placeholder="Input..." disabled={true} iconBefore={iconBefore} type='text' alignment="left" label="Name" iconBadge={iconBadge} helperText="This is a hint text to help user." />
            <Input placeholder="Input..." iconAfter={iconBefore} type='text' error uiType="outline" alignment="right" helperText="This is a hint text to help user." />
            <Input placeholder="Input..." type='text' quiet alignment="right" />
            <Input placeholder="Input..." iconBefore={iconBefore} type='email' label="Email" uiType="outline" quiet tooltipText="This is a tooltip This is a tooltip This is a tooltip This is a tooltip " />
            <Input placeholder="Input..." type='text' alignment="left" label="Name" labelPosition="side" />
        </>
    )
}

export default App;
