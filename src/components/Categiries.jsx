import React from 'react'
import Button from './button'

function Categiries() {
  return (
    <div className="flex justify-between mt-4">
            <div className="space-x-2">
              <Button name="All" styles="border border-gray-400 p-1" />
              <Button name="Active" styles="" />
              <Button name="Completed" styles="" />
            </div>

            <div>
              <Button
                name="Clear completed"
                styles="border border-gray-400 p-1"
              />
            </div>
          </div>
  )
}

export default Categiries