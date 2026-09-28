import React, { useEffect, useState } from 'react'
import './Scroll.css'
import {MoveUp, MoveUpIcon} from 'lucide-react'

const Scrolling = () => {
    const [showbutton, setShowbutton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowbutton(true)
            } else {
                setShowbutton(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const scrolling =()=>{
        window.scroll({
            top:0,
            behavior:'smooth',
        })
    }
    return (
        <div>
            {
                showbutton && (
                    <button className='scroll-top-btn' onClick={scrolling}> <MoveUpIcon size={22} /> </button>
                )
            }
        </div>
    )
}

export default Scrolling
