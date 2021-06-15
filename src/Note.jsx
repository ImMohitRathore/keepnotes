import React from "react"

const Notes=(props)=>{

const deletenote=()=>{

    props.deleteitem(props.id);

}
   
    return(
        <>
        <div className="note">
        <h1>{props.tittle}</h1>
        <br />
        <p>{props.content}</p>
        <button onClick= {deletenote} > Del</button>
        </div>

        </>
    )
}

export default Notes