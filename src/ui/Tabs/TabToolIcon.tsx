//react
import { FC } from "react";
//libs
import clsx from "clsx";
//assets
import Arrow from "../../assets/icons/arrow.svg"
import OpenTabsDropdownIcon from "../../assets/icons/OpenTabsDropdownIcon.svg"
//styles
import styles from "./TabToolIcon.module.scss";

interface TabToolIconProps {
    onClick?: (position: "left" | "right") => void
    behavior?: "scrollable" | "arrows" | "dropdown"
    size?: "32" | "36" | "40",
    isRotate?: boolean
    position: "left" | "right"

}

export const TabToolIcon: FC<TabToolIconProps> = ({
    onClick,
    size = "40",
    behavior,
    isRotate,
    position
}) => {
    const src = behavior === "arrows" ? Arrow : behavior === "dropdown" ? OpenTabsDropdownIcon : ""
    return (
        <>
            {((behavior === "arrows" && position === "left") ||
                (behavior === "arrows" && position === "right") ||
                (behavior === "dropdown" && position === "right"))
                && <div onClick={() => onClick?.(position)} className={clsx(styles.icon, {
                    [styles.size32]: size === "32",
                    [styles.size36]: size === "36",
                    [styles.size40]: size === "40",
                    [styles.rotate]: isRotate

                })}>
                    <img src={src} alt="icon" />
                </div>}
        </>
    )
};