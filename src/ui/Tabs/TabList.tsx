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
    activeTab?: string,
    wrapperNavWidth?: number
}

export const TabList: FC<TabListProps> = ({
    onTabClick,
    options,
    size,
    behavior,
    activeTab,
    wrapperNavWidth
}) => {
    const navRef = useRef<HTMLDivElement>(null);
    const [widths, setWidths] = useState<number[]>([]);
    useEffect(() => {
        if (wrapperNavWidth && navRef.current) {
            const buttons = navRef.current.querySelectorAll("button");
            const buttonWidths = Array.from(buttons).map(btn =>
                (btn as HTMLElement).getBoundingClientRect().width
            );
            setWidths(buttonWidths);
            console.log("wrapperNavWidth", wrapperNavWidth);
            console.log(buttonWidths);
        }
    }, [wrapperNavWidth]);

    return (
        <>
            <nav ref={navRef} className={clsx(styles.tabsWrapper, {
                [styles.scrollable]: behavior === "scrollable",
                [styles.dropdown]: behavior === "dropdown",
            })}>
                {options.map((option, index) => (
                    <TabItem key={index} activeTab={activeTab} onClick={() => onTabClick(option.label)}
                        option={option} size={size} />
                ))}
            </nav>
        </>
    )
};