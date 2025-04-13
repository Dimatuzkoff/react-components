//react
import { ReactNode, FC, } from "react";
//helpers
import { getCurrentOsForBadgeIcon } from "../../helpers/getCurrentOsForBadgeIcon"
//hooks
import { useKeyboardInputRef } from "../../hooks/useKeyboardInputRef"
//libs
import clsx from "clsx";
//ui
import InfoTooltip from "../InfoTooltip/InfoTooltip";
//assets
import ErrorSearchIcon from "../../assets/icons/ErrorSearchIcon.svg";
import IconClose from "../../assets/icons/IconClose.svg";
import IconDropdown from "../../assets/icons/SelectDropdownIcon.svg";
//styles
import styles from "./Input.module.scss";

interface InputProps {
    onChange?: (value: string) => void;
    onClick?: () => void;
    clearSelectedValue?: () => void;
    toggleSelectDropdown?: () => void;
    children?: React.ReactNode;
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
    value?: string
}

export const Input: FC<InputProps> = ({
    onChange,
    onClick,
    clearSelectedValue,
    toggleSelectDropdown,
    children,
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
    tooltipText,
    value
}) => {
    const inputRef = useKeyboardInputRef(isBadge ? "k" : "", () => {
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
                        [styles.multipleSelect]: children,
                    })}>
                        {!children && iconBefore && (
                            isError
                                ? <img src={ErrorSearchIcon} alt="Error" />
                                : iconBefore
                        )}
                        {children && children}
                        <input ref={isBadge ? inputRef : null}
                            onChange={(event) => onChange(event.target.value)}
                            onClick={onClick} value={value}
                            type={type}
                            className={clsx(styles.input, {
                                [styles.leftAlignment]: alignment === "left",
                                [styles.rightAlignment]: alignment === "right",
                            })} placeholder={placeholder} disabled={isDisabled}
                        />
                        {children && (<div className={clsx(styles.selectTools)}>
                            <img onClick={clearSelectedValue} className={clsx(styles.closeIcon)} src={IconClose} alt="icon" />
                            <img onClick={toggleSelectDropdown} className={clsx(styles.dropdownIcon)} src={IconDropdown} alt="icon" />
                        </div>)}
                        {!isError && iconAfter}
                        {(isError && iconAfter) ? <img src={ErrorSearchIcon} alt="Error" /> : null}
                        {isBadge && <div className={clsx(styles.badge)}>
                            {getCurrentOsForBadgeIcon()}
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