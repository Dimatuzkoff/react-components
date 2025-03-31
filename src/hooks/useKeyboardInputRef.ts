import { useEffect, useRef } from "react";

export const useKeyboardInputRef = (nameButton: string, callback?: () => void) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (!nameButton) return

        const handleKeyDown = (event: KeyboardEvent) => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isMac = userAgent.includes("mac");
            const isWindows = userAgent.includes("win");

            if (
                (isMac && event.metaKey && event.key.toLowerCase() === nameButton.toLowerCase()) ||
                (isWindows && event.ctrlKey && event.key.toLowerCase() === nameButton.toLowerCase())
            ) {
                event.preventDefault();
                if (callback) callback();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return inputRef;
};
