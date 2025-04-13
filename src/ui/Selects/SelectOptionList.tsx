import clsx from "clsx";
import { FC, useMemo } from "react";
import styles from "./SelectOptionList.module.scss";
import SelectedIcon from "../../assets/icons/SelectedIcon.svg"

interface SelectOptionListProps {
    mode?: "single" | "multiple";
    onChange?: (value: string) => void
    size?: "32" | "36" | "40" | "44" | "48";
    options?: { label: string }[],
    selectedSingleItem?: string,
    searchSingleValue?: string,
    selectedMultipleItems?: string[]
}

export const SelectOptionList: FC<SelectOptionListProps> = ({
    mode = "multiple",
    onChange,
    options,
    size = "40",
    selectedSingleItem,
    searchSingleValue,
    selectedMultipleItems
}) => {
    const filteredDropdownItems = useMemo(() => {
        const items = options ?? [];

        if (mode === "multiple") {
            return items
                .filter(elem => !selectedMultipleItems?.includes(elem.label))
                .filter(elem => elem.label.toLowerCase().includes(searchSingleValue?.toLowerCase() ?? ""));
        }

        if (mode === "single") {
            return items.filter(elem =>
                elem.label.toLowerCase().includes(searchSingleValue?.toLowerCase() ?? "")
            );
        }

        return items;
    }, [options, selectedMultipleItems, searchSingleValue, mode]);
    return (
        <>
            <div className={clsx(styles.listWrapper, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
                [styles.notFound]: filteredDropdownItems.length === 0,
            })}>
                <ul>
                    {filteredDropdownItems.map((item) => (
                        <li key={item.label} onClick={() => onChange?.(item.label)} className={clsx(styles.colorItem)}>
                            <div className={clsx(styles.colorItem)}>
                                <span>{item.label}</span>
                                {(selectedSingleItem?.trim() === item.label.trim()) && <img src={SelectedIcon} alt="SelectedIcon" />}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};