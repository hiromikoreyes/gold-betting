import React from "react";


export default function Login(){


    function darkSite(){

        //change title
        document.getElementById("title").classList.remove("text-6xl")
        document.getElementById("title").classList.add("text-3xl")
        document.getElementById("title").classList.add("text-white")

        //change login button
        document.getElementById("login").classList.add("bg-black")
        document.getElementById("login").classList.add("text-white")

        //change background col
        document.getElementById("main").classList.add("bg-black")
        document.getElementById("title").textContent="inspired by my friend"


    }
    function normalSite(){

        //change title
        document.getElementById("title").textContent="gold betting"
        document.getElementById("title").classList.remove("text-white")
        document.getElementById("title").classList.remove("text-3xl")
        document.getElementById("title").classList.add("text-6xl")


        //change login button
        document.getElementById("login").classList.remove("bg-black")
        document.getElementById("login").classList.remove("text-white")

        //change background col
        document.getElementById("main").classList.remove("bg-black")
    }


    function routeAndLogin(){
        console.log(document.getElementById("username").value)
        location.href="/home/" + document.getElementById("username").value
    }

    return(<>
        <div id="main" className="ease-in duration-300 flex flex-col h-screen w-screen justify-center items-center">
                <div id="title" className="h-12 ease-in duration-300 text-6xl m-6">gold betting</div>
                <div className="flex justify-center items-center">
                    <input className="shadow border-2 rounded-xl h-12 p-2 w-72" id="username" placeholder="insert your username..
                    " type="text"></input>
                    <button
                        id="login"
                        // className="shadow ease-in duration-200 justify-self-center border rounded-xl h-12 w-20 m-1 hover:bg-black hover:text-white "
                        className="shadow ease-in duration-200 justify-self-center border rounded-xl h-12 w-20 m-1"
                        onClick={routeAndLogin}
                        onMouseOver={darkSite}
                        onMouseLeave={normalSite}
                        >
                            login</button>
                </div>
        
        </div>
    </>)
}