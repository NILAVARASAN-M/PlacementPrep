// src/components/CameraCapture.jsx
import { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const CameraCapture = ({ onResult, onStatusChange }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [captureMode, setCaptureMode] = useState('ready'); // ready, captured, processing

  // Reset component when unmounted
  useEffect(() => {
    return () => {
      setImgSrc(null);
      setCaptureMode('ready');
    };
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setCaptureMode('captured');
    onStatusChange('Image captured');
  }, [webcamRef, onStatusChange]);

  const retake = () => {
    setImgSrc(null);
    setCaptureMode('ready');
    onStatusChange('Camera ready');
  };

  const processImage = useCallback(async () => {
    if (!imgSrc) return;
    
    try {
      setCaptureMode('processing');
      onStatusChange('Analyzing face...');
      
      // Convert base64 to blob
      const base64Response = await fetch(imgSrc);
      const blob = await base64Response.blob();
      
      // Create form data
      const formData = new FormData();
      formData.append('image', blob, 'webcam_image.jpg');
      
      // Send to backend
      const response = await axios.post('http://localhost:5001/upload', formData);
      
      // Process result
      onResult(response.data);
      onStatusChange('Processing complete');
    } catch (error) {
      console.error('Error processing image:', error);
      onStatusChange('Error processing image');
      onResult({ person_name: 'Error' });
    }
  }, [imgSrc, onResult, onStatusChange]);

  return (
    <div className="camera-container d-flex flex-column">
      {captureMode === 'ready' ? (
        <>
          <div className="rounded overflow-hidden mb-3 bg-dark d-flex justify-content-center">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={500}
              height={500}
              videoConstraints={{
                width: 500,
                height: 500,
                facingMode: "user"
              }}
              className="webcam-video"
            />
          </div>
          <button 
            className="btn btn-primary py-2" 
            onClick={capture}
          >
            Capture Photo
          </button>
        </>
      ) : (
        <>
          <div className="rounded overflow-hidden mb-3 bg-dark d-flex justify-content-center">
            <img
              src={imgSrc}
              alt="Captured"
              className="captured-image"
              style={{ maxWidth: '100%', maxHeight: '500px' }}
            />
          </div>
          <div className="d-flex gap-2">
            <button 
              className="btn btn-secondary flex-grow-1" 
              onClick={retake}
              disabled={captureMode === 'processing'}
            >
              Retake
            </button>
            <button 
              className="btn btn-success flex-grow-1" 
              onClick={processImage}
              disabled={captureMode === 'processing'}
            >
              {captureMode === 'processing' ? (
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

export default CameraCapture;