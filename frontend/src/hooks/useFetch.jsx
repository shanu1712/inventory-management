import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const useFetch = (url) => {
    const [data,setdata] =useState([])
    const [loading,setloading] =useState(false)
    const [error,seterror] =useState(false)

    useEffect(() => {
    const fetchdata=async ()=>{
    setloading(true)
    try{
        
    const res= await axios.get(url)
    setdata(res.data)
    }catch(err){
       seterror(err)
    }
    setloading(false)
    }
    fetchdata()
    }, [url])

    const refetch=async ()=>{
        setloading(true)
        try{
        
            const res= await axios.get(url)
            setdata(res.data)
            }catch(err){
               seterror(err)
            }
            setloading(false)
            }
           
    return { data,loading,error,refetch}
    }


//   return (
//     <div>
      
//     </div>
//   )


export default useFetch
