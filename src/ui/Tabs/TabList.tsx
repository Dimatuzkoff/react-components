//react
import { FC, } from "react";
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
    onTabClick: (label: string) => void
    options: TabsData[],
    size?: string
    activeTab?: string
}

export const TabList: FC<TabListProps> = ({
    onTabClick,
    options,
    size,
    activeTab
}) => {

    return (
        <>
            <nav className={clsx(styles.tabsWrapper, {


            })}>
                {options.map((option, index) => (
                    <TabItem key={index} activeTab={activeTab} onClick={() => onTabClick(option.label)}
                        option={option} size={size} />
                ))}
            </nav>
        </>
    )
};