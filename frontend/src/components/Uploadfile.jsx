import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../config.js';

const Uploadfile = () => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('Notes');
  const [subject, setSubject] = useState('SPCC');
  const [isUploading, setIsUploading] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleReload = () => {
    setTimeout(window.location.reload(), 2000);
  };

  console.log(file,fileType,subject)

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!file) {
      showNotification('error', 'Please select a file');
      return;
    }
    setIsUploading(true);
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("fileType", fileType.toLowerCase());
    formData.append("subject", subject.toLowerCase());
    console.log(formData)

    try {
      await axios.post(`${API_URL}/file/upload`, formData);
      showNotification('success', 'File uploaded successfully!');
      setFile(null);
      setSubject(null);
      setFileType(null);

      handleReload();

    } catch (error) {
      console.error("Error while uploading", error);
      showNotification('error', 'Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg animate-slide-in ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {notification.type === 'success' ? (
            <CheckCircle2 size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span className="font-medium">{notification.message}</span>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <Upload className="text-white" size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Upload Files
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Select and upload PDF files of notes, practicals, or experiments
          </p>
        </div>

        {/* Main Upload Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            
            {/* File Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                File Type
              </label>
              <div className="flex flex-wrap gap-3">
                {['Notes', 'Exp', 'Ques'].map((type) => (
                  <label
                    key={type}
                    className={`flex-1 min-w-22.5 flex items-center justify-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                      fileType === type
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="fileType"
                      value={type}
                      checked={fileType === type}
                      onChange={(e) => setFileType(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Subject Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Subject
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['SPCC', 'MC', 'AI', 'CSS', 'IOT'].map((sub) => (
                  <label
                    key={sub}
                    className={`flex items-center justify-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                      subject === sub
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={sub}
                      checked={subject === sub}
                      onChange={(e) => setSubject(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium">{sub}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* File Drop Zone */}
            <div className="mb-8">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-48 sm:h-56 border-2 border-dashed border-indigo-300 rounded-xl cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition-colors group"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileText className="w-12 h-12 mb-3 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                  <p className="mb-2 text-sm sm:text-base text-gray-700 font-semibold">
                    {file ? file.name : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">PDF files only (MAX. 10MB)</p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </label>
            </div>

            {/* Upload Button */}
            <button
              onClick={uploadFile}
              disabled={isUploading || !file}
              className={`w-full py-3 sm:py-4 px-6 rounded-xl font-semibold text-white text-base sm:text-lg transition-all transform ${
                isUploading || !file
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {isUploading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  Uploading...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Upload size={20} />
                  Upload File
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Supported format: PDF • Maximum file size: 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default Uploadfile;