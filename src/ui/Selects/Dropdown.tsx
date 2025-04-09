import clsx from "clsx";
import { FC } from "react";
import styles from "./Dropdown.module.scss";
import SelectedIcon from "../../assets/icons/SelectedIcon.svg"

interface DropdownProps {
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
    selectedSingleItem?: string
}




export const Dropdown: FC<DropdownProps> = ({
    onChange,
    dropdownContent,
    size = "40",
    selectedSingleItem
}) => {
    return (
        <>
            <div className={clsx(styles.dropdown, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
            })}>
                <ul>
                    {dropdownContent.length > 0 ? (
                        dropdownContent.map((item) => (
                            <li key={item.colorName} onClick={() => onChange(item.colorName)} className={clsx(styles.colorItem)}>
                                <div className={clsx(styles.colorItem)}>
                                    <span>{item.colorName}</span>
                                    {(selectedSingleItem?.trim() === item.colorName.trim()) && <img src={SelectedIcon} alt="SelectedIcon" />}
                                </div>
                            </li>
                        ))
                    ) : (
                        <div className={clsx(styles.noResult)}>not found ...</div>
                    )}
                </ul>
            </div>
        </>
    )
};