"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id: string) {
    await db.board.delete({
        where: {
            id
        }
    });

    revalidatePath("/organization/org_3395zKr70YMMA2e6OARvYsnV23X")
    
}