//react
import { FC, useState, useEffect, Dispatch, SetStateAction } from "react";
//hooks
import { getAmountElements } from "./getAmountElements"
//libs
import clsx from "clsx";
//ui
import { TabItem } from "./TabItem"
//assets
//styles
import styles from "./TabList.module.scss";
//types
import { TabsData } from "./Tabs"

interface TabListProps {
    onClick: (label: string) => void
    setDropdownTabs: Dispatch<SetStateAction<TabsData[]>>;
    options: TabsData[],
    size?: string,
    behavior: string,
    activeTab?: string,
    wrapperNavWidth?: number
}

export const TabList: FC<TabListProps> = ({
    onClick,
    setDropdownTabs,
    options,
    size,
    behavior,
    activeTab,
    wrapperNavWidth
}) => {
    const [visibleTabs, setVisibleTabs] = useState<TabsData[]>(options);

    useEffect(() => {
        if (wrapperNavWidth && behavior === "dropdown") {
            const amountTabs = getAmountElements(options, wrapperNavWidth - 70, {
                fontSize: 14,
                paddingX: 8,
                fontFamily: "Inter",
                fontWeight: 600
            });

            setVisibleTabs(options.slice(0, amountTabs));
            setDropdownTabs(options.slice(amountTabs));
        }
        else {
            setVisibleTabs(options);
        }
    }, [wrapperNavWidth, options, behavior]);

    return (
        <>
            <nav className={clsx(styles.tabsWrapper, {
                [styles.scrollable]: behavior === "scrollable",
                [styles.dropdown]: behavior === "dropdown",
            })}>
                {visibleTabs?.map((option, index) => (
                    <TabItem key={index} activeTab={activeTab} onClick={onClick}
                        option={option} size={size} />
                ))}
            </nav>
        </>
    )
};