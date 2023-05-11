import "./App.css";
import React from 'react'

let styles={

  Internal : {
    color:"balck",
  },
  light :{
  backgroundColor:"white",
  color:"black"
  },
  dark : {
    backgroundColor:"black",
    color:"white"
  }

}

function App() {

  const [theme, setTheme] = React.useState(false);
  const toggleTheme=()=> { 
    setTheme(!theme);
  }

  return (
    <div style={theme ? styles.lights: styles.dark}>
      <h1 className="external">External Styling</h1>
      <h1 >Internal Styling</h1>
      <h1 style={
        theme 
        ? {color:"black", backgroundColor:"white"}
        : {color: "white", backgroundColor:"black"}
      }> Inline Styling</h1>
      <button onClick={toggleTheme}>Toggle-theme </button>
      </div>
  )
 
}

export default App