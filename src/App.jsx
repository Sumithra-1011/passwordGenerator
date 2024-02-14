import { useState } from 'react'
import './App.css'

function App() {
  const[passwordlength,setpasswordlength]=useState(8)
  const[includupper,setUpper]=useState(true)
  const[includlower,setLower]=useState(true)
  const[includnumper,setnumber]=useState(true)
  const[includsymbol,setsymbol]=useState(true)
  const[getpassword,setGetpassword]=useState("")
  function GeneratorPassword(){
    // alert("hi")
    let charSet="";
    if(includupper){
      charSet=charSet+"ABCDEFGHIGKLMNOPQRSTUVWXYZ"
    }
    if(includlower){
      charSet=charSet+"abcdefghigklmnopqrstuvwxyz"
    }
    if(includnumper){
      charSet=charSet+"1234567890"
    }
    if(includsymbol){
      charSet=charSet+"!@#$%^&*(?)/><"
    }
    let passwordval=""
    for( let i=0;i<passwordlength;i++){
      const randombassword=Math.floor(Math.random()*charSet.length)
      passwordval+=charSet[randombassword]
    }
    setGetpassword(passwordval)
 
  }
  const Copytoclipboard=()=>{
    alert("Password Copyed")
    navigator.clipboard.writeText(getpassword)
  }
  
  

  return (
    <>
    <div className='container'>
      <h2>Password Generator</h2>
      <div className='inputbassword'>
        <label htmlFor='textinput'>Password Lenght</label>
        <input type='number' id="textinput" value={passwordlength} onChange={(e)=>{parseInt(setpasswordlength(e.target.value)) }}></input>
      </div>
      <div className='uppercasess'>
        <input type='checkbox' id="uppercase" checked={includupper} onChange={(e)=>{setUpper(e.target.checked)}}></input>
        <label htmlFor='uppercase'>UpperCase</label>
      </div>
      <div className='uppercasess'>
        <input type='checkbox' id="lowercase" checked={includlower} onChange={(e)=>{setLower(e.target.checked)}}></input>
        <label htmlFor='lowercase'>LowerCase</label>
      </div>
      <div className='numpers'>
        <input type='checkbox' id="numpers" checked={includnumper} onChange={(e)=>{setnumber(e.target.checked)}}></input>
        <label htmlFor='numpers'>Numbers</label>
      </div>
      <div className='symbol'>
        <input type='checkbox' id="symbol" checked={includsymbol} onChange={(e)=>{setsymbol(e.target.checked)}}></input>
        <label htmlFor='symbol'>Symbol</label>
      </div>
      <div>
        <button className='btn' onClick={GeneratorPassword}>Generator Password</button>
      </div>
      <div className='readpassword'>
        <input type='text' readOnly value={getpassword}></input> 
        <button onClick={Copytoclipboard}>Copy</button>
      </div>
    </div>
          
    </>
  )
}

export default App
