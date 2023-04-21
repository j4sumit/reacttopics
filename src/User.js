import React from 'react';
function User(props)
{
return(
    <div>
        <h1>
            User component {this.props}
        </h1>
        <button onClick={()=> alert("props.data1")}>call data function</button>
 
    </div>
)
}
export default User;