//react
import { FC } from "react";
//libs
import clsx from "clsx";
//assets
//styles
import styles from "./TabItem.module.scss";
//types
import { TabsData } from "./Tabs"
interface TabItemProps {
    onClick?: () => void
    option: TabsData,
    size?: string
    activeTab?: string
}

export const TabItem: FC<TabItemProps> = ({
    onClick,
    option,
    size,
    activeTab
}) => {
    return (
        <>
            <div onClick={onClick} className={clsx(styles.tabItemWrapper, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.active]: activeTab === option.label
            })}>
                <button type="button" className={clsx(styles.tabItem)}>{option.label}</button>

            </div>
        </>
    )
};