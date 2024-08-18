import { Button as ButtonElement } from "@chakra-ui/react";

type PropsType = {
    text: string;
    type: "button" | "submit" | "reset" | undefined;
    colorSchema: string;
    variant: string;
    size?: string;
    styles?: string;
};

const Button = ({
    text,
    type,
    colorSchema,
    variant,
    styles,
    size = "md",
}: PropsType) => {
    return (
        <ButtonElement
            type={type}
            className={styles}
            colorScheme={colorSchema}
            size={size}
            variant={variant}
        >
            {text}
        </ButtonElement>
    );
};

export default Button;
