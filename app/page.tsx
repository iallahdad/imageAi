"use client"

import { useState } from "react";
import React from "react";

export default function ImageAi(){

    const [text, setText] =useState("")
    const [url, setUrl] =useState("")

    const query = async (data:any) => {
        console.log("data:", data)
        const response = await fetch(
            "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        const output = URL.createObjectURL(result)
        return output;
    }

        const onClickHandler = async() =>{
            try{
        const input = {"inputs": text}
        const result = await query(input)

        console.log("result:", result)
        setUrl(result) 
    } catch(error){
        console.log("error", error);
    }

    }
 
    return (
        <div>
            <h1 className="text-center text-gray-400 text-bold py-4">ImageGen (AI Model)</h1>
            <div className="flex justify-center w-16 md:w-32 lg:w-48 px-40">
            <input className="focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-lg text-sm px-4 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
             onChange= {(e)=>setText(e.target.value)} type="text" placeholder="Text-to-Image" />
            <button onClick={onClickHandler}
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
               Compute
            </button>
                </div>
                <div className="flex justify-center">
            <img width={250} height={250} src={url} alt="image"/>
                </div>
        </div>

    )  
}