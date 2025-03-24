import clsx from "clsx";
import { ReactNode, FC } from "react";
import styles from "./Input.module.scss";
import ErrorSearchIcon from "./assets/icons/ErrorSearchIcon.svg";

interface InputProps {
    placeholder?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
    disabled?: boolean;
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
    iconBadge?: ReactNode;
    label?: string;
    labelPosition?: "top" | "side";
    size?: "24" | "32" | "36" | "40" | "44" | "48";
    uiType?: "fill" | "outline";
    quiet?: boolean;
    alignment?: "left" | "right";
    error?: boolean;
    prompt?: string;
}

const Input: FC<InputProps> = ({
    placeholder,
    type = "text",
    // disabled = false,
    iconBefore,
    iconAfter,
    label,
    labelPosition = "top",
    size = "36",
    uiType = "fill",
    quiet = false,
    alignment = "left",
    error = false,
    prompt = "",
    iconBadge
}) => {
    return (
        <>
            <div className={clsx(styles.wrapper, {
                [styles.labelPositionTop]: labelPosition === "top",
                [styles.labelPositionSide]: labelPosition === "side",
                [styles.noLabel]: !label,
                //size
                [styles.size24]: size === "24",
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
            })}>
                <div className={clsx(styles.labelWrapper)}>
                    <span className={clsx(styles.label)} >{label}</span>
                </div>
                <div className={clsx(styles.inputContainer, {
                    [styles.error]: error
                })}>
                    <div className={clsx(styles.inputWrapper, {
                        [styles.fillNoQuiet]: uiType === "fill" && !quiet,
                        [styles.outlineNoQuiet]: uiType === "outline" && !quiet,
                        [styles.fillQuiet]: uiType === "fill" && quiet,
                        [styles.outlineQuiet]: uiType === "outline" && quiet,
                    })}>
                        {!error && iconBefore}
                        {(error && iconBefore) ? <img src={ErrorSearchIcon} alt="Error" /> : null}
                        <input type={type} className={clsx(styles.input, {
                            [styles.leftAlignment]: alignment === "left",
                            [styles.rightAlignment]: alignment === "right",
                        })} placeholder={placeholder} />
                        {!error && iconAfter}
                        {(error && iconAfter) ? <img src={ErrorSearchIcon} alt="Error" /> : null}
                        {iconBadge && <div className={clsx(styles.badge)}>
                            {iconBadge}
                        </div>}
                    </div>
                    <div className={clsx(styles.promptWrapper)}>
                        {prompt && <span className={clsx(styles.prompt)}>{prompt}</span>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Input