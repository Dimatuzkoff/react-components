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
    onClick?: (label: string) => void
    option: TabsData,
    size?: string,
    variant?: string,
    isActiveTab: boolean,
    isDisabled?: boolean
}

export const TabItem: FC<TabItemProps> = ({
    onClick,
    option,
    size,
    variant,
    isActiveTab,
    isDisabled
}) => {
    return (
        <>
            <div
                onClick={() => onClick?.(option.label)}
                className={clsx(styles.tabItemWrapper, {
                    [styles.size32]: size === "32",
                    [styles.size36]: size === "36",
                    [styles.size40]: size === "40",
                    [styles.underlineFilled]: variant === "underlineFilled",
                    [styles.active]: isActiveTab,
                    [styles.disabled]: isDisabled
                })}>
                <button type="button" className={clsx(styles.tabItem)}>{option.label}</button>
                {option.badgeCount && (<span className={clsx(styles.tabBadge)}> {option.badgeCount}</span>)}
            </div>
        </>
    )
};