import clsx from "clsx";
import { ReactNode, FC, } from "react";
import styles from "./Input.module.scss";
import ErrorSearchIcon from "./assets/icons/ErrorSearchIcon.svg";
import InfoTooltip from "./InfoTooltip";
import { getCurrentOs } from "./getCurrentOs"
import { useKeyboardInputRef } from "./useKeyboardInputRef"
interface InputProps {
    placeholder?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
    isDisabled?: boolean;
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
    isBadge?: boolean;
    label?: string;
    labelPosition?: "top" | "side";
    size?: "24" | "32" | "36" | "40" | "44" | "48";
    uiType?: "fill" | "outline";
    isQuiet?: boolean;
    alignment?: "left" | "right";
    isError?: boolean;
    helperText?: string;
    tooltipText?: string;
}

const Input: FC<InputProps> = ({
    placeholder,
    type = "text",
    isDisabled = false,
    iconBefore,
    iconAfter,
    label,
    labelPosition = "top",
    size = "36",
    uiType = "fill",
    isQuiet = false,
    alignment = "left",
    isError = false,
    helperText = "",
    isBadge = false,
    tooltipText
}) => {
    const inputRef = useKeyboardInputRef("k", () => {
        if (isBadge) {
            inputRef.current?.focus();
        }
    });


    return (
        <>
            <div className={clsx(styles.wrapper, {
                [styles.labelPositionTop]: labelPosition === "top",
                [styles.labelPositionSide]: labelPosition === "side",
                [styles.noLabel]: !label,
                [styles.disabled]: isDisabled,
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
                    {tooltipText && <InfoTooltip>{tooltipText}</InfoTooltip>}
                </div>
                <div className={clsx(styles.inputContainer, {
                    [styles.error]: isError
                })}>
                    <div className={clsx(styles.inputWrapper, {
                        [styles.fillNoQuiet]: uiType === "fill" && !isQuiet,
                        [styles.outlineNoQuiet]: uiType === "outline" && !isQuiet,
                        [styles.fillQuiet]: uiType === "fill" && isQuiet,
                        [styles.outlineQuiet]: uiType === "outline" && isQuiet,
                    })}>
                        {!isError && iconBefore}
                        {(isError && iconBefore) ? <img src={ErrorSearchIcon} alt="Error" /> : null}
                        <input ref={isBadge ? inputRef : null} type={type} className={clsx(styles.input, {
                            [styles.leftAlignment]: alignment === "left",
                            [styles.rightAlignment]: alignment === "right",
                        })} placeholder={placeholder} disabled={isDisabled}
                        />
                        {!isError && iconAfter}
                        {(isError && iconAfter) ? <img src={ErrorSearchIcon} alt="Error" /> : null}
                        {isBadge && <div className={clsx(styles.badge)}>
                            {getCurrentOs()}
                        </div>}
                    </div>
                    <div className={clsx(styles.helperTextWrapper)}>
                        {!isDisabled && helperText && <span className={clsx(styles.helperText)}>{helperText}</span>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Input