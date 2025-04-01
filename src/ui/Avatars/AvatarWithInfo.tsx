import clsx from "clsx";
import { ReactNode, FC } from "react";
import styles from "./AvatarWithInfo.module.scss";
import Avatar from "./Avatar";

interface AvatarWithInfoProps {
    image?: ReactNode;
    isOnlineIndicator?: boolean;
    heading?: string;
    paragraph?: string;
    size?: "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "56";
    background?: "default" | "primary" | "secondary";
    isBorder?: boolean;
}

const AvatarWithInfo: FC<AvatarWithInfoProps> = ({
    image,
    isOnlineIndicator = false,
    heading,
    paragraph,
    size = "40",
    background = "default",
    isBorder = false
}) => {
    return (
        <>
            <div className={clsx(styles.avatarWrapper, {
                [styles.paddingWrapper]: ((heading || paragraph) && background !== "default") || (background === "primary") || (background === "secondary"),
                [styles.border]: isBorder === true,
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
                <Avatar image={image} isOnlineIndicator={isOnlineIndicator} size={size}></Avatar>
                <div className={clsx({
                    [styles.avatarInfo]: (heading || paragraph) || (background === "primary") || (background === "secondary"),
                })}>
                    <span className={clsx(styles.avatarHeading)}>
                        {heading}
                    </span>
                    <span className={clsx(styles.avatarParagraph)}>
                        {paragraph}
                    </span>
                </div>
            </div>
        </>
    )
}

export default AvatarWithInfo;