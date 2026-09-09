import { profiles } from "../data";

type PageProps = {
    params: Promise<{ name: string }>;
};

const page = async ({ params }: PageProps) => {

    const paramsname = await params;
    const name = paramsname.name;

    const user = profiles.find((value:any) => value.name === name);

    if (!user) {
        return (
            <div className="min-h-[calc(100vh-80px)] bg-gray-50">
                <h1 className="text-3xl font-bold text-black py-4 text-center">User not found</h1>
            </div>
        )
    }


    return (
        <div className="min-h-[calc(100vh-80px)] bg-gray-50">
            <div className="p-5 capitalize text-center">
                <h1 className="text-3xl font-bold text-black py-4 ">Profile page of {user?.name}</h1>
                <p className="text-gray-600 ">Email: {user?.email}</p>
                <p className="text-gray-600 ">Role: {user?.role}</p>
                <p className="text-gray-600 ">Bio: {user?.bio}</p>
            </div>
        </div>
    )
}

export default page
