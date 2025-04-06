import clsx from "clsx";
import { ReactNode, FC, useState, useMemo } from "react";
import styles from "./Select.module.scss";
// import InfoTooltip from "../InfoTooltip/InfoTooltip";
import IconDropdown from "../../assets/icons/SelectDropdownIcon.png"
import SelectedIcon from "../../assets/icons/SelectedIcon.svg"
import CloseIcon from "../../assets/icons/CloseIcon.svg"

interface InputProps {
    placeholder?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
    isDisabled?: boolean;
    iconBefore?: ReactNode;
    // iconAfter?: ReactNode;

    label?: string;
    size?: "32" | "36" | "40" | "44" | "48";
    uiType?: "fill" | "outline";
    isQuiet?: boolean;
    isError?: boolean;
    helperText?: string;
    tooltipText?: string;
}

const colors = [
    { colorName: "Midnight Blue" },
    { colorName: "Crimson Sky " },
    { colorName: " Electric Lime" },
    { colorName: " Golden Sun" },
    { colorName: "Sapphire Sea " },
    { colorName: " Ruby Rose" }]

const Input: FC<InputProps> = ({
    placeholder,
    type = "text",
    isDisabled = false,
    iconBefore,
    // iconAfter,
    label,
    size = "40",
    uiType = "fill",
    isQuiet = false,
    isError = false,
    // helperText = "",
    // tooltipText,
}) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [selected, setSelected] = useState("");
    const [searchValue, setSearchValue] = useState("");
    console.log("render select");

    function changeColor(color: string) {
        setSelected(color);
        setIsOpenDropdown(false);
        setSearchValue("");
    }

    function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
        setIsOpenDropdown(true);
        const value = e.target.value;
        setSelected(value);
        setSearchValue(e.target.value);

        console.log(selected);


    }

    function clearValue() {
        setSelected("");
        setSearchValue("");
    }

    const filteredColors = useMemo(() => {
        return colors.filter(c =>
            c.colorName.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [searchValue]);


    return (
        <>
            <div className={clsx(styles.selectWrapper, {
                // [styles.noLabel]: !label,
                [styles.disabled]: isDisabled,
                //size
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.size44]: size === "44",
                [styles.size48]: size === "48",
            })}>
                <div className={clsx(styles.labelWrapper)}>
                    <span className={clsx(styles.label)} >{label}</span>
                    {/* {tooltipText && <InfoTooltip>{tooltipText}</InfoTooltip>} */}
                </div>
                <div className={clsx(styles.inputContainer, {
                    [styles.error]: isError
                })}>
                    <div className={clsx(styles.inputWrapper, {
                        [styles.fillNoQuiet]: uiType === "fill" && !isQuiet,
                        [styles.outlineNoQuiet]: uiType === "outline" && !isQuiet,
                        [styles.fillQuiet]: uiType === "fill" && isQuiet,
                        [styles.outlineQuiet]: uiType === "outline" && isQuiet,
                    })}>
                        {!isError && iconBefore && (
                            <span className={clsx(styles.iconBefore)}>
                                {iconBefore}
                            </span>
                        )}

                        <input type={type} value={selected} onChange={(e) => changeValue(e)}
                            className={clsx(styles.input)} placeholder={placeholder} disabled={isDisabled}
                        />
                        {/* {!isError && iconAfter}
                        {(isError && iconAfter) ? <img src={ErrorSearchIcon} alt="Error" /> : null}
                       */}
                        <span className={clsx(styles.iconDropdown)}>
                            {selected && <img className={clsx(styles.clearButton)} onClick={() => clearValue()} src={CloseIcon} alt="CloseIcon" />}

                            <img src={IconDropdown} alt="Dropdown" onClick={() => setIsOpenDropdown(!isOpenDropdown)} />
                        </span>
                    </div>
                    {/* <div className={clsx(styles.helperTextWrapper)}>
                        {!isDisabled && helperText && <span className={clsx(styles.helperText)}>{helperText}</span>}
                    </div> */}
                    {isOpenDropdown && <div className={clsx(styles.dropdown)} >
                        <ul>
                            {filteredColors.map((color) => {
                                return (
                                    <li key={color.colorName} onClick={() => changeColor(color.colorName)} className={clsx(styles.colorItem)} >
                                        <div className={clsx(styles.colorItem)}>
                                            <span>  {color.colorName}</span>
                                            {selected === color.colorName && <img src={SelectedIcon} alt="SelectedIcon" />}

                                        </div>
                                    </li>
                                )
                            })}

                        </ul>

                    </div>}
                </div>
            </div>
        </>
    );
}

export default Input