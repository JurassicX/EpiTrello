import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

import { db } from "@/lib/db";

const BoardIdLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { boardId: string };
}) => {
    const { orgId } = await auth();

    if (!orgId) {
        redirect("/select-org");
    }

    const board = await db.board.findUnique({
        where: {
            id: params.boardId,
            orgId,
        },
    });

    if (!board) {
     notFound();
    }

    return (
        <div
            style={{ backgroundImage: `url(${board.imageFullUrl})` }}
            className="relative h-full bg-no-repeat bg-center bg-cover"
        >
            <main className="relative pt-27 h-full">
                {children}
            </main>
        </div>
    );
};

export default BoardIdLayout;