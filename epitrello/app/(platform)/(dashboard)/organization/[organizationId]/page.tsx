import { create } from "@/actions/create-board";

const OrganizationIdPage = () => {

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