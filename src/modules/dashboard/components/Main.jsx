import { Route, Routes } from "react-router-dom"
import { Home } from "../../notes/components/Home"
import { Add } from "../../notes/components/Add"
import { List } from "../../notes/components/List"
//import Delete from "@mui/icons-material/Delete"

export const Main=()=>{
    return(<>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Add" element={<Add/>}/>
    <Route path="/View-all" element={<List/>}/>
    {/* <Route path="/Delete" element={<Delete/>}/>
    <Route path="/View all" element={<view/>}/>
    <Route path="/Search" element={<search/>}/> */}
   </Routes>
    </>)
}