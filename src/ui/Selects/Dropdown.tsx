import clsx from "clsx";
import { FC, useMemo, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import SelectedIcon from "../../assets/icons/SelectedIcon.svg"

interface DropdownProps {
    mode?: "single" | "multiple";
    onChange?: (value: string) => void
    iconBefore?: string;
    placeholder?: string;
    size?: "32" | "36" | "40" | "44" | "48";
    label?: string;
    tooltipText?: string;
    helperText?: string
    isQuiet?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    dropdownContent?: [],
    selectedSingleItem?: string,
    searchSingleValue?: string,
    selectedMultipleItems?: string[]
}

export const Dropdown: FC<DropdownProps> = ({
    mode = "multiple",
    onChange,
    dropdownContent,
    size = "40",
    selectedSingleItem,
    searchSingleValue,
    selectedMultipleItems
}) => {
    const filteredDropdownItems = useMemo(() => {
        const items = dropdownContent ?? [];

        if (mode === "multiple") {
            return items
                .filter(elem => !selectedMultipleItems?.includes(elem.value))
                .filter(elem => elem.value.toLowerCase().includes(searchSingleValue?.toLowerCase() ?? ""));
        }

        if (mode === "single") {
            return items.filter(elem =>
                elem.value.toLowerCase().includes(searchSingleValue?.toLowerCase() ?? "")
            );
        }

        return items;
    }, [dropdownContent, selectedMultipleItems, searchSingleValue, mode]);



    console.log('render dropdown');

    return (
        <>
            <div className={clsx(styles.dropdown, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
                [styles.notFound]: filteredDropdownItems.length === 0,
            })}>
                <ul>
                    {filteredDropdownItems.map((item) => (
                        <li key={item.value} onClick={() => onChange?.(item.value)} className={clsx(styles.colorItem)}>
                            <div className={clsx(styles.colorItem)}>
                                <span>{item.value}</span>
                                {(selectedSingleItem?.trim() === item.value.trim()) && <img src={SelectedIcon} alt="SelectedIcon" />}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};