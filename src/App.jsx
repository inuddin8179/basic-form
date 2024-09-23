import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <center>
     <form>
      <h2>sign up </h2>
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname"/><br/><br/>
<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname"/><br/><br/>
<label for="email">Email:</label>
<input type="email" id="email" name="email" /><br/><br/>
<label for="Password">Password:</label>
<input type="password" id="password" name="password" min='1' max='15'/><br/><br/>

{/* <input type="email" id="fname" name="fname" placeholder='enter your email'/><br/><br/> */}

<input  type="button" value="Login"/>
</form>
</center>
    </>
  )
}

export default App
