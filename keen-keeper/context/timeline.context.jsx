"use client";
import { createContext, useState } from "react";

export const TimeLineFriendsContext = createContext();

const TimelineFriendsProvider = ({ children }) => {

    const [timelineFriends,setTimelineFriends] = useState([]);
    const [calling, setCalling] = useState(false);
     const [texting, setTexting] = useState(false);
     const [videoCalling, setVideoCalling] = useState(false);

    const data ={
        timelineFriends,
        setTimelineFriends,
        calling,
        setCalling,
        texting,
        setTexting,
        videoCalling,
        setVideoCalling
    };

    return (
        
        <TimeLineFriendsContext.Provider value={data}>{children}</TimeLineFriendsContext.Provider>
    );
};

export default TimelineFriendsProvider;