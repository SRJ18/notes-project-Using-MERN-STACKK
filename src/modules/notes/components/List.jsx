import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell , { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
//import { noteOperations } from '../services/note-operations';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { getTotalRecord,fetchNotes, searchNote, sortNote } from '../redux/note-slice';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import {useState} from 'react';
import { apiClient } from '../../../shared/services/api-client';

//import { createSlice } from "@reduxjs/toolkit";
export const List=(props)=>{
  const[sort,setSort]=useState('');
   // console.log('props are', props.notes);
   const dispatch=useDispatch();
   const takeSearchValue=(event)=>{
   const searchValue= event.target.value;
   const searchData= {search:searchValue};
   dispatch(searchNote(searchData))
     
   }
   const sortIt=(event)=>{
    const sortBy=event.target.value;
    setSort(sortBy);
    dispatch(sortNote({sortBy}));
   }
   const notesObject=useSelector(state=>{
              return {'notes':state.noteSlice.notes,'total':state.noteSlice.total,'results':state.noteSlice['search-result'],'isLoding':state.noteSlice.isLoding};
      });
     useEffect(()=>{
     console.log('Component Mount...');
     dispatch(getTotalRecord());
     dispatch(fetchNotes());
    //  const promise =apiClient.read();
    //  promise.then(result=>{
    //   console.log('result is',result);
    //  }).catch(error=>{
    //   console.log('error is',error);
    //  })
      },[])
      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    return(<div>
        <h1> Total Records {notesObject.total}</h1>
        {notesObject.isLoading?<p>Loading...</p>:<p> Data comes...</p>}
        <TextField onChange={takeSearchValue} id="outlined-basic" label="Search By Title" variant="outlined" />
        <br/>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="sort"
          onChange={sortIt}
        >
          <MenuItem value="id">id</MenuItem>
          <MenuItem value="title">title</MenuItem>
          <MenuItem value="desc">desc</MenuItem>
        </Select>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'black' , foregroundColor:'white'}}>
          <TableRow>
            <StyledTableCell align='left'>Id</StyledTableCell>
            <StyledTableCell align="left">title</StyledTableCell>
            <StyledTableCell align="left">desc</StyledTableCell>
            <StyledTableCell align="left">cdate</StyledTableCell>
            <StyledTableCell align="right">importance</StyledTableCell>
            <StyledTableCell align="left">operation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notesObject.results.length>0 && notesObject.results.map(note=>{
             return (<TableRow>
              <TableCell align="left">{note.id}</TableCell>
              <TableCell align="left">{note.title}</TableCell>
              <TableCell align="left">{note.desc}</TableCell>
              <TableCell align="left">{note.cdate}</TableCell>
              <TableCell align="right">{note.importance}</TableCell>
              <TableCell align="left"><DeleteIcon/><EditIcon/></TableCell>
          </TableRow>);
          })}
          {notesObject.results.length ==0 && notesObject.notes.map(note=>{
            return (<TableRow>
                <TableCell align="left">{note.id}</TableCell>
                <TableCell align="left">{note.title}</TableCell>
                <TableCell align="left">{note.desc}</TableCell>
                <TableCell align="left">{note.cdate}</TableCell>
                <TableCell align="right">{note.importance}</TableCell>
                {/* <TableCell align="right"><i class="fa-solid fa-trash"></i><i class="fa-solid fa-pen-to-square"></i></TableCell> */}
                <TableCell align="left"><DeleteIcon/><EditIcon/></TableCell>
            </TableRow>);
          })}
        </TableBody>
        </Table>
        </TableContainer>
        </div>)
}