import React, { useState, createContext, useEffect } from "react";

export const AgeContext = createContext({})

export default function AgeContextProvider({children}) {
    const [age, setAge ]=useState("")
    const [messade, setMessage]=usetState("")

    useEffect(() =>{
        if(age < 16){
            setMessage("")
        }else if(16 <= age && age < 18) {
            setMessage("")
        }else if(age >= 18){
            setMessage("")
        }
    }, [age])

    return(
        <AgeContextProvider 
        value={{age, setage, message, setMessage}}>
            {children}
            </AgeContextProvider>
    )
}