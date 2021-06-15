import React, { useState }  from "react"
import Header from "./Header"
import "./App.css"
import Footer from "./Footer"
import CreatNote from "./CreatNote"
import Notes from "./Note"

const App =()=>{

  const [Additem ,setAdditem ]= useState([])

  const addnote = (note)=>{

   setAdditem ((predata)=>{
     return [...predata , note]
      
   });
   console.log(note);
  }


  const ondelete=(id)=>{
    setAdditem((olddata)=>
    olddata.filter((currentdata,index)=>{

        return index!==id; 
    })
    )
  }
 return(
  <>
     <Header/>
   <Footer />
   <CreatNote passnote = {addnote}/>
   
  { Additem.map((val,index)=>{
     return <Notes 
        key={index}
        id ={index}
        tittle ={val.tittle}
        content = {val.content}  
        deleteitem ={ondelete}

     />
   })}
  </>
 )
}

export default App;
