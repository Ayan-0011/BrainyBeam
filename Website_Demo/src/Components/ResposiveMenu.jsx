
import { Link, NavLink } from 'react-router-dom'

const ResposiveMenu = ({ openNav, setOpenNav }) => {

 

    return (
        <div className={`${openNav ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-50 flex h-screen w-[75%] flex-col gap-15 bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            
            <div>
               

                <nav className='mt-12'>
                    <ul className='flex flex-col gap-7 text-2xl font-semibold'>
                        <li><NavLink to={'/'} onClick={() => setOpenNav(false)} className="cursor-pointer">Home</NavLink></li>
                        <li><NavLink to={'/hero'} onClick={() => setOpenNav(false)} className="cursor-pointer">Heros</NavLink></li>
                        <li><NavLink to={'/about'} onClick={() => setOpenNav(false)} className="cursor-pointer">About</NavLink></li>
                       
                    </ul>
                    
                </nav>
            </div>
        </div>
    )
}

export default ResposiveMenu
