import React, { useContext } from 'react'
import Button from './Button'
import MyContext from './Mycontext'

export default function Middle() {
    const { theme } = useContext(MyContext)
  return (
    <div className={`theme ${theme}`}>
        <Button/>
    </div>
  )
}
