import { Select as SelectElement } from "@chakra-ui/react";

type PropsType = {
    placeholder: string;
    options: string[];
    onChange: (e) => void;
    variant?: string;
    size?: string;
    // icon?: string;
};

export const Select = ({
    placeholder,
    options,
    onChange,
    variant = "outline",
    size = "md",
}: // icon,
PropsType) => {
    return (
        <SelectElement
            onChange={onChange}
            placeholder={placeholder}
            size={size}
            variant={variant}
            // icon={icon}
        >
            {options.map((op) => (
                <option key={op} value={op}>
                    {op}
                </option>
            ))}
        </SelectElement>
    );
};
