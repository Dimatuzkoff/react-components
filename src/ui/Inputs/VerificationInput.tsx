import clsx from "clsx";
import { FC, useRef, useState, ChangeEvent } from "react";
import styles from "./VerificationInput.module.scss";

interface VerificationInputProps {
    size?: "64" | "80" | "96";
    amountInputs?: number;
    maxInputLength?: number;
    placeholder?: string;
    helperText?: string;
    label?: string
}

const VerificationInput: FC<VerificationInputProps> = ({
    size = "64",
    amountInputs = 6,
    maxInputLength = 1,
    placeholder = "0",
    helperText,
    label
}) => {
    const inputsRef = useRef<Array<HTMLInputElement | null>>(Array(amountInputs).fill(null));
    const [values, setValues] = useState<string[]>(Array(amountInputs).fill(""));

    const onValueChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value.length === 1 && index < amountInputs - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <>
            <div className={clsx(styles.verificationInputWrapper)}>
                {label && <div className={clsx(styles.label)}>{label}</div>}
                <div
                    className={clsx(styles.inputContainer, {
                        [styles.size64]: size === "64",
                        [styles.size80]: size === "80",
                        [styles.size96]: size === "96",
                    })}
                >
                    {values.map((val, index) => (
                        <input
                            key={index}
                            value={val}
                            onChange={(e) => onValueChange(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => {
                                inputsRef.current[index] = el;
                            }}
                            maxLength={maxInputLength}
                            placeholder={placeholder}
                            className={clsx(styles.singleVerificationInput, {
                                [styles.filled]: val.length > 0,
                            })}
                            type="text"
                        />
                    ))}
                </div>
                {helperText && <div className={clsx(styles.helperText)}>{helperText}</div>}

            </div>
        </>
    );
};

export default VerificationInput;
