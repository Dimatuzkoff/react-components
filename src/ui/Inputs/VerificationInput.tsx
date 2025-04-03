import clsx from "clsx";
import { FC, useRef, ChangeEvent } from "react";
import styles from "./VerificationInput.module.scss";

interface VerificationInputProps {
    size?: "64" | "80" | "96";
    amountInputs?: number;
    maxInputLength?: number;
    placeholder?: string;
}

const VerificationInput: FC<VerificationInputProps> = ({
    size = "64",
    amountInputs = 6,
    maxInputLength = 1,
    placeholder = "0"
}) => {
    const inputsRef = useRef<Array<HTMLInputElement | null>>(Array(amountInputs).fill(null));

    const onValueChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length === 1 && index < amountInputs - 1) {
            inputsRef.current[index + 1]?.focus();


        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };


    return (
        <>
            <div className={clsx(styles.verificationInputWrapper, {
                [styles.size64]: size === "64",
                [styles.size80]: size === "80",
                [styles.size96]: size === "96",
            })}
            >
                {Array.from({ length: amountInputs }).map((_, index) => (
                    <input key={index} onInput={(e) => onValueChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        ref={(el) => {
                            inputsRef.current[index] = el;
                        }}

                        maxLength={maxInputLength} placeholder={placeholder}
                        className={clsx(styles.singleVerificationInput, {
                            [styles.filled]: inputsRef.current[index]?.value
                        })} type="text" />
                ))}

            </div>
        </>
    )
}

export default VerificationInput;