import { Download, FileText, CheckCircle2, AlertCircle,Eye,Trash2} from 'lucide-react';
import { API_URL } from '../../config.js';

import axios from "axios";
import { useState } from 'react';


const Expstructure = ({ notes, subject }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const hasNotes = notes && notes.length > 0;
  // console.log(notes, subject);
  const ExphandleDownload = (noteId) => {
    try {
      window.open(`${API_URL}/file/exp/download/${noteId}`,"_blank");

    } catch (error) {
      console.log("Error occured at download",error);
    }}

  const ExphandleView = (noteId) => {
      try {
        window.open(`${API_URL}/file/exp/view/${noteId}`);
      
      } catch (error) {
        console.log("Error occured at viewing",error);
 
    }}

  const ExphandleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/file/exp/delete/${id}`, {
        withCredentials: true
      })
      setNotes(prev => prev.filter(note => note._id !== id));
    } catch (err) {
      alert("Delete failed")
    }
}
    
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{subject}</h2>
        <p className="text-gray-600">
          {hasNotes ? `${notes.length} ${notes.length === 1 ? 'note' : 'notes'} available` : 'No notes yet'}
        </p>
      </div>

      {/* Empty State */}
      {!hasNotes ? (
        <div className="bg-gray-50 rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-gray-400" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No notes found</h3>
          <p className="text-gray-600">Be the first to upload notes for this subject!</p>
        </div>
      ) : (
        /* Notes Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              {/* Icon */}
              <div className='flex justify-between'>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-600" size={24} />
              </div>
              <div>
                <button
                onClick={() => {setSelectedId(note._id);setShowDeleteModal(true);}} className="bg-red-500 text-white px-2 py-1 rounded-lg flex items-center"><Trash2 size={24}/></button>
              </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {note.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{note.subject}</p>

              {/* Download Button */}

              <div className='flex gap-2 w-full justify-center'>
                <button
              onClick={()=>{ExphandleDownload(note._id)}}
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                {/* <Link to={`${API_URL}/file/notes/download/${note._id}`}> */}
                <Download size={18} />
                Download
                {/* </Link> */}
              </button>
              {/* View Button */}
              <button
              onClick={()=>{ExphandleView(note._id)}}
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                {/* <Link to={`${API_URL}/file/notes/download/${note._id}`}> */}
                 <Eye size={18}/>
                View
                {/* </Link> */}
              </button>
              </div>
            </div>
          ))}
        </div>
      )}
            {showDeleteModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
      <h2 className="text-lg font-semibold">
        Delete Note?
      </h2>
      <p className="text-gray-600 mt-2">
        Are you sure?
      </p>

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>

        <button
          onClick={async () => {
            await ExphandleDelete(selectedId);
            setShowDeleteModal(false);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}
    </div>
    
  );
};

export default Expstructure;