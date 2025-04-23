import "./App.scss";
import { Tabs } from "./ui/Tabs/Tabs"

function App() {
    console.log('render app');
    return (
        <>
            <h2 style={{ marginBottom: "50px" }}>scrollable Tabs</h2>
            <div className="tabWrapper" style={{ maxWidth: "700px" }}>
                <Tabs size="32" variant="underlineFilled" />
            </div>
            <h2 style={{ marginBottom: "50px" }}>dropdown Tabs</h2>
            <div className="tabWrapper" style={{ maxWidth: "700px" }}>
                <Tabs size="40" behavior="dropdown" />
            </div>
            <h2 style={{ marginBottom: "50px" }}>arrows Tabs</h2>
            <div className="tabWrapper" style={{ maxWidth: "700px" }}>
                <Tabs size="40" behavior="arrows" />
            </div>
        </>
    )
}

export default App;