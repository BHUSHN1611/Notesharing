import React from 'react';
import { Download, FileText, CheckCircle2, AlertCircle} from 'lucide-react';
import { API_URL } from '../../config.js';


const Qpstructure = ({ notes, subject }) => {
  const hasNotes = notes && notes.length > 0;
  console.log(notes, subject);

   const QphandleDownload = (noteId) => {
    try {
      window.open(`${API_URL}/file/qp/download/${noteId}`,"_blank");
     
    } catch (error) {
      console.log("Error occured at download",error);
     
    }}

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
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-600" size={24} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {note.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{note.subject}</p>

              {/* Download Button */}
              <button
              onClick={()=>{QphandleDownload(note._id)}}
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                {/* <Link to={`${API_URL}/file/qp/download/${note._id}`}> */}
                <Download size={18} />
                Download
                {/* </Link> */}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Qpstructure;