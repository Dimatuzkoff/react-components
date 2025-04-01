import clsx from "clsx";
import { ReactNode, FC } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    image?: ReactNode;
    isOnlineIndicator?: boolean;
    size?: "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "56";
}

const Avatar: FC<AvatarProps> = ({
    image,
    isOnlineIndicator = false,
    size = "40",
}) => {
    return (
        <>
            <div className={clsx(styles.containerImg, {
                [styles.image]: image,
                [styles.empty]: !image,
                [styles.size16]: size === "16",
                [styles.size24]: size === "24",
                [styles.size28]: size === "28",
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
                [styles.size56]: size === "56",
            })}>
                {image || (<span >OR</span>)}
                {isOnlineIndicator && (<div className={clsx(styles.indicator)}></div>)}
            </div>
        </>
    )
}

export default Avatar;