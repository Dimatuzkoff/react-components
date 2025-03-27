import { useEffect, useRef } from "react";

export const keyboardShortcutInputRef = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isMac = userAgent.includes("mac");
            const isWindows = userAgent.includes("win");

            if (
                (isMac && event.metaKey && event.key.toLowerCase() === "k") ||
                (isWindows && event.ctrlKey && event.key.toLowerCase() === "k")
            ) {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return inputRef;
};
