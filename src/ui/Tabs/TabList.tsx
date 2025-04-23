//react
import { FC, useState, RefObject, Dispatch, SetStateAction } from "react";
//hooks
import { useTabsVisibility } from "../../hooks/useTabsVisibility"
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
    onClick: (label: string) => void
    setDropdownTabs: Dispatch<SetStateAction<TabsData[]>>;
    options: TabsData[],
    size?: string,
    variant?: string
    behavior: string,
    activeTab?: string,
    wrapperNavWidth?: number,
    isDisabled?: boolean,
    scrollRef: RefObject<HTMLDivElement | null>;
}

const settings = {
    fontSize: 14,
    paddingX: 8,
    fontFamily: "Inter",
    fontWeight: 600,
}

export const TabList: FC<TabListProps> = ({
    onClick,
    setDropdownTabs,
    options,
    size,
    variant,
    behavior,
    activeTab,
    wrapperNavWidth,
    isDisabled,
    scrollRef
}) => {
    const [visibleTabs, setVisibleTabs] = useState<TabsData[]>(options);


    useTabsVisibility({
        wrapperNavWidth,
        behavior,
        options,
        settings,
        setVisibleTabs,
        setDropdownTabs,
    });

    return (
        <>
            <nav ref={scrollRef} className={clsx(styles.tabsWrapper, {
                [styles.size32]: size === "32",
                [styles.size36]: size === "36",
                [styles.size40]: size === "40",
                [styles.scrollable]: behavior === "scrollable",
                [styles.dropdown]: behavior === "dropdown",
                [styles.arrows]: behavior === "arrows",
            })}>
                {visibleTabs?.map((option, index) => (
                    <TabItem
                        key={index}
                        variant={variant}
                        isActiveTab={activeTab === option.label}
                        onClick={onClick}
                        option={option}
                        size={size}
                        isDisabled={isDisabled} />
                ))}
            </nav>
        </>
    )
};