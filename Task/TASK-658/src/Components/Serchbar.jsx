import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';


const Serchbar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const submitHandle = (e) => {

        e.preventDefault();
        
        if (!search.trim()) {
            toast.warning("Please enter something to search");
            return;
        }

        onSearch(search);
    };



    return (
        <form onSubmit={submitHandle} className='flex gap-10  w-full md:px-10 md:p-10 p-5'>
            <input type="text" className='border-2 w-full px-4 py-2 text-xl outline-none rounded' placeholder='serch anything...' value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <button className='active:scle-95 cursor-pointer border-2 px-4 py-2 rounded'>Serch</button>
        </form>
    );
}

export default Serchbar

