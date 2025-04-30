//react
import { ReactNode, FC } from "react";
//libs
import clsx from "clsx";
//styles
import styles from "./Avatar.module.scss";

interface AvatarProps {
    image?: ReactNode;
    initials?: string;
    isOnlineIndicator?: boolean;
    size?: "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "56";
    isFocusOnParent?: boolean;
}

const Avatar: FC<AvatarProps> = ({
    image,
    initials,
    isOnlineIndicator = false,
    size = "40",
    isFocusOnParent = false,
}) => {
    return (
        <>
            <div className={clsx(styles.containerImg, {
                [styles.image]: image,
                [styles.empty]: !image,
                [styles.focused]: !isFocusOnParent,
                [styles.size16]: size === "16",
                [styles.size24]: size === "24",
                [styles.size28]: size === "28",
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
                [styles.size56]: size === "56",
            })}
                tabIndex={0}
            >
                {image || (<span >{initials || "?"}</span>)}
                {isOnlineIndicator && (<div className={clsx(styles.indicator)}></div>)}
            </div>
        </>
    )
}

export default Avatar;