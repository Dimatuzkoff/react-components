export const getCurrentOs = () => {
    const isMac = navigator.userAgent;
    const isWindows = navigator.userAgent.toUpperCase().includes("WIN");
    if (isMac) return "⌘K";
    if (isWindows) return "Ctrl+K";

    return null;
};
