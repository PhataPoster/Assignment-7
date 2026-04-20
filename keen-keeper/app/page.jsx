import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import path from "path";
import { readFile } from "fs/promises";

const page = async () => {
    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileContents = await readFile(filePath, "utf8");
    const friends = JSON.parse(fileContents);

    return (
        <div className="lg:px-50 pt-8 px-2 ">
            <Banner />
            <p className="font-bold mt-10 text-lg">Your Friends</p>
            <Cards friends={friends} />


        </div>
    );
};

export default page;