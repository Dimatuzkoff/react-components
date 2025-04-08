import clsx from "clsx";
import { FC } from "react";
// import { ReactNode, FC, useState, useMemo } from "react";
import styles from "./Select.module.scss";
// import InfoTooltip from "../InfoTooltip/InfoTooltip";
// import IconDropdown from "../../assets/icons/SelectDropdownIcon.png"
// import SelectedIcon from "../../assets/icons/SelectedIcon.svg"
// import CloseIcon from "../../assets/icons/CloseIcon.svg"
import Input from "../Inputs/Input"

interface SelectProps {
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
    placeholder,
    size = '40',
    label,
    tooltipText,
    helperText = "",
    isQuiet = false,
    isDisabled = false,
    isError = false


}) => {
    return (
        <>
            <div className={clsx(styles.selectWrapper)}>
                <Input
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