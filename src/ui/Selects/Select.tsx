import clsx from "clsx";
import { ReactNode, FC } from "react";
import styles from "./Select.module.scss";
// import InfoTooltip from "../InfoTooltip/InfoTooltip";
// import IconDropdown from "../../assets/icons/SelectDropdownIcon.png"
// import SelectedIcon from "../../assets/icons/SelectedIcon.svg"
// import CloseIcon from "../../assets/icons/CloseIcon.svg"
import Input from "../Inputs/Input"

interface SelectProps {
    iconBefore?: string;
    iconAfter?: ReactNode;
    placeholder?: string;
    size?: "32" | "36" | "40" | "44" | "48";
    label?: string;
    tooltipText?: string;
    helperText?: string
    isQuiet?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
}




export const Select: FC<SelectProps> = ({
    iconBefore,
    iconAfter,
    placeholder,
    size = '40',
    label,
    tooltipText,
    helperText = "",
    isQuiet = false,
    isDisabled = false,
    isError = false


}) => {
    const selectIconBefore = <img src={iconBefore} className={clsx(styles.iconBefore)} alt="search" />

    return (
        <>
            <div className={clsx(styles.selectWrapper, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
            })}>
                <Input
                    iconBefore={selectIconBefore}
                    iconAfter={iconAfter}
                    placeholder={placeholder}
                    size={size}
                    label={label}
                    tooltipText={tooltipText}
                    isQuiet={isQuiet}
                    isDisabled={isDisabled}
                    helperText={helperText}
                    isError={isError}
                />
            </div>

        </>
    )
};