"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

export const Form = () => {
    return (
        <form action={create}>
            <input
                id="title"
                name="title"
                required
                placeholder=" Enter a board name."
                className="w-[75%] border-black border rounded-sm p-1"
            />
            <Button type="submit">
                Search
            </Button>
        </form>
    );
};