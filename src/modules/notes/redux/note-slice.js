//import { create } from "@mui/material/styles/createTransitions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../../shared/services/api-client";




export const fetchNotes=createAsyncThunk('notes/fetch',async()=>{
    const response=await apiClient.read();
       return response.data.notes;
})
const noteSlice=createSlice({
    name:'noteSlice',
    initialState :{'notes':[], 'Total':0,'search-result':[],isLoding:true,error:null},
    reducers:{
        //for CRUD operation 
        //sync operation
        addNote
        (state,action){
            const noteObject=action.payload;
            console.log('Add Note Reducer Operation Is Called...', action.payload);
            state.notes.push(noteObject);
            return state;
    
        },
        getTotalRecord(state,action){
         state.Total=state.notes.length;
        },
        removeNote(state,action) {

        },
        searchNote(state,action){
            const searchObj=action.payload;
            console.log('Search Obj',searchObj);
           state['search-result']= state.notes.filter(note=>note.title.includes(searchObj.search))
        },
        sortNote(state,action){
            const sortObject= action.payload;
            const key =sortObject.sortBy;
            state.notes.sort((first,second)=>{
                if(key=='id'){
                return first[key]-second[key];
                }
                else{
                    return first[key].localeCompare(second[key]);
                }
            })

        }
    },
    extraReducers:(builder)=>{
     builder.addCase(fetchNotes.pending,(state,action)=>{
      state.isLoding=true;
     })
     .addCase(fetchNotes.fulfilled,(state,action)=>{
         state.isLoding=false;
         state.notes=action.payload;
     })
     .addCase(fetchNotes.rejected,(state,action)=>{
        state.isLoding=false;
        state.isLoding=[];
        state.error=action.payload;
     })
    }

})
export const {addNote,removeNote,searchNote,sortNote,getTotalRecord}=noteSlice.actions; //go to component
export default noteSlice.reducer;