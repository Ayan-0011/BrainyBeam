import Filtered from "@/components/Filtered";



export default async function page() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return (
        <div>
            <div className="text-center bg-gray-800 text-text-white p-5 text-2xl">
                <h1>User Page</h1>
            </div>
            <Filtered users={data}/>
        </div>
    )
}
