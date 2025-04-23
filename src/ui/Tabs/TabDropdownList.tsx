//react
import { FC } from "react";
//libs
import clsx from "clsx";
//ui
import { TabItem } from "./TabItem"
//styles
import styles from "./TabDropdownList.module.scss";
//types
import { TabsData } from "./Tabs"

interface TabDropdownListProps {
    onClick?: (value: string) => void,
    size: string,
    variant?: string,
    activeTab?: string,
    options: TabsData[],
}

export const TabDropdownList: FC<TabDropdownListProps> = ({
    onClick,
    size,
    variant,
    activeTab,
    options
}) => {
    return (
        <>
            <div className={clsx(styles.dropdownOptionsWrapper)}>
                <ul>
                    {options.map((item) => (
                        <TabItem key={item.label} variant={variant} size={size} option={item} isActiveTab={activeTab === item.label} onClick={onClick} />
                    ))}
                </ul>
            </div>
        </>
    )
};