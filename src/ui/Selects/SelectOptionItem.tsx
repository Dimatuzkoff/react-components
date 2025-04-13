//react
import { FC } from "react";
//libs
import clsx from "clsx";
//assets
import SelectedIcon from "../../assets/icons/SelectedIcon.svg"
//styles
import styles from "./SelectOptionList.module.scss";


interface SelectOptionItemProps {
    onChange?: (value: string) => void
    option?: { label: string },
    selectedSingleItem?: string,
}

export const SelectOptionItem: FC<SelectOptionItemProps> = ({
    onChange,
    option,
    selectedSingleItem,
}) => {
    return (
        <>
            <li onClick={() => onChange?.(option.label)} className={clsx(styles.optionItem)}>
                <div className={clsx(styles.colorItem)}>
                    <span>{option.label}</span>
                    {(selectedSingleItem?.trim() === option.label.trim()) && <img src={SelectedIcon} alt="SelectedIcon" />}
                </div>
            </li>
        </>
    )
};