"use client"

const Button = () => {
    return (
        <div onClick={() => alert('Button clicked!')} className="bg-blue-500 w-[100px] m-3 text-white px-4 py-2 rounded cursor-pointer">
            Click me
        </div>
    )
}

export default Button
