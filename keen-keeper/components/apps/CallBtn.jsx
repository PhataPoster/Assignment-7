"use client";
import { TimeLineFriendsContext } from '@/context/timeline.context';
import { useContext, useState } from 'react';
import { TbPhoneCall } from 'react-icons/tb';

const CallBtn = ({friend}) => {

    
    const {timelineFriends, setTimelineFriends, setCalling} = useContext(TimeLineFriendsContext);
    // console.log(timelineFriends)
    const callFriend ={
        id: friend.id,
        name: friend.name,
        picture: friend.picture,
        status: "calling"
    }
    const handleCallBtn = () => {
        setCalling(true);
        alert("Calling...");
        setTimelineFriends([...timelineFriends, callFriend]);
        // console.log(timelineFriends);
    };
    return (
        <button onClick={handleCallBtn} className="btn flex flex-col py-3 h-full">
            <div className="text-2xl"> <TbPhoneCall /></div>
            <p className="text-gray-500">Call</p>
        </button>
    );
};

export default CallBtn;