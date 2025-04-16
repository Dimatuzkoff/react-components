//react
import { FC } from "react";
//libs
import clsx from "clsx";
//ui
//styles
import styles from "./TabDropdownList.module.scss";
//types
import { TabsData } from "./Tabs"


interface TabDropdownListProps {
    onChange?: (value: TabsData) => void
    size: string;
    options: TabsData[]

}

export const TabDropdownList: FC<TabDropdownListProps> = ({
    onChange,
    size,
    options
}) => {

    return (
        <>
            <div className={clsx(styles.dropdownOptionsWrapper)}>
                <ul>

                    {options.map((item) => (
                        // <SelectOptionItem
                        //     key={item.label}
                        //     option={item}
                        //     selectedSingleItem={selectedSingleItem}
                        //     onChange={onChange} />
                        <li key={item.label}>{item.label}</li>
                    ))}
                </ul>
            </div>
        </>
    )
};