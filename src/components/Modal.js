import React,{ useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import Button from '@mui/material/Button';
import "./modal.css"

import { update } from "../redux/dataActions";

const Modal = ({ name,email,setOpenModal })=>{

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    
    const [newInfo , setNewInfo] = useState({
        newName:"",
        newEmail:""
    })

    const inputHandler = (e)=>{
        setNewInfo({
            ...newInfo,
            [e.target.name]:e.target.value
        })
    }

    const cancelHandler =()=>{
        setOpenModal(false)
    }

    const saveHandler =()=>{
        const updateInfo = users.map(user => {
            if(user.name === name){
                return{
                    ...user,
                    name:newInfo.newName ? newInfo.newName : name,
                    email:newInfo.newEmail ? newInfo.newEmail : email
                }
            }else{
                return user
            }
        })
        dispatch(update(updateInfo))
        setOpenModal(false)
        
    }

    return(
        <div className="modal">
            <div className="box">
                <input type="text" name="newName" value={newInfo.newName} placeholder={name} onChange={inputHandler}/>
                <input type="text" name="newEmail" value={newInfo.newEmail} placeholder={email} onChange={inputHandler}/>
                <Button onClick={saveHandler} variant="contained">Save</Button>
                <Button onClick={cancelHandler} variant="outlined">Cancel</Button>
            </div>
        </div>
    )
}

export default Modal;