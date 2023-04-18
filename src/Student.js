function Student(props)
{
    console.log(props.name);
 return(
     <div style= {{backgroundColor: "red", margin:10}}>
         <h1> Hello {props.name}</h1>
         {/* <h1> Email :{props.Email}</h1>
         <h2>address:{props.other.address}</h2>
         <h2>mobile:{props.other.mobile}</h2> */}
     </div>
 )    
}
export default Student;