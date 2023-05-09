// import {withRouter} from 'react-router-dom';
import React from 'react';
function User(props)
{
    console.warn(props.match.params.id)
return(
    <div>
<h1>Hi this is User no {props.match.params.id}</h1>
    </div>
)
}
// export default withRouter(User);
export default User;