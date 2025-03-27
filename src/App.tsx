import "./App.scss";
import Input from "./Input";
import Avatar from "./Avatar";
import SearchIcon from "./assets/icons/SearchIcon.svg";
import Badge from "./assets/icons/Badge.svg";
import girl from "./assets/img/girl.png"

function App() {
    const iconBefore = <img src={SearchIcon} alt="search" />;
    const iconBadge = <img src={Badge} alt="badge" />;
    const avatar = <img src={girl} alt="avatar" />
    return (
        <>
            <Input placeholder="Input..." disabled={true} iconBefore={iconBefore} type='text' alignment="left" label="Name" iconBadge={iconBadge} helperText="This is a hint text to help user." />
            <Input placeholder="Input..." iconAfter={iconBefore} type='text' error uiType="outline" alignment="right" helperText="This is a hint text to help user." />
            <Input placeholder="Input..." type='text' quiet alignment="right" />
            <Input placeholder="Input..." iconBefore={iconBefore} type='email' label="Email" uiType="outline" quiet tooltipText="This is a tooltip This is a tooltip This is a tooltip This is a tooltip " />
            <Input placeholder="Input..." type='text' alignment="left" label="Name" labelPosition="side" />
            <h2>avatar</h2>
            <Avatar image={avatar} indicator background="primary" heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />

        </>
    )
}

export default App;
