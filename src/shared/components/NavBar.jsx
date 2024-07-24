import {NavLink} from 'react-router-dom';
export const NavBar=()=>{
    return (<>
    <NavLink to ="/">Home</NavLink>
    <br/>
    <NavLink to ="/Add">Add Note</NavLink>
    <br/>
    <NavLink to ="/View-all">View Notes</NavLink>
    <br/>
    {/* <NavLink to ="/Delete">Delete Notes</NavLink>
    <NavLink to ="/View-all">View notes</NavLink>
    <NavLink to ="/Search">Search Notes</NavLink> */}
    </>)
}