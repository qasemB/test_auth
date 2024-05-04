'use client'
import {signIn} from "next-auth/react";
import React from "react";

const AuthButton = () => {
    return (
        <div className='my-6 px-4'>
            <button type={"button"} className={"w-full bg-red-300 rounded-md h-12 flex items-center justify-center"}
                    onClick={()=>signIn()}
            >ورود با گوگل</button>
        </div>
    );
};

export default AuthButton;