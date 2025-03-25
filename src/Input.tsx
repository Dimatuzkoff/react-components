import clsx from "clsx";
import { ReactNode, FC, useState } from "react";
import styles from "./Input.module.scss";
import ErrorSearchIcon from "./assets/icons/ErrorSearchIcon.svg";
import inputInfoIcon from "./assets/icons/inputInfoIcon.svg";


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
    helperText?: string;
    tooltipText?: string;
}

const Input: FC<InputProps> = ({
    placeholder,
    type = "text",
    disabled = false,
    iconBefore,
    iconAfter,
    label,
    labelPosition = "top",
    size = "36",
    uiType = "fill",
    quiet = false,
    alignment = "left",
    error = false,
    helperText = "",
    iconBadge, tooltipText
}) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    return (
        <>
            <div className={clsx(styles.wrapper, {
                [styles.labelPositionTop]: labelPosition === "top",
                [styles.labelPositionSide]: labelPosition === "side",
                [styles.noLabel]: !label,
                [styles.disabled]: disabled,
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
                    {tooltipText && (
                        <span
                            className={styles.tooltipIcon}
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                        >
                            <img
                                src={inputInfoIcon}
                                alt="info"
                            />
                            {isTooltipVisible && (
                                <span className={styles.tooltip}>
                                    {tooltipText}
                                    <span className={styles.tooltipArrow}></span>
                                </span>
                            )}
                        </span>
                    )}
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
                        })} placeholder={placeholder} disabled={disabled}
                        />
                        {!error && iconAfter}
                        {(error && iconAfter) ? <img src={ErrorSearchIcon} alt="Error" /> : null}
                        {iconBadge && <div className={clsx(styles.badge)}>
                            {iconBadge}
                        </div>}
                    </div>
                    <div className={clsx(styles.helperTextWrapper)}>
                        {!disabled && helperText && <span className={clsx(styles.helperText)}>{helperText}</span>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Input