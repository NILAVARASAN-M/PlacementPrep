// src/components/MobileCamera.jsx
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const MobileCamera = ({ onResult, onStatusChange }) => {
  const [ipAddress, setIpAddress] = useState('');
  const [imgSrc, setImgSrc] = useState(null);
  const [captureMode, setCaptureMode] = useState('setup'); // setup, connected, captured, processing
  const [refreshTimer, setRefreshTimer] = useState(null);
  const imgRef = useRef(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (refreshTimer) {
        clearInterval(refreshTimer);
      }
    };
  }, [refreshTimer]);

  const connectCamera = async () => {
    if (!ipAddress.trim()) {
      alert('Please enter the IP Webcam address');
      return;
    }

    onStatusChange('Connecting to mobile camera...');

    // Format the URL
    let baseUrl = ipAddress;
    if (!baseUrl.startsWith('http://')) {
      baseUrl = `http://${baseUrl}`;
    }

    try {
      // Test connection with a single image
      const response = await fetch(`${baseUrl}/shot.jpg`);
      
      if (!response.ok) {
        throw new Error('Failed to connect to mobile camera');
      }
      
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      
      // Set up interval to refresh the image
      setCaptureMode('connected');
      onStatusChange('Mobile camera connected');
      
      const timer = setInterval(async () => {
        try {
          const resp = await fetch(`${baseUrl}/shot.jpg?t=${Date.now()}`);
          const imageBlob = await resp.blob();
          const url = URL.createObjectURL(imageBlob);
          
          if (imgRef.current) {
            imgRef.current.src = url;
          }
        } catch (error) {
          console.error('Error refreshing frame:', error);
          clearInterval(timer);
          setCaptureMode('setup');
          onStatusChange('Connection to mobile camera lost');
        }
      }, 200);
      
      setRefreshTimer(timer);
      
      // Set initial image
      if (imgRef.current) {
        imgRef.current.src = imageUrl;
      }
    } catch (error) {
      console.error('Error connecting to mobile camera:', error);
      onStatusChange('Failed to connect to mobile camera');
      alert(`Cannot connect to camera at ${baseUrl}\nMake sure IP Webcam is running and the address is correct`);
    }
  };

  const captureImage = async () => {
    if (!imgRef.current) return;
    
    try {
      // Create a canvas and draw the current image
      const canvas = document.createElement('canvas');
      canvas.width = imgRef.current.naturalWidth;
      canvas.height = imgRef.current.naturalHeight;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgRef.current, 0, 0);
      
      // Get image data
      const imageDataUrl = canvas.toDataURL('image/jpeg');
      setImgSrc(imageDataUrl);
      
      // Stop refreshing
      if (refreshTimer) {
        clearInterval(refreshTimer);
        setRefreshTimer(null);
      }
      
      setCaptureMode('captured');
      onStatusChange('Image captured from mobile camera');
    } catch (error) {
      console.error('Error capturing image:', error);
      onStatusChange('Failed to capture image');
    }
  };

  const retake = () => {
    setImgSrc(null);
    setCaptureMode('setup');
    onStatusChange('Ready to connect mobile camera');
  };

  const processImage = async () => {
    if (!imgSrc) return;
    
    try {
      setCaptureMode('processing');
      onStatusChange('Analyzing face...');
      
      // Convert base64 to blob
      const base64Response = await fetch(imgSrc);
      const blob = await base64Response.blob();
      
      // Create form data
      const formData = new FormData();
      formData.append('image', blob, 'mobile_image.jpg');
      
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
  };

  return (
    <div className="mobile-camera-container">
      {captureMode === 'setup' && (
        <div className="setup-container p-4 bg-light rounded border">
          <h5 className="mb-3">Connect to Mobile Camera</h5>
          <p className="text-muted small mb-3">
            1. Install IP Webcam app on your Android phone<br />
            2. Open the app and start the server<br />
            3. Enter the IP address shown in the app (e.g., 192.168.1.100:8080)
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter IP Webcam address"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={connectCamera}
            >
              Connect
            </button>
          </div>
        </div>
      )}

      {captureMode === 'connected' && (
        <>
          <div className="rounded overflow-hidden mb-3 bg-dark d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
            <img
              ref={imgRef}
              alt="Mobile Camera"
              className="mobile-feed"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-secondary flex-grow-1"
              onClick={retake}
            >
              Disconnect
            </button>
            <button
              className="btn btn-primary flex-grow-1"
              onClick={captureImage}
            >
              Capture Image
            </button>
          </div>
        </>
      )}

      {(captureMode === 'captured' || captureMode === 'processing') && (
        <>
          <div className="rounded overflow-hidden mb-3 bg-dark d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
            <img
              src={imgSrc}
              alt="Captured from Mobile"
              className="captured-image"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
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

export default MobileCamera;