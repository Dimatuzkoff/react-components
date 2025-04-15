//react
import { FC } from "react";
//libs
import clsx from "clsx";
//assets
import SelectedIcon from "../../assets/icons/SelectedIcon.svg"
//styles
import styles from "./SelectOptionList.module.scss";
//types
import { OptionType } from "./Select";

interface SelectOptionItemProps {
    onChange: (value: OptionType) => void
    option: OptionType
    selectedSingleItem?: OptionType
}

export const SelectOptionItem: FC<SelectOptionItemProps> = ({
    onChange,
    option,
    selectedSingleItem,
}) => {
    return (
        <>
            <li onClick={() => onChange(option)} className={clsx(styles.optionItemWrapper)}>
                <div className={clsx(styles.optionItem)}>
                    <span>{option.label}</span>
                    {(selectedSingleItem?.label.trim() === option.label.trim()) && <img src={SelectedIcon} alt="SelectedIcon" />}
                </div>
            </li>
        </>
    )
};