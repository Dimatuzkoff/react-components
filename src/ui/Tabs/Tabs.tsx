//react
import { FC, useState } from "react";
//libs
import clsx from "clsx";
//ui
import { TabToolIcon } from "./TabToolIcon"
import { TabList } from "./TabList"
//assets
import Arrow from "../../assets/icons/arrow.svg"
//styles
import styles from "./Tabs.module.scss";
//data
import { tabsData } from "./tabsData"

export interface TabsData {
    label: string
}

interface TabProps {
    variant?: "underline" | "underlineFilled",
    isBadge?: boolean,
    isDisabled?: boolean,
    size?: "32" | "36" | "40",
    behavior?: "scrollable" | "arrows" | "dropdown"
}

export const Tabs: FC<TabProps> = ({
    // variant = "underline",
    // isBadge = false,
    // isDisabled = false,
    size = "40",
    // behavior = "scrollable"
}) => {
    const [activeTab, setActiveTab] = useState<string>(tabsData[0].label);

    return (
        <>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.tabsWrapper, {
                    [styles.size32]: size === "32",
                    [styles.size36]: size === "36",
                    [styles.size40]: size === "40"
                })}>
                    <TabToolIcon iconSrc={Arrow} size={size} isRotate />
                    <TabList
                        onTabClick={setActiveTab}
                        size={size}
                        options={tabsData}
                        activeTab={activeTab} />
                    <TabToolIcon iconSrc={Arrow} size={size} />
                </div>
                <div className={clsx(styles.content)}>
                    activeTab {activeTab}
                </div>
            </div>
        </>
    )
};