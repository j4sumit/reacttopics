import React from "react";
class Student extends React.Component
{
    render()
    {
        return(
<div style={{backgroundColor: 'skyblue',  margin:20}}>
    <h1>Hello {this.props.name}</h1>
    <h1>{this.props.Email}</h1>
</div>
        );
    }
}



export default Student;