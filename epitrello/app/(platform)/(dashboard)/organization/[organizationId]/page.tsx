import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

const OrganizationIdPage = () => {

    return (
        <div className="w-full">
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
        </div>
    );
};

export default OrganizationIdPage;