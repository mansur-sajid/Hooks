import React from 'react'
import { useContext, useRef } from 'react'
import { appContext } from '../App'

function Input() {
    const {setData, data} = useContext(appContext)
    let inpRef = useRef(null)
    let inpRef1 = useRef(null)
  return (
    <div>
      <input type="text" name="" id="" ref={inpRef} onChange={()=>{
        setData({name: inpRef.current.value, relegion : data.relegion})
      }}/>
      <input type="text" name="" id="" ref={inpRef1} onChange={()=>{
        setData({name: data.name, relegion : inpRef1.current.value})
      }}/>
    </div>
  )
}

export default Input
