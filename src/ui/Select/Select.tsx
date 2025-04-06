import clsx from "clsx";
import { ReactNode, FC, useState } from "react";
import styles from "./Select.module.scss";
// import InfoTooltip from "../InfoTooltip/InfoTooltip";

interface InputProps {
    placeholder?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
    isDisabled?: boolean;
    iconBefore?: ReactNode;
    // iconAfter?: ReactNode;

    label?: string;
    size?: "32" | "36" | "40" | "44" | "48";
    uiType?: "fill" | "outline";
    isQuiet?: boolean;
    isError?: boolean;
    helperText?: string;
    tooltipText?: string;
}

const Input: FC<InputProps> = ({
    placeholder,
    type = "text",
    isDisabled = false,
    iconBefore,
    // iconAfter,
    label,
    size = "40",
    uiType = "fill",
    isQuiet = false,
    isError = false,
    // helperText = "",
    // tooltipText,
}) => {
    const [isOpenDropdown, setOpenDropdown] = useState(true);

    return (
        <>
            <div className={clsx(styles.selectWrapper, {
                // [styles.noLabel]: !label,
                [styles.disabled]: isDisabled,
                //size
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
            })}>
                <div className={clsx(styles.labelWrapper)}>
                    <span className={clsx(styles.label)} >{label}</span>
                    {/* {tooltipText && <InfoTooltip>{tooltipText}</InfoTooltip>} */}
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
                        <input type={type} className={clsx(styles.input)} placeholder={placeholder} disabled={isDisabled}
                        />
                        {/* {!isError && iconAfter}
                        {(isError && iconAfter) ? <img src={ErrorSearchIcon} alt="Error" /> : null}
                       */}
                    </div>
                    {/* <div className={clsx(styles.helperTextWrapper)}>
                        {!isDisabled && helperText && <span className={clsx(styles.helperText)}>{helperText}</span>}
                    </div> */}
                    {isOpenDropdown && <div className={clsx(styles.dropdown)} ></div>}
                </div>
            </div>
        </>
    );
}

export default Input