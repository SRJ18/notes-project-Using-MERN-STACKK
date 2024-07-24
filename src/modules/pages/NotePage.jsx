
import { useState } from "react";
import { Header } from "../../shared/components/Header"
import { Add } from "../notes/components/Add"
import { List } from "../notes/components/List"
import Container from '@mui/material/Container';
import { noteOperations } from "../notes/services/note-operations";

export const NotePage=()=>{
  console.log('Note Page Call');
    const [Notes, setNotes]=useState([])
    const collectNoteData=(n)=>{
        setNotes([...noteOperations.getNotes()]);
      //console.log('Rec data from Add', noteObject);
    }
    return(<Container fixed>
       <Header/>
       <Add fn = {collectNoteData}/>
       <List notes ={Notes}/>
       </Container>)
}