import { Medal } from "lucide-react";

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-blue-700 text-black rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2"/>
                    No 1 task management
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-black pb-4">
                    EpiTrello helps team move
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-700 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    work forward.
                </div>
            </div>
            <div className="text-sm md:text-xl text-black mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
                Colaborate, manage project and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with EpiTrello.
            </div>
        </div>
    );
};

export default MarketingPage;