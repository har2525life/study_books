import React, { useState } from "react";
import Input from "../src/ui/input";
import Button from "../src/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
};

function Login() {
    const { register, handleSubmit } = useForm<Inputs>();

    const [isInValid, setIsInValid] = useState(false);

    const loginSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center">
            <form
                className="size-2/3 bg-red-200"
                onSubmit={handleSubmit(loginSubmit)}
            >
                <div>
                    <h1>login</h1>
                </div>
                <div className="space-y-4">
                    <Input
                        isInvalid={isInValid}
                        placeholder="email"
                        type="email"
                        {...register("email")}
                    />
                    <Input
                        isInvalid={isInValid}
                        placeholder="password"
                        type="password"
                        {...register("password")}
                    />
                    <Button
                        type="submit"
                        styles="w-full"
                        text="login"
                        colorSchema="teal"
                        variant="solid"
                    />
                </div>
            </form>
        </div>
    );
}

export default Login;
