import React from 'react'
import Download from '../Download'

const Iotnotes = () => {
  return (
    <div>
      <Download url={"http://localhost:8000/file/viewnotes"} sub={'iot'} subname={'Internet of things'}/>
    </div>
  )
}

export default Iotnotes