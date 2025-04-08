import clsx from "clsx";
import { FC, useState } from "react";
import styles from "./Select.module.scss";
import IconDropdown from "../../assets/icons/SelectDropdownIcon.png"
import CloseIcon from "../../assets/icons/CloseIcon.svg"
import Input from "../Inputs/Input"
import { Dropdown } from "./Dropdown"
interface SelectProps {
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




export const Select: FC<SelectProps> = ({
    iconBefore,
    placeholder,
    size = '40',
    label,
    tooltipText,
    helperText = "",
    isQuiet = false,
    isDisabled = false,
    isError = false


}) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const toggleDropdown = () => {

        setIsOpenDropdown(!isOpenDropdown);
    }

    const selectIconBefore = <img src={iconBefore} className={clsx(styles.iconBefore)} alt="search" />
    const selectTools = (
        <div className={clsx(styles.selectTools)}>
            <img className={clsx(styles.closeIcon)} src={CloseIcon} alt="icon" />
            <img onClick={toggleDropdown} className={clsx(styles.dropdownIcon)} src={IconDropdown} alt="icon" />
        </div>
    )
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
                    iconAfter={selectTools}
                    placeholder={placeholder}
                    size={size}
                    label={label}
                    tooltipText={tooltipText}
                    isQuiet={isQuiet}
                    isDisabled={isDisabled}
                    helperText={helperText}
                    isError={isError}
                />
                {isOpenDropdown && <div className={clsx(styles.dropdownWrapper)}>
                    <Dropdown /></div>}
                {/* {isOpenDropdown &&
                    <Dropdown />} */}
            </div>

        </>
    )
};