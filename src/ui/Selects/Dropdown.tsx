//react
import { FC } from "react";
//libs
import clsx from "clsx";
//styles
import styles from "./Dropdown.module.scss";

interface DropdownProps {
    isOpen?: boolean,
    children?: React.ReactNode
}


export const Dropdown: FC<DropdownProps> = ({
    isOpen,
    children
}) => {
    return (
        <>
            {isOpen && (<div className={clsx(styles.dropdownWrapper)}>
                {children}
            </div>)}
        </>
    )
}