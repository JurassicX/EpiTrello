"use server";

import { z } from "zod"

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null;
};

const CreateBoard = z.object({
    title: z.string().min(3, {
        message:"Minimum lenght of 3 letters is requiered!"
    })
});

export async function create(formData: FormData) {
    const { title } = CreateBoard.parse({
        title: formData.get("title"),
    });
    

    await db.board.create({
        data: {
            title,
        }
    });

    revalidatePath("/organization/org_3395zKr70YMMA2e6OARvYsnV23X")
}