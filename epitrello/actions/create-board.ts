"use server";

import { z, type ZodError } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: { [k: string]: string[] },
  message?: string | null,
};

const CreateBoard = z.object({
  title: z.string().min(3, { message: "Minimum length of 3 letters is required!" })
});

function zodErrorToFieldErrors(err: ZodError): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const issue of err.issues) {
    const key = issue.path.length ? String(issue.path[0]) : "_errors";
    if (!out[key]) out[key] = [];
    out[key].push(issue.message);
  }
  return out;
}

export async function create(prevState: State, formData: FormData): Promise<State> {
  // coerce form value to string (formData.get can return null or File)
  const titleValue = String(formData.get("title") ?? "");

  const parsed = CreateBoard.safeParse({ title: titleValue });

  if (!parsed.success) {
    return {
      errors: zodErrorToFieldErrors(parsed.error),
      message: "Missing or invalid fields."
    };
  }

  const { title } = parsed.data;

  try {
    await db.board.create({
      data: { title }
    });
  } catch (err) {
    return { message: "Database error" };
  }

  // cause the page to re-render on the server and redirect the user
  revalidatePath("/organization/org_3395zKr70YMMA2e6OARvYsnV23X");
  redirect("/organization/org_3395zKr70YMMA2e6OARvYsnV23X");

  // unreachable (redirect throws), but keep return to satisfy TS typing
  return { message: null };
}
