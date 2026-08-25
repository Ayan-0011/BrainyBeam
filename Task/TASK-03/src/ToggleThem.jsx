import React from 'react'
import { useState } from 'react'

const ToggleThem = () => {

    const [darkmode, setDarkmode] = useState(false);


    const swich = ()=>{
        setDarkmode(!darkmode)
    }


    return (
        <div className='w-90 flex justify-center align-center'>
            <button onClick={swich} className='p-3 m-3 bg-blue-500 active:scale-95'>{darkmode ? "swich to light mode" : "switch to darkmode"}</button>
        </div>
    )
}

export default ToggleThem
