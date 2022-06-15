import axios from "axios"
import { apiBaseUrl } from "../../config"

const createNewMovie=async(data)=>{
    try {
        let response=await axios({
            method:"POST",
            url:`${apiBaseUrl}/movie/add-new`,
            headers:{
                "content-type":"application/json"
            },
            data:JSON.stringify(data)
        })
        return [true,response.data.message]
    } catch (error) {
        return [false,error.response.data] 
    }
}

export {
    createNewMovie
}