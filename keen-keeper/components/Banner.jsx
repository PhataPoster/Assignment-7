import { FaPlus } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex w-full flex-col gap-4 text-center mt-20">
            <h1 className="text-5xl">Friends to keep close in your life</h1>
            <p className="text-gray-500 text-sm">Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />
                relationships that matter most.</p>
            <button className="btn bg-[#244d3f] text-white font-bold w-fit mt-4 mx-auto"><FaPlus />Add a Friend</button>
            <div className="grid w-full grid-cols-1 gap-4 py-10 border-b border-gray-300 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-8 flex flex-col justify-center items-center gap-2 rounded-xl shadow-md bg-white">
                    <h1 className="text-2xl font-bold">10</h1>
                    <p className="text-gray-500">Total Friends</p>
                </div >
                <div className="p-8 flex flex-col justify-center items-center gap-2 rounded-xl shadow-md bg-white">
                    <h1 className="text-2xl font-bold">3</h1>
                    <p className="text-gray-500">On Track</p>
                </div>
                <div className="p-8 flex flex-col justify-center items-center gap-2 rounded-xl shadow-md bg-white">
                    <h1 className="text-2xl font-bold">6</h1>
                    <p className="text-gray-500">Needs Attention</p>
                </div>
                <div className="p-8 flex flex-col justify-center items-center gap-2 rounded-xl shadow-md bg-white">
                    <h1 className="text-2xl font-bold">12</h1>
                    <p className="text-gray-500">Interactions This Month</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;