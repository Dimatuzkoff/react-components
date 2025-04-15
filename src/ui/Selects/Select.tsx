//react
import { FC, ReactNode, useState, useRef } from "react";
//libs
import clsx from "clsx";
//hooks
import { useClickOutside } from "../../hooks/useClickOutside"
//ui
import { Input } from "../Inputs/Input";
import { Dropdown } from "./Dropdown";
import { SelectList } from "./SelectList";
import { SelectOptionList } from "./SelectOptionList";
//styles
import styles from "./Select.module.scss";

export interface OptionType {
    label: string;
    icon?: ReactNode;
    [key: string]: any;
}

interface SelectProps {
    onChangeValue?: (value: OptionType[]) => void
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
    options?: OptionType[];
}


export const Select: FC<SelectProps> = ({
    onChangeValue,
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
    options


}) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

    const [inputValue, setInputValue] = useState<string>("");

    const [selectedItems, setSelectedItems] = useState<OptionType[]>([]);

    const [searchValue, setSearchValue] = useState<string>("");

    const divClickOutsideRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(divClickOutsideRef, () => setIsOpenDropdown(false));
    const clearValue = () => {
        setInputValue("");
        setSearchValue("");
        setSelectedItems([]);
    };

    const onSelectOption = (value: OptionType) => {
        if (mode === "single") {
            setInputValue(value.label);
            setSelectedItems([value]);
            onChangeValue?.([value]);
        }

        if (mode === "multiple") {
            if (value.label) {
                setSelectedItems([...selectedItems, value]);

            }
            setInputValue("");
            onChangeValue?.([...selectedItems, value]);
        }

        setSearchValue("");
        setIsOpenDropdown(false)
    };

    const removeSelectedItem = (value: OptionType) => {
        setSelectedItems(selectedItems.filter(item => item !== value));
        onChangeValue?.(selectedItems.filter(item => item !== value));
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
                    {mode === "multiple" && <SelectList
                        onClick={removeSelectedItem}
                        selectedItems={selectedItems}
                    />}
                </Input>
                <Dropdown isOpen={isOpenDropdown}>
                    <SelectOptionList size={size}
                        options={options}
                        selectedSingleItem={selectedItems[0]}
                        onChange={onSelectOption}
                        searchSingleValue={searchValue}
                        mode={mode}
                        selectedMultipleItems={selectedItems} />
                </Dropdown>
            </div>
        </>
    )
};