import clsx from "clsx";
import { FC, useState, useRef } from "react";
import CloseIcon from "../../assets/icons/CloseIcon.svg";
import IconDropdown from "../../assets/icons/SelectDropdownIcon.png";
import Input from "../Inputs/Input";
import { Dropdown } from "./Dropdown";
import styles from "./Select.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside"
import { SelectList } from "./SelectList"
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
    const [selectedSingleItem, setSelectedSingleItem] = useState("");
    const [selectedMultipleItems, setSelectedMultipleItems] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const [inputHelperText, setInputHelperText] = useState(helperText);
    const divClickOutsideRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(divClickOutsideRef, () => setIsOpenDropdown(false));
    const clearValue = () => {
        setInputValue("");
        setSearchValue("");
        setSelectedSingleItem("");
        setSelectedMultipleItems([]);
    };

    const selectDropdownItem = (value: string) => {
        if (mode === "single") {
            setSelectedSingleItem(value);
            setInputValue(value);
        }

        if (mode === "multiple") {
            setSelectedMultipleItems([...selectedMultipleItems, value]);
            setInputValue("");
        }

        setSearchValue("");
        setIsOpenDropdown(false)
    };

    const removeSelectedItem = (value: string) => {
        setSelectedMultipleItems(selectedMultipleItems.filter(item => item !== value));
    }

    const getInputValue = (value: string) => {
        setInputValue(value);
        setSearchValue(value)
    }

    const changeHelperText = (value: string) => {
        setInputHelperText(value);
    }

    const selectIconBefore = <img src={iconBefore} className={clsx(styles.iconBefore)} alt="search" />
    const selectTools = (
        <div className={clsx(styles.selectTools)}>
            <img onClick={clearValue} className={clsx(styles.closeIcon)} src={CloseIcon} alt="icon" />
            <img onClick={() => setIsOpenDropdown(!isOpenDropdown)} className={clsx(styles.dropdownIcon)} src={IconDropdown} alt="icon" />
        </div>
    )

    const selectedList = (
        <SelectList onClick={removeSelectedItem} selectedItems={selectedMultipleItems} />
    )
    const currentIconBefore = mode === "multiple" ? selectedList : selectIconBefore
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
                    iconBefore={currentIconBefore}
                    iconAfter={selectTools}
                    placeholder={placeholder}
                    size={size}
                    label={label}
                    tooltipText={tooltipText}
                    isQuiet={isQuiet}
                    isDisabled={isDisabled}
                    helperText={inputHelperText}
                    isError={isError}
                    onChange={(value) => getInputValue(value)}
                    onClick={() => (setIsOpenDropdown(true))}
                    value={inputValue}

                />
                {isOpenDropdown && <div className={clsx(styles.dropdownWrapper)}>
                    <Dropdown size={size}
                        dropdownContent={dropdownContent}
                        selectedSingleItem={selectedSingleItem}
                        onChange={(value) => selectDropdownItem(value)}
                        searchSingleValue={searchValue}
                        changeHelperText={changeHelperText}
                        mode={mode}
                        selectedMultipleItems={selectedMultipleItems}
                    /></div>}
            </div>

        </>
    )
};