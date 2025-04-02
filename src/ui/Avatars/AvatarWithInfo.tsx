import clsx from "clsx";
import { ReactNode, FC } from "react";
import styles from "./AvatarWithInfo.module.scss";
import Avatar from "./Avatar";
import { getInitials } from "../../helpers/getInitials"

interface AvatarWithInfoProps {
    image?: ReactNode;
    isOnlineIndicator?: boolean;
    firstName?: string;
    lastName?: string;
    email?: string;
    size?: "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "56";
    background?: "default" | "primary" | "secondary";
    isBorder?: boolean;
}

const AvatarWithInfo: FC<AvatarWithInfoProps> = ({
    image,
    isOnlineIndicator = false,
    firstName,
    lastName,
    email,
    size = "40",
    background = "default",
    isBorder = false
}) => {
    return (
        <>
            <div className={clsx(styles.avatarWrapper, {
                [styles.paddingWrapper]: (((firstName || lastName) || email) && background !== "default") || (background === "primary") || (background === "secondary"),
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
            })} tabIndex={0} >
                <div className={clsx(styles.avatar)} tabIndex={1}>
                    <Avatar isFocusOnParent image={image} initials={getInitials(firstName, lastName)} isOnlineIndicator={isOnlineIndicator} size={size}></Avatar>
                </div>
                <div className={clsx({
                    [styles.avatarInfo]: ((firstName || lastName) || email) || (background === "primary") || (background === "secondary"),
                })}>
                    <span className={clsx(styles.avatarHeading)}>
                        {firstName} {lastName}
                    </span>
                    <span className={clsx(styles.avatarParagraph)}>
                        {email}
                    </span>
                </div>
            </div>
        </>
    )
}

export default AvatarWithInfo;