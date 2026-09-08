import Link from "next/link";
import { profiles } from "./data";



const page = () => {


    return (
        <div className="min-h-[calc(100vh-80px)] bg-gray-50">
            <h1 className="text-3xl font-bold text-black py-4 text-center">All user profile page </h1>
            {
                profiles.map((profile, index) => (
                    <div key={index} className="bg-gray-200 p-4 m-5 rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold text-black">{profile.name}</h2>
                            <p className="text-gray-600">{profile.role}</p>
                        </div>

                        <Link href={`/profile/${profile.name}`} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            View Profile Details
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default page
