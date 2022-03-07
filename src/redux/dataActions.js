import axios from "axios"

const fetchRequest = ()=>{
    return{
        type:"FETCH-REQUEST"
    }
}

const fetchSuccess = (data)=>{
    return{
        type:"FETCH-SUCCESS",
        payload:data
    }
}

const fetchError = (data)=>{
    return{
        type:"FETCH-ERROR",
        payload:data
    }
}

export const fetchData = ()=>{
    return (dispatch)=>{
        dispatch(fetchRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => dispatch(fetchSuccess(response.data)))
            .catch(error => dispatch(fetchError(error.message)))
    }

}

export const update = (data)=>{
     return{
         type:"UPDATE",
         payload:data
     }

}

export const filter =(data)=>{
    return{
        type:"FILTER",
        payload:data
    }
}