import { FaPlus } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex flex-col gap-4 justify-between items-center text-center">
            <h1 className="text-5xl">Friends to keep close in your life</h1>
            <p className="text-gray-500 text-sm">Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />
                relationships that matter most.</p>
            <button className="btn bg-[#244d3f] text-white font-bold w-fit mt-4"><FaPlus />Add a Friend</button>
        </div>
    );
};

export default Banner;