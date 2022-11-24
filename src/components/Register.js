import React, {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Logo from   "../images/netflix-logo.png"
import { Link } from "react-router-dom"
import { Context } from "./UserList"



 

function Register() {

    const {users, setUsers} = useContext(Context);

    const navigate = useNavigate()

    const [data, setData] = useState({
        user: '',
        pass: ''
      })


    const handleSubmit = e => {
        
        
        e.preventDefault()


    
      }
    
    return ( 
    <div>   
        <div className="border-b border-gray-500 flex items-center justify-between">
            <img src={Logo} alt="" className="w-[14rem] p-3 " />
            <Link to={"/"}><div className="mr-5 text-xl hover:underline-offset-auto">Sign In</div></Link> 
        </div>
            <div className="h-[100vh] mt-[5rem] ">
                <div className="w-[28rem] m-auto text-center border p-8 mt-10 rounded">
                    <form action="" className="flex flex-col w-[90%] gap-3 mt-4 justify-center m-auto" onSubmit={handleSubmit}>
                        <h1 className="text-[2.5rem] text-left mb-8">Register</h1>
                        <input type="text" 
                        placeholder="Username"
                        value={data.user}
                        className="p-3 rounded border"/>
                        <input type="password" placeholder="Password" 
                        className="p-3 rounded border text-black"
                        value={data.pass}
                        />
                        <button className="p-3 rounded bg-red-600 my-8 text-white">Register</button>
                        <Link to={"/sign-in"}><p className="text-right text-gray-500 hover:text-black">Go back to Sign In</p></Link>
                        <p className="text-left text-gray-500 mt-5">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    </form>
                </div>
            </div>
        
    </div> );
}

export default Register;