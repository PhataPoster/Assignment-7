"use client";
import { RiMessage2Line } from "react-icons/ri";
import { TimeLineFriendsContext } from '@/context/timeline.context';
import { useContext, useState } from 'react';


const TextBtn = ({friend}) => {
    const {timelineFriends, setTimelineFriends, setTexting} = useContext(TimeLineFriendsContext);

    const textFriend ={
        id: friend.id,
        name: friend.name,
        picture: friend.picture,
        status: "texting"
    }
   
    const handleTextBtn = () => {
        setTexting(true);
        alert("Texting...");
        setTimelineFriends([...timelineFriends, textFriend]);
    };

    return (
        <button onClick={handleTextBtn} className="btn flex flex-col py-3 h-full">
            <div className="text-2xl"> < RiMessage2Line /></div>
            <p className="text-gray-500">Text</p>
        </button>
    );
};

export default TextBtn;