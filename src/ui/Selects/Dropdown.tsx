import clsx from "clsx";
import { FC } from "react";
import styles from "./Dropdown.module.scss";
// import SelectedIcon from "../../assets/icons/SelectedIcon.svg"

interface DropdownProps {
    iconBefore?: string;
    placeholder?: string;
    size?: "32" | "36" | "40" | "44" | "48";
    label?: string;
    tooltipText?: string;
    helperText?: string
    isQuiet?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
}




export const Dropdown: FC<DropdownProps> = () => {



    return (
        <>
            <div className={clsx(styles.dropdown)}>
            </div>
        </>
    )
};