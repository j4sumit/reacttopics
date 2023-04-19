import React,{useState} from "react";
function Profile()
{
    const[loggedin, setloogedin]= useState(2);
    return(
        <div>
{loggedin ==1? <h1>Authentication 1</h1> 
    :loggedin ==2? <h1>Authentication 2</h1>
    : <h1>Authentication 3</h1>}
    
   </div>
    )
}

export default Profile;