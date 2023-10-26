import React from "react";


export default function Login(){

    function routeAndLogin(){
        console.log(document.getElementById("username").value)
    }

    return(<>
        
        <div className="flex flex-col h-screen w-screen justify-center items-center">
                <div className="text-6xl m-6">gold betting</div>
                <div className="flex justify-center items-center">
                    <input className="shadow border-2 rounded-xl h-12 p-2 w-72" id="username" placeholder="insert your username..
                    " type="text"></input>
                    <button className=" shadow ease-in duration-300 h-10 justify-self-center border rounded-xl h-12 w-20 m-1 hover:bg-black hover:text-white " onClick={routeAndLogin} >login</button>
                </div>
        
        </div>
    </>)
}