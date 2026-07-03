import React from 'react'

const State = () => {
    return (
        <div>
            <section className="bg-zinc-750 py-20">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">

                    <div className="bg-zinc-900 p-8 rounded-2xl text-center">
                        <h2 className="text-4xl font-bold text-red-600">50+</h2>
                        <p className="text-gray-300 mt-2">Heroes</p>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-2xl text-center">
                        <h2 className="text-4xl font-bold text-red-600">30+</h2>
                        <p className="text-gray-300 mt-2">Movies</p>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-2xl text-center">
                        <h2 className="text-4xl font-bold text-red-600">10+</h2>
                        <p className="text-gray-300 mt-2">Teams</p>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-2xl text-center">
                        <h2 className="text-4xl font-bold text-red-600">80+</h2>
                        <p className="text-gray-300 mt-2">Years</p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default State
