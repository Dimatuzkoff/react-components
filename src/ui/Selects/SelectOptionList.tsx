//react
import { FC, useMemo } from "react";
//libs
import clsx from "clsx";
//ui
import { SelectOptionItem } from "./SelectOptionItem";
//styles
import styles from "./SelectOptionList.module.scss";
//types
import { OptionType } from "./Select";

interface SelectOptionListProps {
    mode?: "single" | "multiple";
    onChange: (value: OptionType) => void
    size?: "32" | "36" | "40" | "44" | "48";
    options?: OptionType[],
    selectedSingleItem?: OptionType,
    searchSingleValue?: string,
    selectedMultipleItems?: OptionType[]
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
                .filter(
                    (opt) =>
                        !selectedMultipleItems?.some(
                            (selected) => selected.value === opt.value
                        )
                )
                .filter((elem) =>
                    elem.label
                        .toLowerCase()
                        .includes(searchSingleValue?.toLowerCase() ?? "")
                );
        }

        if (mode === "single") {
            return items.filter((elem) =>
                elem.label
                    .toLowerCase()
                    .includes(searchSingleValue?.toLowerCase() ?? "")
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
                        <SelectOptionItem
                            key={item.label}
                            option={item}
                            selectedSingleItem={selectedSingleItem}
                            onChange={onChange} />
                    ))}
                </ul>
            </div>
        </>
    )
};