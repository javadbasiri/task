const initialState = {
    loading:false,
    users:[],
    filteredUsers:[],
    error:""
}

const dataReducer = (state=initialState , action)=>{
    switch(action.type){
        case "FETCH-REQUEST":
                return{
                    ...state,
                    loading:true
                }
        case "FETCH-SUCCESS":
                return{
                    loading:false,
                    users:action.payload,
                    filteredUsers:action.payload
                }
        case "FETCH-ERROR":
                return{
                    loading:false,
                    error:action.payload
                }
        case "UPDATE":
                return{
                    ...state,
                    users:action.payload,
                    filteredUsers:action.payload
                    
                }
        case "FILTER":
                return{
                    ...state,
                    filteredUsers:action.payload
                }        
            
                
         default: 
                return state       
    }
}

export default dataReducer;