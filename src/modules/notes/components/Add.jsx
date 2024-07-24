
import InputAdornment from '@mui/material/InputAdornment';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import { Button, FormControl } from '@mui/material';
import dayjs from 'dayjs';
import { useRef,useState } from 'react';
//import { noteOperations } from '../services/note-operations';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiColorInput } from 'mui-color-input'
import { addNote } from '../redux/note-slice';
import {useDispatch} from 'react-redux';
import { Note } from '../models/note';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//import * as React from 'react';
export const Add=(props)=>{
    const id=useRef();
    const title=useRef(); 
    const desc=useRef();
    const [dateValue, setDateValue] = useState(null);
    const [colorValue, setColorValue] = useState('#ffffff');
    // const [massage ,setMassage] = useState('');
    const [open, setOpen] = useState(false);
    const dispatch=useDispatch();
    const handleClose=()=>setOpen(false);
    
    const action = <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
    const takeNote=()=>{
        console.log('Add Note is called...')
        const idValue=id.current.value;
        const titleValue=title.current.value;
        const descValue=desc.current.value;
        const date =dateValue ? dayjs(dateValue).format('MM/DD/YYYY'):'';
        console.log('now date is',date)
        console.log('color',colorValue)
        const noteObject =new Note(idValue,titleValue,descValue,date,colorValue);
        dispatch(addNote(noteObject));
        setOpen(true);
        // setMassage('Record Added...');
        // setTimeout(()=>{
        // setMassage('');
        // },1000);
        // console.log('id',idValue);
        // console.log('title',titleValue);
        // console.log('desc',descValue);
        //put the data an object
        //const noteObject={'id':idValue, 'title':titleValue, 'desc':descValue};
       // props.fn(noteObject);
       //const noteObject=noteOperations.addNote(idValue,titleValue,descValue,'','')
       //noteOperations.addNote(idValue,titleValue,descValue,date,colorValue)
       //props.fn();//call collectNoteData
    }
    return(<>
     <Box sx={{
        margin:5,flexDirection:'column', display:'flex'
      }}>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note added"
        action={action}>
        </Snackbar>

        {/* <Typography>
          {massage};
        </Typography> */}

        <TextField
        id="note id"
        inputRef={id}
        label="Id"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="note title"
        
        inputRef={title}
        label="title"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SpatialAudioOffIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
              <TextField
        id="note desc"
        
        inputRef={desc}
        label="desc"
        multiline
        maxRows={4}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }} 
        variant="standard"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={dateValue} onChange={(selectedDate) => setDateValue(selectedDate)} />
      </LocalizationProvider>
      <MuiColorInput  value={colorValue} onChange={(selectedColor)=>setColorValue(selectedColor)} />
      {/* <input type='date'/>
      <input type='color'/> */}
      <Button onClick={takeNote} variant="contained" color="warning">Add note</Button>
      
       </Box>
       </>)
    }
  