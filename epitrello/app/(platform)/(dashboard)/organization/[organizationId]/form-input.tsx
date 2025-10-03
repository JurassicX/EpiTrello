"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";
import { FormButton } from "./form-button";

interface FormInputProps {
    errors?: {
        title?: string[];
    }
}

export const FormInput = ({ errors }: FormInputProps) => {
    const { pending } = useFormStatus();

    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-2">
                <div className="flex md:w-[50%] w-full">
                    <Input
                        id="title"
                        name="title"
                        required
                        placeholder=" Enter a board name/title."
                        disabled={pending}
                    />
                </div>
                <FormButton />
            </div>
            {errors?.title ? (
                <div>
                    {errors.title.map((error: string) => (
                        <p key={error} className="text-rose-500">
                            {error}
                        </p>                        
                    ))}
                </div>
            ) : null}
        </div>
    );
};