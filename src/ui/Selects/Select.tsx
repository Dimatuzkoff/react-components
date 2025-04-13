//react
import { FC, useState, useRef } from "react";
//libs
import clsx from "clsx";
//hooks
import { useClickOutside } from "../../hooks/useClickOutside"
//ui
import { Input } from "../Inputs/Input";
import { Dropdown } from "./Dropdown";
import { SelectList } from "./SelectList"
//styles
import styles from "./Select.module.scss";

interface SelectProps {
    mode?: "single" | "multiple";
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
    mode = "single",
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

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const [searchValue, setSearchValue] = useState("");

    const divClickOutsideRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(divClickOutsideRef, () => setIsOpenDropdown(false));
    const clearValue = () => {
        setInputValue("");
        setSearchValue("");
        setSelectedItems([]);
    };

    const selectDropdownItem = (value: string) => {
        if (mode === "single") {
            setInputValue(value);
            setSelectedItems([value]);

        }

        if (mode === "multiple") {
            setSelectedItems([...selectedItems, value]);
            setInputValue("");
        }

        setSearchValue("");
        setIsOpenDropdown(false)
    };

    const removeSelectedItem = (value: string) => {
        setSelectedItems(selectedItems.filter(item => item !== value));
    }

    const getInputValue = (value: string) => {
        setInputValue(value);
        setSearchValue(value)
    }

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    }
    const openDropdown = () => {
        setIsOpenDropdown(true);
    }

    return (
        <>
            <div ref={divClickOutsideRef} className={clsx(styles.selectWrapper, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
            })}>
                <Input
                    iconBefore={(
                        <img
                            src={iconBefore}
                            alt="icon"
                        />
                    )}
                    placeholder={placeholder}
                    size={size}
                    label={label}
                    tooltipText={tooltipText}
                    isQuiet={isQuiet}
                    isDisabled={isDisabled}
                    helperText={helperText}
                    isError={isError}
                    onChange={getInputValue}
                    onClick={openDropdown}
                    value={inputValue}
                    clearSelectedValue={clearValue}
                    toggleSelectDropdown={toggleDropdown}
                >
                    {mode === "multiple" && <SelectList onClick={removeSelectedItem} selectedItems={selectedItems} />}
                </Input>
                {isOpenDropdown && <div className={clsx(styles.dropdownWrapper)}>
                    <Dropdown size={size}
                        dropdownContent={dropdownContent}
                        selectedSingleItem={selectedItems[0]}
                        onChange={selectDropdownItem}
                        searchSingleValue={searchValue}
                        mode={mode}
                        selectedMultipleItems={selectedItems}
                    /></div>}
            </div>
        </>
    )
};