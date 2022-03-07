import React,{ useState } from "react"
import Button from '@mui/material/Button';

import Modal from "./Modal"

const User = ({user})=>{

    const [openModal , setOpenModal] = useState(false)

    const editHandler =()=>{
        setOpenModal(true)
    }

    return(
        <>
            <div key={user.id} className="user">
                <h3><span style={{color:"silver"}}>name:</span>{user.name}</h3> 
                <h4>{user.email}</h4>
                <Button onClick={editHandler} variant="outlined" color="error">EDIT</Button>
            </div>
            {
                openModal && <Modal setOpenModal={setOpenModal} name={user.name} email={user.email}/>
            }
        </>
    )
}

export default User;