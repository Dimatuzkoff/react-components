import clsx from "clsx";
import { FC } from "react";
import styles from "./SelectList.module.scss";


interface SelectListProps {
    selectedItems?: string[],
    size?: "32" | "36" | "40" | "44" | "48";

}


export const SelectList: FC<SelectListProps> = ({
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
                    <span className={clsx(styles.selectedItem)} key={elem}>{elem}</span>
                ))}
            </div>
        </>
    )
};

