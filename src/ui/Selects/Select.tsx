import clsx from "clsx";
import { FC, useState, useMemo } from "react";
import CloseIcon from "../../assets/icons/CloseIcon.svg";
import IconDropdown from "../../assets/icons/SelectDropdownIcon.png";
import Input from "../Inputs/Input";
import { Dropdown } from "./Dropdown";
import styles from "./Select.module.scss";
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
    dropdownContent?: [];
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
    isError = false,
    dropdownContent


}) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedSingleItem, setSelectedSingleItem] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const clearValue = () => {
        setInputValue("");
        setSearchValue("");
        setSelectedSingleItem("");
    };
    const selectDropdownItem = (value: string) => {
        setSelectedSingleItem(value);
        setInputValue(value);
        setSearchValue("");
        setIsOpenDropdown(false)
    };

    const getInputValue = (value: string) => {
        setInputValue(value);
        setSearchValue(value)
    }

    const filteredDropdownItems = useMemo(() => {
        return dropdownContent.filter(c =>
            c.value.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
        );
    }, [inputValue]);

    const selectIconBefore = <img src={iconBefore} className={clsx(styles.iconBefore)} alt="search" />
    const selectTools = (
        <div className={clsx(styles.selectTools)}>
            <img onClick={clearValue} className={clsx(styles.closeIcon)} src={CloseIcon} alt="icon" />
            <img onClick={() => setIsOpenDropdown(!isOpenDropdown)} className={clsx(styles.dropdownIcon)} src={IconDropdown} alt="icon" />
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
                    onChange={(value) => getInputValue(value)}
                    onClick={() => (setIsOpenDropdown(true))}
                    value={inputValue}

                />
                {isOpenDropdown && <div className={clsx(styles.dropdownWrapper)}>
                    <Dropdown size={size}
                        dropdownContent={filteredDropdownItems}
                        selectedSingleItem={selectedSingleItem}
                        onChange={(value) => selectDropdownItem(value)}
                    /></div>}
            </div>

        </>
    )
};