//react
import { FC, useState, useEffect } from "react";
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
import { tabsData } from "./tabsData"

interface TabListProps {
    onTabClick: (label: string) => void
    options: TabsData[],
    size?: string,
    behavior: string,
    activeTab?: string,
    wrapperNavWidth?: number
}

export const TabList: FC<TabListProps> = ({
    onTabClick,
    options,
    size,
    behavior,
    activeTab,
    wrapperNavWidth
}) => {
    const [visibleTabs, setVisibleTabs] = useState<TabsData[]>([]);
    const [dropDownTabs, setDropDownTabs] = useState<TabsData[]>([]);

    useEffect(() => {
        if (wrapperNavWidth) {
            const amountTabs = getAmountElements(tabsData, wrapperNavWidth - 20, {
                fontSize: 14,
                paddingX: 8,
                fontFamily: "Inter",
                fontWeight: 600
            });

            console.log("Количество видимых табов:", amountTabs);
            setVisibleTabs(options.slice(0, amountTabs));
            setDropDownTabs(options.slice(amountTabs));
            console.log("dropDownTabs", options.slice(amountTabs));


        }
    }, [wrapperNavWidth, options]);

    return (
        <>
            <nav className={clsx(styles.tabsWrapper, {
                [styles.scrollable]: behavior === "scrollable",
                [styles.dropdown]: behavior === "dropdown",
            })}>
                {visibleTabs?.map((option, index) => (
                    <TabItem key={index} activeTab={activeTab} onClick={() => onTabClick(option.label)}
                        option={option} size={size} />
                ))}
            </nav>
        </>
    )
};