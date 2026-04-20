import Banner from "@/components/Banner";
import Cards from "@/components/Cards";

const page = async () => {
    const res= await fetch("http://localhost:3000/data.json");
    const friends = await res.json();
    // console.log(friends);
    return (
        <div className="lg:px-50 pt-8 px-2 ">
            <Banner />
            <p className="font-bold mt-10 text-lg">Your Friends</p>
            <Cards friends={friends} />


        </div>
    );
};

export default page;