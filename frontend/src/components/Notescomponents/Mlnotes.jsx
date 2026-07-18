import Notesdownload from "../Download/Notesdownload"

const Mlnotes = () => {
  return (
    <div>
      <Notesdownload url={"/file/viewnotes"} sub={'ml'} subname={'Machine Learning'}/>
    </div>
  )
}

export default Mlnotes