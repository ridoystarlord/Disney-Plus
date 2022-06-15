import axios from "axios"
import { apiBaseUrl } from "../config"

const getAllMovie=async(filter)=>{
    try {
        let response=await axios({
            method:"POST",
            url:`${apiBaseUrl}/movie/get-all`,
            headers:{
                "content-type":"application/json"
            },
            data:JSON.stringify(filter)
        })
        return [true,response.data.result]
    } catch (error) {
        return [true,error.response.data] 
    }
}

export {
    getAllMovie
}