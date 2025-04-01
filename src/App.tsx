import "./App.scss";
import Input from "./ui/Inputs/Input";
import AvatarWithInfo from "./ui/Avatars/AvatarWithInfo";
import SearchIcon from "./assets/icons/SearchIcon.svg";
import girl from "./assets/img/girl.png"
import Avatar from "./ui/Avatars/Avatar"
function App() {
    const iconBefore = <img src={SearchIcon} alt="search" />;
    const avatar = <img src={girl} alt="avatar" />
    console.log('rendering App');

    return (
        <>
            <Input placeholder="Input..." iconBefore={iconBefore} type='text' alignment="left" label="Name" isBadge helperText="This is a hint text to help user." />
            <Input placeholder="Input..." iconAfter={iconBefore} type='text' isError uiType="outline" alignment="right" helperText="This is a hint text to help user." />
            <Input placeholder="Input..." isDisabled={true} type='text' isQuiet alignment="right" />
            <Input placeholder="Input..." iconBefore={iconBefore} type='email' label="Email" uiType="outline" isQuiet tooltipText="This is a tooltip This is a tooltip This is a tooltip This is a tooltip " />
            <Input placeholder="Input..." type='text' alignment="left" label="Name" labelPosition="side" />
            <br />
            <Avatar image={avatar} isOnlineIndicator ></Avatar>
            <br />
            <Avatar />
            <br />
            <AvatarWithInfo image={avatar} size="24" isOnlineIndicator />
            <br />
            <AvatarWithInfo isOnlineIndicator heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />
            <br />
            <AvatarWithInfo image={avatar} isOnlineIndicator heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />
            <br />
            <AvatarWithInfo image={avatar} isOnlineIndicator isBorder background="primary" heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />
            <br />
            <AvatarWithInfo isOnlineIndicator size="32" background="secondary" heading="Nicola Harris" paragraph="nicolaharris@rubikui.com" />

        </>
    )
}

export default App;
