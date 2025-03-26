import clsx from "clsx";
import { ReactNode, FC } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    image: ReactNode;
    indicator?: boolean;
    heading?: string;
    paragraph?: string;
    size?: "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "56";
    background?: "default" | "primary" | "secondary";
    border?: boolean;
}

const Avatar: FC<AvatarProps> = ({
    image,
    indicator = false,
    heading,
    paragraph,
    size = "40",
    background = "default",
    border = false
}) => {
    return (
        <>
            <div className={clsx(styles.avatarWrapper, {
                [styles.paddingWrapper]: heading || paragraph,
                [styles.border]: border === true,
                [styles.bgDefault]: background === "default",
                [styles.bgPrimary]: background === "primary",
                [styles.bgSecondary]: background === "secondary",
                //size
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
                <div className={clsx(styles.containerImg)}>
                    {image}
                    {indicator && (<div className={clsx(styles.indicator)}></div>)}
                </div>
                <div className={clsx(styles.avatarInfo)}>
                    <span className={clsx(styles.avatarHeading)}></span>
                    <span className={clsx(styles.avatar)}></span>
                </div>
            </div>
        </>
    )
}

export default Avatar;