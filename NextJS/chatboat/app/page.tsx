import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-end justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl py-20 px-16 bg-white dark:bg-black">
        <input type="text" className="w-[80%] rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-100 dark:focus:ring-zinc-400 dark:focus:ring-offset-black" placeholder="Type your message here..." />
        <button className="text-white py-2 px-4 rounded-lg bg-gray-600 mx-5">submit</button>
      </main>
    </div>
  );
}
