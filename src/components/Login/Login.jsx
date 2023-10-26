import React from "react";


export default function Login(){


    let background = document.getElementById("main")
    let title = document.getElementById("title")
    let login = document.getElementById("login");
    let modeDark = false;
    let sessId = 0;

    function darkSite(){
        let currId = sessId;

        //change title
        title.classList.remove("text-6xl")
        title.classList.add("text-3xl")
        title.classList.add("text-white")

        //change login button
        login.classList.add("bg-black")
        login.classList.add("text-white")

        //change background col
        background.classList.add("bg-black")
        title.textContent="inspired by my friend"


    }
    function normalSite(){

        //change title
        title.textContent="gold betting"
        title.classList.remove("text-white")
        title.classList.remove("text-3xl")
        title.classList.add("text-6xl")


        //change login button
        login.classList.remove("bg-black")
        login.classList.remove("text-white")

        //change background col
        background.classList.remove("bg-black")
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