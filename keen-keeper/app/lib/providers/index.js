import TimelineFriendsProvider from "@/context/timeline.context";


const Providers = ({ children }) => {
    return (
        <TimelineFriendsProvider>
            {children}
        </TimelineFriendsProvider>
    );
};

export default Providers;