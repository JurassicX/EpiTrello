interface FormInputProps {
    errors?: {
        title?: string[];
    }
}

export const FormInput = ({ errors }: FormInputProps) => {
    return (
        <div>
            <input
                id="title"
                name="title"
                required
                placeholder=" Enter a board name."
                className="w-[50%] border-black border rounded-sm p-1"
            />
            {errors?.title ? (
                <div>
                    {errors.title.map((error: string) => (
                        <p key={error} className="text-rose-500">
                            {error}
                        </p>                        ))}
                </div>
            ) : null}
        </div>
    );
};