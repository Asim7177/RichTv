import React from 'react'

const Btn = (props) => {
  return (
    <>
        <a className='btn btn-success px-3 py-2 fs-4 fw-bold' href={props.link}>Read More</a>
    </>
  )
}

export default Btn;