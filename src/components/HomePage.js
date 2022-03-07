import React,{useEffect,useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import User from "./User";
import "./homepage.css"

import { fetchData } from "../redux/dataActions";
import { filter } from "../redux/dataActions";


const HomePage=()=>{

    const [search , setSearch] = useState("")
    const [page , setPage] = useState(1)

    const dispatch = useDispatch()
    const data = useSelector(state => state)
    

    useEffect(()=>{
        if(!data.users.length){
            dispatch(fetchData())
        }
    },[])

    const inputHandler =(e)=>{
        setSearch(e.target.value)
    }

    const searchHandler=()=>{
        if(search !== ""){
            const filtered = data.users.filter(user => user.name.toUpperCase().includes(search.toUpperCase().trim()))
            dispatch(filter(filtered))
            setPage(1)
        }
       
    }

    useEffect(()=>{
       if(search == ""){
            dispatch(filter(data.users))
        }
        
    },[search])


    return(
        <>
            <div className="navbar">
                <h2><span>result : </span>{data.filteredUsers.length}</h2>
                <h3>
                    {localStorage.getItem("username")}
                </h3>
            </div>
            <div className="search">
                <TextField id="standard-basic" value={search} onChange={inputHandler} label="search by name" variant="standard" />
                <Button onClick={searchHandler} variant="contained">search</Button>
            </div>
            <div className="users">
                   {
                       data.loading ? <h1>Loading . . .</h1> :
                       data.error ? data.error :
                       data.filteredUsers && data.filteredUsers.slice((page - 1) * 4 , (page - 1) * 4 + 4).map(user => <User key={user.id} user={user}/>)
                   } 

            </div>
            <div className="pagination">
                <Pagination
                    color="primary"
                    page={page}
                    onChange={(_,value)=>setPage(value)}
                    count={Number((data.filteredUsers.length/4).toFixed(0))}
                 />
            </div>    
        </>
    )
}

export default HomePage;