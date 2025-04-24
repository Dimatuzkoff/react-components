import { useEffect, Dispatch, SetStateAction } from "react";
import { getAmountElements } from "../ui/Tabs/getAmountElements";
import { TabsData } from "../ui/Tabs/Tabs";

interface UseTabsVisibilityProps {
    wrapperNavWidth?: number;
    behavior: string;
    options: TabsData[];
    settings: {
        fontSize: number;
        paddingX: number;
        fontFamily?: string;
        fontWeight?: number;
    }
    setVisibleTabs: Dispatch<SetStateAction<TabsData[]>>;
    setDropdownTabs: Dispatch<SetStateAction<TabsData[]>>;
}

export const useTabsVisibility = ({
    wrapperNavWidth,
    behavior,
    options,
    settings,
    setVisibleTabs,
    setDropdownTabs,
}: UseTabsVisibilityProps) => {
    useEffect(() => {
        if (wrapperNavWidth && behavior === "dropdown") {
            const amountTabs = getAmountElements(options, wrapperNavWidth - 100, settings);

            setVisibleTabs(options.slice(0, amountTabs));
            setDropdownTabs(options.slice(amountTabs));
        } else {
            setVisibleTabs(options);
        }
    }, [wrapperNavWidth, options, behavior, setVisibleTabs, setDropdownTabs]);
};