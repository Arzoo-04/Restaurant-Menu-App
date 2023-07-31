import React from 'react'
import Restaurant from "./components/Basics/Restaurant"
const App = () => {
  return  <Restaurant/>
}

// const MyComp = ()=>{
//   return <h1>Arzoo Singh</h1>
// }
export default App

// React.Fragment or <></> are same
// {/* <> */}
      

// //  <MyComp/>
//      { /* all the tags should be enclosed within one tag */} 
//       {/* <h1 className='heading'>Hello World{1+2}</h1>  */}
//       {/* <p>bye</p> */}
//       {/* every tag needs to be closed */}
//       {/* use camelCase for attributes */}
//       {/* <img src='' alt=''></img>  */}
//       {/* or */}
//       {/* <img src="" alt="" /> */} 
// </>
// how react is looking into it
  
  // return React.createElement(
  //   "div", 
  // {},
  // React.createElement("hi", {}, "Hello World"));