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
            <Input placeholder="Input..." isDisabled={true} iconBefore={iconBefore} type='text' alignment="left" label="Name" iconBadge={iconBadge} helperText="This is a hint text to help user." />
            <Input placeholder="Input..." iconAfter={iconBefore} type='text' isError uiType="outline" alignment="right" helperText="This is a hint text to help user." />
            <Input placeholder="Input..." type='text' isQuiet alignment="right" />
            <Input placeholder="Input..." iconBefore={iconBefore} type='email' label="Email" uiType="outline" isQuiet tooltipText="This is a tooltip This is a tooltip This is a tooltip This is a tooltip " />
            <Input placeholder="Input..." type='text' alignment="left" label="Name" labelPosition="side" />
            <br />
            <Avatar />
            <br />
            <Avatar image={avatar} indicator />
            <br />
            <Avatar indicator heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />
            <br />
            <Avatar image={avatar} indicator heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />
            <br />
            <Avatar image={avatar} indicator size="56" background="primary" heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />
            <br />
            <Avatar image={avatar} indicator size="56" background="secondary" heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />

        </>
    )
}

export default App;
