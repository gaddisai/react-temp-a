import React from 'react'
import './App14.css'
import { Parent } from './Parent'
import { Child1 } from './Child1'
import { Child2 } from './Child2'
function App14() {
  return (
    <>
        <div className='bottom_content14'>
            <h2>This is App14</h2>
            <Parent>
                <Child1 />
                <Child2 />
            </Parent>
        </div>
    </>
  )
}
export { App14 }
