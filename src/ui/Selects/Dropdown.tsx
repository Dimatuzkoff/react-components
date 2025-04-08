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
    dropdownContent?: []
}




export const Dropdown: FC<DropdownProps> = ({
    dropdownContent,
    size = "40"
}) => {
    const changeItem = (item: string) => {
        console.log(item);
    }

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
                            <li key={item.colorName} onClick={() => changeItem(item.colorName)} className={clsx(styles.colorItem)}>
                                <div className={clsx(styles.colorItem)}>
                                    <span>{item.colorName}</span>
                                    {/* {selected === color.colorName && <img src={SelectedIcon} alt="SelectedIcon" />} */}
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