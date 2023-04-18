import React, { useState } from 'react';

import './App.css';

function App(){
  const[data, setData] =useState(0);
  function apple()
  {
setData(data+1);

  }
  return(
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={apple}>update data</button>
    </div>
  )

}
export default App;


// class App extends React.Component
// {

//   constructor()
//   {
//     super()
//     this.state= {
//       data:0
//     }
//   }
//   apple()
//   {
//     this.setState({data: this.state.data+1});
//   }
//   render(){
//     return(
//       <div className="App">
//       <p> {this.state.data}</p>
//       <button onClick={()=>this.apple()}>update data</button>
//       </div>
//     );
//   }
// }

// export default App;