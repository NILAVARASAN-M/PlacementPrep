// src/components/FileUpload.jsx
import { useState, useRef } from 'react';
import axios from 'axios';

const FileUpload = ({ onResult, onStatusChange }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImgSrc(event.target.result);
      onStatusChange('Image selected');
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const retake = () => {
    setImgSrc(null);
    onStatusChange('Ready to upload');
    fileInputRef.current.value = '';
  };

  const processImage = async () => {
    if (!imgSrc) return;
    
    try {
      setIsProcessing(true);
      onStatusChange('Analyzing face...');
      
      // Convert base64 to blob
      const base64Response = await fetch(imgSrc);
      const blob = await base64Response.blob();
      
      // Create form data
      const formData = new FormData();
      formData.append('image', blob, 'uploaded_image.jpg');
      
      // Send to backend
      const response = await axios.post('http://localhost:5001/upload', formData);
      
      // Process result
      onResult(response.data);
      onStatusChange('Processing complete');
    } catch (error) {
      console.error('Error processing image:', error);
      onStatusChange('Error processing image');
      onResult({ person_name: 'Error' });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="d-none"
      />
      
      {!imgSrc ? (
        <div 
          className="upload-area d-flex flex-column justify-content-center align-items-center p-5 bg-light rounded border"
          style={{ height: '500px', cursor: 'pointer' }}
          onClick={triggerFileInput}
        >
          <div className="mb-4 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
            </svg>
          </div>
          <h4>Upload Face Image</h4>
          <p className="text-muted mb-4">Click to select a file or drag and drop</p>
          <button
            className="btn btn-primary px-4 py-2"
            onClick={(e) => {
              e.stopPropagation();
              triggerFileInput();
            }}
          >
            Select Image
          </button>
        </div>
      ) : (
        <>
          <div className="rounded overflow-hidden mb-3 bg-dark d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
            <img
              src={imgSrc}
              alt="Uploaded"
              className="uploaded-image"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-secondary flex-grow-1"
              onClick={retake}
              disabled={isProcessing}
            >
              Choose Another
            </button>
            <button
              className="btn btn-success flex-grow-1"
              onClick={processImage}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Processing...
                </>
              ) : (
                'Recognize Face'
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUpload;