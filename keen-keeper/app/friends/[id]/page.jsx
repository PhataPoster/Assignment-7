import path from "path";
import { readFile } from "fs/promises";
import Image from "next/image";
import { TbPhoneCall } from "react-icons/tb";
import {
    RiArchiveLine,
    RiDeleteBinLine,
    RiMessage2Line,
    RiNotificationSnoozeLine,
    RiVideoLine,
} from "react-icons/ri";

const FriendsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileContents = await readFile(filePath, "utf8");
    const friends = JSON.parse(fileContents);
    // console.log(friends);
    const friend = friends.find(friend => friend.id == id);

    // console.log(friend);
    return (
        <div className="grid grid-cols-1 gap-3 px-2 py-8 lg:grid-cols-5 lg:grid-rows-7 lg:px-50">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-2 lg:row-span-4 p-4">
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src={friend.picture} alt={friend.name} width={80} height={80} className="rounded-full" />
                    <h1 className="text-lg font-bold">{friend.name}</h1>
                    <p className="text-gray-500 text-sm">{friend.days_since_contact}d ago</p>

                    <div className="flex gap-2 justify-center items-center font-bold">
                        {friend.tags.map((tag, index) => (
                            <div key={index} className="p-2 bg-green-300 rounded-full flex justify-center items-center">{tag}</div>
                        ))}
                    </div>

                    <div className={`${friend.status == "almost_due" ? "bg-yellow-400 text-white" : friend.status == "overdue" ? "bg-red-400 text-white" : "bg-[#244d3f] text-white"} rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide`}>{friend.status}</div>

                    <p className="pt-2 text-center text-sm italic text-gray-500">{friend.bio}</p>
                    <p className="text-xs text-gray-400">Preferred: email</p>

                </div >
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-1 lg:row-span-2">
                <div className="flex h-full flex-col items-center justify-center gap-1">
                    <h1 className="text-2xl font-bold text-[#244d3f]">{friend.days_since_contact}</h1>
                    <p className="text-gray-500 text-sm">Days Since Contact</p>
                </div>
            </div>
            <div className=" rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-1 lg:row-span-2">
                <div className="flex h-full flex-col items-center justify-center gap-1">
                    <h1 className="text-2xl font-bold text-[#244d3f]">{friend.goal}</h1>
                    <p className="text-gray-500 text-sm">Goal (Days)</p>
                </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-1 lg:row-span-2">
                <div className="flex h-full flex-col items-center justify-center gap-1">
                    <h1 className="text-2xl font-bold text-[#244d3f]">{friend.next_due_date}</h1>
                    <p className="text-gray-500 text-sm">Next Due</p>
                </div>
            </div>
            <div className="flex justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-3 lg:row-span-2">

                <div className="flex flex-col gap-2 justify-center">
                    <h1 className="text-gray-500">
                        Relationship Goal
                    </h1>
                    <p className="text-sm">Connect every <span className="font-bold">{friend.goal} days</span></p>
                </div>
                <button className="btn btn-sm border ">Edit</button>

            </div>
            <button className="flex btn justify-center items-center gap-1 border border-gray-200 bg-white px-4 py-2 text-gray-700 shadow-sm lg:col-span-2 lg:row-span-1 h-full">
                <RiNotificationSnoozeLine />
                <p>Snooze 2 Weeks</p>
            </button>
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-3 lg:row-span-3">
                <p className="font-medium">
                    Quick Check-In
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2 h-full">
                    <button className="btn flex flex-col py-3 h-full">
                        <div className="text-2xl"> <TbPhoneCall /></div>
                        <p className="text-gray-500">Call</p>
                    </button>
                    <button className="btn flex flex-col py-3 h-full">
                        <div className="text-2xl"> < RiMessage2Line /></div>
                        <p className="text-gray-500">Text</p>
                    </button>
                    <button className="btn flex flex-col py-3 h-full ">
                       <div className="text-2xl"> < RiVideoLine /></div>
                        <p className="text-gray-500">Video</p>
                    </button>
                </div>
            </div>
            <button className="flex btn justify-center items-center gap-1 border border-gray-200 bg-white px-4 py-2 text-gray-700 shadow-sm lg:col-span-2 lg:row-span-1 h-full">
                <RiArchiveLine />
                <p>Archive</p>
            </button>

            <button className="flex btn justify-center items-center gap-1 border border-gray-200 bg-white px-4 py-2 text-red-500 shadow-sm lg:col-span-2 lg:row-span-1 h-full">
                <RiDeleteBinLine />
                <p>Delete</p>
            </button>
        </div>
    );
};

export default FriendsDetailsPage;