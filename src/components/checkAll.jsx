import React from 'react'
import Button from './button'

function CheckAll() {
  return (
    <div className="flex justify-between w-full mt-4 ">
    <Button name="Check All" styles="border border-gray-400 p-1" />
    <span>3 items remaining</span>
  </div>
  )
}

export default CheckAll