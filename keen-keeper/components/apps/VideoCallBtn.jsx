"use client";
import { RiVideoLine } from "react-icons/ri";
import { TimeLineFriendsContext } from '@/context/timeline.context';
import { useContext, useState } from 'react';
import { toast } from "react-toastify";

const VideoCallBtn = ({friend}) => {
    const {timelineFriends, setTimelineFriends, setVideoCalling} = useContext(TimeLineFriendsContext);
    const videoCallFriend = {
        id: friend.id,
        name: friend.name,
        picture: friend.picture,
        status: "video_calling"
    };

    const handleVideoCallBtn = () => {
        setVideoCalling(true);
        toast.success(`Video calling ${friend.name}...`);
        setTimelineFriends([...timelineFriends, videoCallFriend]);
    };

    return (
        <button onClick={handleVideoCallBtn} className="btn flex flex-col py-3 h-full ">
            <div className="text-2xl"> < RiVideoLine /></div>
            <p className="text-gray-500">Video</p>
        </button>
    );
};

export default VideoCallBtn;