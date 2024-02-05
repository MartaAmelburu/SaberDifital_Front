import {useState, createContext} from 'react';
const UserContext= createContext();

function UserProvider({children}){
 const [user,setUser]= useState(()=>{
    if(!localStorage.getItem('user') || localStorage.getItem('user') == 'undefined'){

      return null;
       
    }else{
      return JSON.parse(localStorage.getItem('user')); 
        }});
     
 function setejarUser(user){
    setUser(user);
 }
 const [cursos,setCursos]=useState(null);
 function setejarCursos(cursos){
    setCursos(cursos);
 }

 
return (
    <UserContext.Provider value={{user, setejarUser,cursos, setejarCursos}}>
        {children}
    </UserContext.Provider>
);
}
export default UserProvider;
export {UserContext};