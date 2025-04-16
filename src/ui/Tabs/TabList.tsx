//react
import { FC, useRef, useEffect, useState } from "react";
//libs
import clsx from "clsx";
//ui
import { TabItem } from "./TabItem"
//assets
//styles
import styles from "./TabList.module.scss";
//types
import { TabsData } from "./Tabs"

interface TabListProps {
    onTabClick: (label: string) => void
    options: TabsData[],
    size?: string,
    behavior: string,
    activeTab?: string
}

export const TabList: FC<TabListProps> = ({
    onTabClick,
    options,
    size,
    behavior,
    activeTab
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [widths, setWidths] = useState<number[]>([]);

    useEffect(() => {
        if (wrapperRef.current) {

            const buttons = wrapperRef.current.querySelectorAll("button");
            const buttonWidths = Array.from(buttons).map(btn =>
                (btn as HTMLElement).getBoundingClientRect().width
            );
            setWidths(buttonWidths);
            console.log(buttonWidths);

        }
    }, [options]);

    return (
        <>
            <nav ref={wrapperRef} className={clsx(styles.tabsWrapper, {
                [styles.scrollable]: behavior === "scrollable",
            })}>
                {options.map((option, index) => (
                    <TabItem key={index} activeTab={activeTab} onClick={() => onTabClick(option.label)}
                        option={option} size={size} />
                ))}
            </nav>
        </>
    )
};