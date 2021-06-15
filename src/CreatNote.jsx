import React, { useState } from "react"

const CreatNote=(props)=>{
    const [expand ,setexpand]=useState(false)

    const [note ,setnote] =useState({
        tittle:"",
        content:""
    });
    const textEvent=(event)=>{
        const value = event.target.value
        const name = event.target.name
        setnote((prevData)=>{
            return {
                ...prevData,
                [name]: value,
            }
        })
     
    }
// **********************************************
    const addnote =()=>{
        props.passnote(note);
        setnote({
            tittle:"",
            content:""
        })
     }

     const expandit=()=>{
        setexpand(true)
     }




return(
    <div className="main-note">
        <form>
      {   expand ?  <input onChange={textEvent} name="tittle" value={note.tittle} type= "text" placeholder="Tittle"/> :null}
         <textarea  onChange={textEvent} onClick={expandit} name = "content" value ={note.content} cols="" rows="" placeholder="write a note"></textarea> 
        </form>
    {expand ? <button onClick={addnote}> 
        +
    </button> :null}
    </div>
)
}
export default CreatNote