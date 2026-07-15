import { TrainFront, CalendarDays } from "lucide-react";
import train from '../assets/img/newtrain.svg'

const Banner = () => {


    return (
        <div>
            <section className="max-w-7xl mx-auto mt-20 px-5 py-10">

                <div className="flex items-center ps-10 md:ps-0 gap-3 mb-6">
                    <div>
                        <img src={train} alt="" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">
                            Book trains for festivals
                        </h2>
                        <p className="text-gray-500">
                            Book now to get confirmed ticket
                        </p>
                    </div>
                </div>


                <div className="bg-gray-50 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <h3 className="text-xl font-medium whitespace-nowrap">
                            Get ₹100 off using code
                            <span className="text-green-600 font-bold ps-1">
                                FESTIVE
                            </span>
                        </h3>

                        <div className="flex gap-4">
                            <div className="w-38 h-15 pt-1 text-center border-1  border-b-red-500 border-s-red-500 border-blue-500 rounded-xl ">
                                <h1 className="font-semibold">Aug</h1>
                                <p className="text-sm font-medium text-orange-500">Independence Day </p>
                            </div>
                            <div className="w-38 h-15 pt-1 text-center border-1 border-blue-500 border-t-red-500 border-e-red-500 rounded-xl ">
                                <h1 className="font-semibold">Sep</h1>
                                <p className="text-sm text-blue-600 font-medium">Janmashtami </p>
                            </div>  
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="bg-red-300 hover:bg-red-400 transition text-black font-semibold px-10 py-4 rounded-full">
                            Book trains now
                        </button>

                        <p className="text-gray-400 mt-3 text-sm">
                            Authorised IRCTC partner
                        </p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Banner
