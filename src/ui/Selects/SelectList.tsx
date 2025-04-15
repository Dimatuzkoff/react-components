//react
import { FC } from "react";
//libs
import clsx from "clsx";
//styles
import styles from "./SelectList.module.scss";
//types
import { OptionType } from "./Select";


interface SelectListProps {
    onClick?: (value: OptionType) => void
    selectedItems?: OptionType[],
    size?: "32" | "36" | "40" | "44" | "48";

}


export const SelectList: FC<SelectListProps> = ({
    onClick,
    selectedItems,
    size = "40"
}) => {
    return (
        <>
            <div className={clsx(styles.selectedList, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
            })}>
                {selectedItems?.map(elem => (
                    <span onClick={() => onClick?.(elem)} className={clsx(styles.selectedItem)} key={elem.label}>{elem.label}</span>
                ))}
            </div>
        </>
    )
};

