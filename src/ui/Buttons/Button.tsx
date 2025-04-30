//react
import { ReactNode, FC } from "react";
//libs
import clsx from "clsx";
//styles
import styles from "./Button.module.scss";

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
    type?: "submit" | "button";
    isDisabled?: boolean;
    isLoading?: boolean;
    isLeftIcon?: boolean;
    isRightIcon?: boolean;
    shape?: "rectangle" | "rounded" | "pill";
    size?: "32" | "36" | "40" | "44" | "48" | "56";
    uiType?: "fill" | "outline" | "ghost" | "text";
    uiColor?: "accent" | "primary" | "secondary" | "success" | "danger" | "warning";
}

const Button: FC<ButtonProps> = ({
    onClick,
    children,
    type = "button",
    isDisabled = false,
    isLoading = false,
    isLeftIcon,
    isRightIcon,
    shape = "rounded",
    size = "40",
    uiType = "fill",
    uiColor = "accent",
}) => {
    return (
        <>
            <button
                className={clsx(styles.button, {
                    // isLoading
                    [styles.loading]: isLoading,
                    // shape
                    [styles.shapeRectangle]: shape === "rectangle",
                    [styles.shapeRounded]: shape === "rounded",
                    [styles.shapePill]: shape === "pill",
                    // size
                    [styles.size32]: size === "32",
                    [styles.size36]: size === "36",
                    [styles.size40]: size === "40",
                    [styles.size44]: size === "44",
                    [styles.size48]: size === "48",
                    [styles.size56]: size === "56",
                    // button style
                    [styles.fillAccent]: uiColor === "accent" && uiType === "fill",
                    [styles.fillPrimary]: uiColor === "primary" && uiType === "fill",
                    [styles.fillSecondary]: uiColor === "secondary" && uiType === "fill",
                    [styles.fillSuccess]: uiColor === "success" && uiType === "fill",
                    [styles.fillDanger]: uiColor === "danger" && uiType === "fill",
                    [styles.fillWarning]: uiColor === "warning" && uiType === "fill",
                    [styles.outlineAccent]: uiColor === "accent" && uiType === "outline",
                    [styles.outlinePrimary]: uiColor === "primary" && uiType === "outline",
                    [styles.outlineSecondary]: uiColor === "secondary" && uiType === "outline",
                    [styles.outlineSuccess]: uiColor === "success" && uiType === "outline",
                    [styles.outlineDanger]: uiColor === "danger" && uiType === "outline",
                    [styles.outlineWarning]: uiColor === "warning" && uiType === "outline",
                    [styles.ghostAccent]: uiColor === "accent" && uiType === "ghost",
                    [styles.ghostPrimary]: uiColor === "primary" && uiType === "ghost",
                    [styles.ghostSecondary]: uiColor === "secondary" && uiType === "ghost",
                    [styles.ghostSuccess]: uiColor === "success" && uiType === "ghost",
                    [styles.ghostDanger]: uiColor === "danger" && uiType === "ghost",
                    [styles.ghostWarning]: uiColor === "warning" && uiType === "ghost",
                    [styles.textAccent]: uiColor === "accent" && uiType === "text",
                    [styles.textPrimary]: uiColor === "primary" && uiType === "text",
                    [styles.textSecondary]: uiColor === "secondary" && uiType === "text",
                    [styles.textSuccess]: uiColor === "success" && uiType === "text",
                    [styles.textDanger]: uiColor === "danger" && uiType === "text",
                    [styles.textWarning]: uiColor === "warning" && uiType === "text",

                })}
                type={type}
                onClick={onClick}
                disabled={isDisabled}
            >
                {isLoading && (
                    <span className={styles.loadingIcon}>
                        <span className={styles.dot}></span>
                        <span className={clsx(styles.dot, styles.dotFade)}></span>
                    </span>
                )}

                {isLeftIcon && !isLoading && (
                    <span className={styles.icon} />
                )}

                <span>{children}</span>

                {isRightIcon && !isLoading && (
                    <span className={styles.icon} />
                )}
            </button>
        </>
    );
};

export default Button;

