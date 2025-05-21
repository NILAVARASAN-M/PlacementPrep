// src/components/ResultDisplay.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResultDisplay = ({ status, result }) => {
  const [animation, setAnimation] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // Add animation when result changes
    if (result.person_name) {
      setAnimation('animate-result');
      const timeout = setTimeout(() => setAnimation(''), 1000);
      return () => clearTimeout(timeout);
    }
  }, [result]);

  useEffect(() => {
    if (result.person_name && result.person_name !== "Unknown" && result.person_name !== "Error") {
      setAnimation('animate-result');
  
      const animationTimeout = setTimeout(() => setAnimation(''), 1000);
      const navigateTimeout = setTimeout(() => {
        navigate(`/home/${result.person_name}`);
        window.location.reload();
      }, 2000); // navigate after 5 seconds
  
      return () => {
        clearTimeout(animationTimeout);
        clearTimeout(navigateTimeout);
      };
    }
  }, [result]);

  
  return (
    <div className="result-container p-4 bg-light rounded border h-100">
      <div className="mb-4">
        <h5 className="mb-2">Status</h5>
        <div className="status-box p-3 bg-white rounded">
          <p className="mb-0">{status || 'Ready'}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h5 className="mb-2">Recognition Result</h5>
        <div className={`result-box p-4 rounded text-center ${animation}`}>
          {result && result.person_name && result.person_name !== "Unknown" && result.person_name !== "Error" ? (
            <div className="recognition-success">
              <div className="mb-3">
                <span className="badge bg-success p-2 fs-6">Recognized</span>
              </div>
              <h3 className="display-6">Hello, {result.person_name}!</h3>
            </div>
          ) : result && (result.person_name === "Unknown" || result.person_name === "Error") ? (
            <div className="recognition-failed">
              <div className="mb-3">
                <span className="badge bg-danger p-2 fs-6">Not Recognized</span>
              </div>
              <p className="mb-0">
                {result.person_name === "Error" ? 
                  "Error processing the image" : 
                  "Face not found in database"}
              </p>
            </div>
          ) : status && status.includes('Analyzing') ? (
            <div className="analyzing">
              <div className="spinner-border text-primary mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mb-0">Analyzing face...</p>
            </div>
          ) : (
            <p className="text-muted mb-0">Capture or upload an image to see results</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;