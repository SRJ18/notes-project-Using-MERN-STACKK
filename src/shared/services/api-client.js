// backend call
//crud operation
import axios from 'axios';
export const apiClient={
    async read(){
    //read
    //promise state is -pending,fullfilled,reject;
    try{
    const promise= await axios.get(process.env.REACT_AAP_NOTES_URL);
     return Response.data.notes;
    }
     catch(error){
        throw error;
     }
    },
    insert(){
     //insert
    },
    update(){

    },
    remove(){

    }
}