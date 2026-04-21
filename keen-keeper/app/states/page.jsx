"use client";

import { TimeLineFriendsContext } from "@/context/timeline.context";
import { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const States = () => {
    const { timelineFriends = [] } = useContext(TimeLineFriendsContext) ?? {};
    const callCount = timelineFriends.filter((friend) => friend.status === "calling").length;
    const textCount = timelineFriends.filter((friend) => friend.status === "texting").length;
    const videoCallCount = timelineFriends.filter((friend) => friend.status === "video_calling").length;

    const data = [

        { name: "call", value: callCount, fill: "#244d3f" },
        { name: "text", value: textCount, fill: "#128a3a" },
        { name: "video call", value: videoCallCount, fill: "#1e90ff" },

    ];
    return (
        <div className="lg:px-50 pt-20 px-2 mb-20">
            <h1 className="text-5xl font-bold">FriendShip Analytics</h1>
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm mt-10">
                <h1 className="text-gray-600 font-bold">By Interaction Type</h1>
                <div style={{ width: "100%", height: 380 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default States;