import { useContext } from "react";
import { UserContext } from "../context/userProvider";
function Help(){ 
    
    const {user, cursos}=useContext(UserContext); 
    
    console.log(user);
    return(
        <>
        <h2>Help works!!</h2>
        </>
    )
}
export default Help;