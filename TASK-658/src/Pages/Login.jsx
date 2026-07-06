import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Login = () => {

    const redirect = useNavigate()

    const [obj_cate, setData] = useState({
        email: "",
        password: "",
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate, [e.target.name]: e.target.value });
        console.log(obj_cate);
    }

    const submitHandel = async (e) => {
        e.preventDefault();

        if (obj_cate.email.trim() === "") {
            toast.error("Enter Email");
            return
        }


        if (obj_cate.password.trim() === "") {
            toast.error("Enter Password");
            return
        }


        const obj = await axios.get(`http://localhost:3000/user?email=${obj_cate.email}`);
        //console.log(obj.data);
        if (obj.data.length > 0) {
            if (obj.data[0].password == obj_cate.password) {
                //session created
                sessionStorage.setItem('s_aid', obj.data[0].id);
                sessionStorage.setItem('s_email', obj.data[0].email);

                toast.success('Login Success ');
                redirect('/');
            }
            else {
                toast.error('Login Failed Due to Wrong Password');
                return false;
            }
        }
        else {
            toast.error('Login Failed Due to Wrong Email');
            return false;
        }
        return false;
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5 py-10">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Login to your account
                    </p>
                </div>

                <form onSubmit={submitHandel} className="space-y-5">

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input type="email" name="email" value={obj_cate.email} onChange={changeHandel} placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition" />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input type="password" name="password" value={obj_cate.password} onChange={changeHandel} placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition" />
                    </div>

                    <div className="flex justify-between items-center text-sm">

                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="/forget"
                            className="text-indigo-600 hover:text-indigo-800 font-medium" >
                            Forgot Password?
                        </Link>

                    </div>

                    <button type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition" >
                        Login
                    </button>

                </form>

                <div className="mt-6 text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register"
                        className="text-indigo-600 font-semibold hover:underline" >
                        Register
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Login
