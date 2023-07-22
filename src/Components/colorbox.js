import React, { useState } from 'react'
import './colorbox.css'
function Colorbox() {
    function setRamdomcolor(){
        const listColor =['red', 'green', '#ccc', 'lightblue', 'yellow'];
        const ramdomcolor = Math.trunc(Math.random()*5)
        return listColor[ramdomcolor];
    }
    const [color,setColor]= useState('red')
    const handleChange =()=>{
        const newColor =setRamdomcolor();
        setColor(newColor)
    }
  return (
    <div>
       <div className='color-box' style={{backgroundColor:color}}>
            Color Box
       </div>
       <button className='btn' onClick={handleChange}>Change</button>
    </div>
  )
}

export default Colorbox