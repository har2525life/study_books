import { Input as InputElement } from "@chakra-ui/react";

type PropsType = {
    isInvalid: boolean;
    placeholder: string;
    variant?: string;
    size?: string;
    type?: string;
};

const Input = ({
    isInvalid,
    placeholder,
    type = "text",
    size = "md",
    variant = "outline",
}: PropsType) => {
    return (
        <InputElement
            isInvalid={isInvalid}
            type={type}
            placeholder={placeholder}
            size={size}
            variant={variant}
            focusBorderColor="lime"
            errorBorderColor="pink.400"
            _placeholder={{ opacity: 1, color: "gray.400" }}
        />
    );
};

export default Input;
