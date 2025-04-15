//react
import { FC } from "react";
//libs
import clsx from "clsx";
//assets
import SelectedIcon from "../../assets/icons/SelectedIcon.svg"
//styles
import styles from "./SelectOptionList.module.scss";


interface SelectOptionItemProps {
    onChange?: (value: { label: "", value: "", note: "", icon: "" }) => void
    option?: { label: "", value: "", note: "", icon: "" },
    selectedSingleItem?: { label: "", value: "", note: "", icon: "" },
}

export const SelectOptionItem: FC<SelectOptionItemProps> = ({
    onChange,
    option,
    selectedSingleItem,
}) => {
    return (
        <>
            <li onClick={() => onChange?.(option)} className={clsx(styles.optionItemWrapper)}>
                <div className={clsx(styles.optionItem)}>
                    <span>{option?.label}</span>
                    {(selectedSingleItem?.label.trim() === option?.label.trim()) && <img src={SelectedIcon} alt="SelectedIcon" />}
                </div>
            </li>
        </>
    )
};