import Image from "next/image";


const Cards = ({ friends }) => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4 mb-20">
            {
                friends.map(friend =><div key={friend.id} className="p-4 flex flex-col justify-center items-center gap-2 rounded-xl shadow-md bg-white h-full">
                    <div className="p-8 flex flex-col justify-center items-center gap-2">
                    <Image src={friend.picture} alt={friend.name} width={80} height={80} className="rounded-full" />
                    <h1 className="text-lg font-bold">{friend.name}</h1>
                    <p className="text-gray-500 text-sm">{friend.days_since_contact}d ago</p>
                    
                    <div  className="flex gap-2 justify-center items-center font-bold">
                        {friend.tags.map((tag, index) => (
                                <div key={index} className="p-2 bg-green-300 rounded-full flex justify-center items-center">{tag}</div>
                        ))}
                    </div>

                    <div className={`${friend.status == "almost_due"? "bg-yellow-400 text-white":friend.status == "overdue"? "bg-red-400 text-white" : "bg-[#244d3f] text-white"} p-2 rounded-full font-bold`}>{friend.status}</div>
                    
                    </div >
                </div> )
            }
        </div>
    );
};

export default Cards;