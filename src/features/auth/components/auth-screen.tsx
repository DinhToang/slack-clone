"use client"; //this is a react component not a react server component, can use reactivity and interactivity inside it: use state or on click 

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCart } from "./sign-in-card";
import { SignUpCart } from "./sign-up-card";



export const AuthScreen = () =>{
    const [state, setState] = useState<SignInFlow>("signIn");
    return(
        <div className="h-full flex items-center justify-center bg-[#5c3c58]">
            <div className="md:h-auto md:w-[420px]">
                {state === "signIn" ? <SignInCart setState={setState}/> : <SignUpCart setState={setState}/>}
            </div>
        </div>
    )
}