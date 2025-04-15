//react
import { FC } from "react";
//libs
import clsx from "clsx";
//assets
//styles
import styles from "./TabToolIcon.module.scss";

interface TabToolIconProps {
    iconSrc: string,
    size?: "32" | "36" | "40",
    isRotate?: boolean
}

export const TabToolIcon: FC<TabToolIconProps> = ({
    iconSrc,
    size = "40",
    isRotate
}) => {
    return (
        <>
            <div className={clsx(styles.icon, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.rotate]: isRotate

            })}>
                <img src={iconSrc} alt="icon" />
            </div>
        </>
    )
};