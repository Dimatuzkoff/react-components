import { ReactNode, FC, useState } from "react";
import styles from "./InfoTooltip.module.scss";
import icon from "../../assets/icons/inputInfoIcon.svg";

interface InfoTooltipProps {
    children: ReactNode;
}

const InfoTooltip: FC<InfoTooltipProps> = ({ children }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    return (
        <>
            <div
                className={styles.infoTooltipWrapper}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
            >
                <img
                    src={icon}
                    alt="info"
                />
                {isTooltipVisible && (
                    <div className={styles.tooltipContainer}>
                        <span className={styles.tooltip}>
                            <span className={styles.tooltipText}>{children}</span>
                        </span>
                        <span className={styles.tooltipArrow}></span>
                    </div>
                )}
            </div>
        </>
    )
};

export default InfoTooltip
