import { promise, z } from "zod";

export type FieldErrors<T> = {
    [K in keyof T]?: string[];
};

export type ActionState<TInput, Toutput> = {
    fieldErrors?: FieldErrors<TInput>;
    error?: string | null;
    data?: Toutput;
};

export const createSafeAction = <TInput, Toutput>(
    schema: z.Schema<TInput>,
    handler: (validatedData: TInput) => Promise<ActionState<TInput, Toutput>>
) => {
    return async (data: TInput): Promise<ActionState<TInput, Toutput>> => {
        const validatedResult = schema.safeParse(data);
        if (!validatedResult.success) {
            return {
                fieldErrors: validatedResult.error.flatten().fieldErrors as FieldErrors<TInput>,
            }
        }

        return handler(validatedResult.data);
    }
}