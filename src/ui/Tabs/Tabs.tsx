//react
import { FC, useState, useRef, useEffect } from "react";
//hooks
import { useClickOutside } from "../../hooks/useClickOutside"
//libs
import clsx from "clsx";
//ui
import { TabToolIcon } from "./TabToolIcon"
import { TabList } from "./TabList"
import { Dropdown } from "../Selects/Dropdown"
import { TabDropdownList } from "./TabDropdownList"
//assets
//styles
import styles from "./Tabs.module.scss";
//data
import { tabsData } from "./tabsData"

export interface TabsData {
    label: string,
    badgeCount?: number
}

interface TabProps {
    variant?: "underline" | "underlineFilled",
    isDisabled?: boolean,
    size?: "32" | "36" | "40",
    behavior?: "scrollable" | "arrows" | "dropdown"
}

export const Tabs: FC<TabProps> = ({
    variant = "underline",
    isDisabled,
    size = "40",
    behavior = "scrollable",

}) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

    const [activeTab, setActiveTab] = useState<string>(tabsData[0].label);

    const [widthWrapperNav, setWidthWrapperNav] = useState<number>(0);

    const [dropdownTabs, setDropdownTabs] = useState<TabsData[]>([]);

    const divClickOutsideRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(divClickOutsideRef, () => setIsOpenDropdown(false));

    const wrapperNavRef = useRef<HTMLDivElement>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    }

    const selectTab = (tab: string) => {
        setActiveTab(tab);
        setIsOpenDropdown(false);
    }

    const onControlClick = (position: string) => {
        if (position === "right" && behavior === "dropdown") {
            toggleDropdown()
        } else if (behavior === "arrows") {
            const container = containerRef.current;
            if (!container) return;
            container.scrollBy({
                left: position === "left" ? -50 : 50,
                behavior: "smooth"
            });
        }
    }
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
                    <TabToolIcon onClick={onControlClick} position="left" isDisabled={isDisabled} isRotate behavior={behavior} size={size} />
                    <TabList
                        onClick={selectTab}
                        size={size}
                        variant={variant}
                        behavior={behavior}
                        isDisabled={isDisabled}
                        options={tabsData}
                        activeTab={activeTab}
                        wrapperNavWidth={widthWrapperNav}
                        setDropdownTabs={setDropdownTabs}
                        scrollRef={containerRef} />
                    <TabToolIcon onClick={onControlClick}
                        position="right" behavior={behavior} isDisabled={isDisabled} size={size} />
                </div>
                {behavior === "dropdown" && (<span ref={divClickOutsideRef} className={clsx(styles.dropdownPosition)}>
                    <Dropdown isOpen={isOpenDropdown}>
                        <TabDropdownList onClick={selectTab} variant={variant} activeTab={activeTab} size={size} options={dropdownTabs} />
                    </Dropdown>
                </span>)}
                {!isDisabled && (<div className={clsx(styles.content)}>
                    activeTab {activeTab}
                </div>)}
            </div>
        </>
    )
};