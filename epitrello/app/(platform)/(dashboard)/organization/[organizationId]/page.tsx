import { db } from "@/lib/db";

const OrganizationIdPage = () => {
    async function create(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;

        db.board.create({
            data: {
                title,
            }
        });
    }

    return (
        <div className="w-full">
            <form action={create} className="">
                <input
                    id="title"
                    name="title"
                    required
                    placeholder=" Search a board."
                    className="w-full border-black border rounded-sm p-1"
                />
            </form>
        </div>
    );
};

export default OrganizationIdPage;