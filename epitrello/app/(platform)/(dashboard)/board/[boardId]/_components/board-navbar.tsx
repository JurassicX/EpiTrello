import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

interface BoardNavbarProps {
    id: string;
    
}

export const BoardNavbar = async ({
    id,
}: BoardNavbarProps) => {
    const { orgId } = await auth();

    const board = await db.board.findUnique({
        where: {
            id,
            orgId: orgId!,
        },
    });

    return (
        <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
            Navbar
        </div>
    );
};