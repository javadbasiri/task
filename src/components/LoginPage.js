import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./loginpage.css"

const LoginPage=()=>{
    const navigate = useNavigate()

    const [userInfo , setUserInfo] = useState({
        username:"",
        password:""
    })

    const inputHandler = (e)=>{
        setUserInfo({
            ...userInfo,
            [e.target.name]:e.target.value,
        })
    }

    const loginHandler = (e)=>{
        if(userInfo.username !== ""){
            localStorage.setItem("username" , userInfo.username)
            navigate("/home")
        }
    }

    return(
        <div className="container">
            <TextField
                value={userInfo.username}
                onChange={inputHandler} 
                name="username"
                style={{width:"100%"}} 
                id="outlined-basic" 
                label="Username" 
                variant="outlined" 
            />

            <TextField
                value={userInfo.password}
                onChange={inputHandler}
                name="password"
                id="outlined-password-input"
                style={{width:"100%"}}
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <Button onClick={loginHandler} variant="contained">LOGIN</Button>
        </div>
    )
}

export default LoginPage;