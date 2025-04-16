//react
import { FC, useState, useRef, useEffect } from "react";
//libs
import clsx from "clsx";
//ui
import { TabToolIcon } from "./TabToolIcon"
import { TabList } from "./TabList"
//assets
//styles
import styles from "./Tabs.module.scss";
//data
import { tabsData } from "./tabsData"

export interface TabsData {
    label: string
}

interface TabProps {
    variant?: "underline" | "underlineFilled",
    isBadge?: boolean,
    isDisabled?: boolean,
    size?: "32" | "36" | "40",
    behavior?: "scrollable" | "arrows" | "dropdown"
}

export const Tabs: FC<TabProps> = ({
    // variant = "underline",
    // isBadge = false,
    // isDisabled = false,
    size = "40",
    behavior = "dropdown"
}) => {
    const [activeTab, setActiveTab] = useState<string>(tabsData[0].label);

    const [widthWrapperNav, setWidthWrapperNav] = useState<number>(0);

    const wrapperNavRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (wrapperNavRef.current) {
                const width = wrapperNavRef.current.getBoundingClientRect().width;
                setWidthWrapperNav(width);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return (
        <>
            <div ref={wrapperNavRef} className={clsx(styles.container)}>
                <div className={clsx(styles.tabsWrapper, {
                    [styles.size32]: size === "32",
                    [styles.size36]: size === "36",
                    [styles.size40]: size === "40"
                })}>
                    <TabToolIcon position="left" isRotate behavior={behavior} size={size} />
                    <TabList
                        onTabClick={setActiveTab}
                        size={size}
                        behavior={behavior}
                        options={tabsData}
                        activeTab={activeTab}
                        wrapperNavWidth={widthWrapperNav} />
                    <TabToolIcon position="right" behavior={behavior} size={size} />
                </div>
                <div className={clsx(styles.content)}>
                    activeTab {activeTab}
                </div>
            </div>
        </>
    )
};