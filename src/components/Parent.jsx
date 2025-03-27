import React from 'react'

function Parent(props) {
  return (
    <>
        <div className='bottom_content_parent'>
            <h2>This is Parent</h2>
            {props.children}
        </div>
    </>
  )
}
export { Parent }
