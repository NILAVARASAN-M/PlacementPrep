// src/App.jsx
import { useState } from 'react';
// import CameraCapture from '../before_sign_up/camera/CameraCapture';
// import MobileCamera from '../before_sign_up/camera/MobileCamera';
// import FileUpload from '../before_sign_up/camera/FileUpload';
// import ResultDisplay from '../before_sign_up/camera/ResultDisplay';

import CameraCapture from '../before_sign_up/camera/CameraCapture';
import MobileCamera from '../before_sign_up/camera/MobileCamera';
import FileUpload from '../before_sign_up/camera/FileUpload';
import ResultDisplay from '../before_sign_up/camera/ResultDisplay';

 const Camera = () =>{
  const [mode, setMode] = useState('webcam'); // webcam, mobile, upload
  const [status, setStatus] = useState('Ready to capture');
  const [result, setResult] = useState({});

  const handleResult = (data) => {
    setResult(data);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };
  return (
    <div className="app-container min-vh-100 d-flex align-items-center py-5">
    <div className="container">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="fw-bold text-primary mb-0">Face Recognition System</h1>
          <p className="text-muted">Capture, Upload, or Use Mobile Camera</p>
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div className="btn-group" role="group">
              <button 
                className={`btn ${mode === 'webcam' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => {
                  setMode('webcam');
                  setStatus('Ready to capture');
                  setResult({});
                }}
              >
                <i className="bi bi-camera me-2"></i>
                Webcam
              </button>
              <button 
                className={`btn ${mode === 'mobile' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => {
                  setMode('mobile');
                  setStatus('Ready to connect mobile camera');
                  setResult({});
                }}
              >
                <i className="bi bi-phone me-2"></i>
                Mobile Camera
              </button>
              <button 
                className={`btn ${mode === 'upload' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => {
                  setMode('upload'); 
                  setStatus('Ready to upload');
                  setResult({});
                }}
              >
                <i className="bi bi-upload me-2"></i>
                Upload Image
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="input-container p-4 bg-white rounded shadow-sm">
            {mode === 'webcam' && (
              <CameraCapture 
                onResult={handleResult} 
                onStatusChange={handleStatusChange} 
              />
            )}
            
            {mode === 'mobile' && (
              <MobileCamera 
                onResult={handleResult} 
                onStatusChange={handleStatusChange} 
              />
            )}
            
            {mode === 'upload' && (
              <FileUpload 
                onResult={handleResult} 
                onStatusChange={handleStatusChange} 
              />
            )}
          </div>
        </div>
        
        <div className="col-lg-4">
          <ResultDisplay status={status} result={result} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Camera;