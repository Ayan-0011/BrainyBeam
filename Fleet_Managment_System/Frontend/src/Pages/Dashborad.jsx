import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Admin_dash from "./Admin/Admin_dash";
import Driver_dash from "./Driver/Driver_dash";
import Fleet_dash from "./Fleet_Manager/Fleet_dash";
import Dispatcher_dash from "./Dispatcher/Dispatcher_dash";



const Dashboard=()=>{

    const [user,setUser]=useState(null);

    useEffect(()=>{

        fetchUser();
        
    },[]);

    const fetchUser = async()=>{
        try{
            const res = await axios.get( "http://localhost:3000/api/auth/me",
                {
                    withCredentials:true
                }
            );
            setUser(res.data.user);
            //console.log(setUser)
        }
        catch(err){
            console.log(err.message);
        }
    }

    if(!user){
        return <h2>Loading...</h2>
    }

    return(
        <>
        <Navbar user={user}/>

        {
            user.role==="admin" && <Admin_dash />
        }
        {

            user.role==="fleet_manager" && <Fleet_dash/>

        }
        {

            user.role==="dispatcher" && <Dispatcher_dash />

        }
        {

            user.role==="driver" &&  <Driver_dash/>

        }
        </>

    )

}

export default Dashboard;