//react
import { FC } from "react";
//libs
import clsx from "clsx";
//assets
//styles
import styles from "./Tabs.module.scss";

interface TabProps {
    variant?: "underline" | "underlineFilled",
    isBadge?: boolean,
    isDisabled?: boolean,
    size?: "32" | "36" | "40",
    behavior?: "scrollable" | "arrows" | "dropdown"
}

export const Tabs: FC<TabProps> = ({
    variant = "underline",
    isBadge = false,
    isDisabled = false,
    size = "40",
    behavior = "scrollable"
}) => {
    return (
        <>
            <div className={clsx(styles.tabsWrapper, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40"
            })}>
            </div>
        </>
    )
};