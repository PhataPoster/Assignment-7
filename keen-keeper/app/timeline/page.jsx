"use client";
import { TimeLineFriendsContext } from "@/context/timeline.context";
import Image from "next/image";
import { useContext, useState } from "react";
import Call from "../../assets/call.png";
import Text from "../../assets/text.png";
import Video from "../../assets/video.png";


const Timeline = () => {
    const { timelineFriends = [] } = useContext(TimeLineFriendsContext) ?? {};
    const [filterStatus, setFilterStatus] = useState("");

    const filteredFriends = filterStatus
        ? timelineFriends.filter((friend) => friend.status === filterStatus)
        : timelineFriends;

    const formattedDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',

        year: 'numeric'
    });
    return (
        <div className="lg:px-50 pt-20 px-2 mb-20">
            <h1 className="text-2xl font-bold">Timeline</h1>
            <label className="select mt-4">
                <select value={filterStatus} onChange={(event) => setFilterStatus(event.target.value)}>
                    <option value="">Filter timeline</option>
                    <option value="calling">Call</option>
                    <option value="texting">Text</option>
                    <option value="video_calling">Video</option>
                </select>
            </label>

            {filteredFriends.length === 0 ? (
                <div className="p-20 shadow-xl rounded-lg bg-white text-center mt-4">
                    <h1 className="text-lg font-bold">No interactions yet.</h1>
                </div>
            ) : (
                filteredFriends.map((friend,index) => <div key={index} className="p-4 shadow-xl rounded-lg bg-white flex flex-col gap-4 mt-4">
                    <div className="flex gap-8">
                        {
                            friend.status == "calling" ? <Image src={Call} alt={friend.status} width={50} height={50} /> : friend.status == "texting" ? <Image src={Text} alt={friend.status} width={50} height={50} /> : friend.status == "video_calling" ? <Image src={Video} alt={friend.status} width={50} height={50} /> : null
                        }
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg font-bold">{friend.status} with {friend.name}</h1>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                </div>)
            )}

        </div>
    );
};

export default Timeline;