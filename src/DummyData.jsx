import React,{useState, useEffect} from "react"


export const Rows = 
    useEffect(() => {
        fetch("https://api.milkvilla.in/api/areas/openact/all")
        .then(resp=>resp.json)
        .then(resp=>console.log(resp))
    },[])
