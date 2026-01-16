import React from 'react'
import Download from '../Download'

const Iotexp = () => {
  return (
    <div>
      <Download url={"http://localhost:8000/file/viewexp"} sub={'iot'} subname={'Internet of things'}/>
    </div>
  )
}

export default Iotexp