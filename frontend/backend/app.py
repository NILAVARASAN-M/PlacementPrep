from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import cv2
import numpy as np
import time
from datetime import datetime
import logging

# Import your existing face recognition classes
from PCA import pca_class
from images_to_matrix import images_to_matrix_class
from dataset import dataset_class

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Create directories if they don't exist
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Initialize the face recognition model
def initialize_model():
    try:
        logger.info("Initializing face recognition model...")
        algo_type = "pca"
        no_of_images_of_one_person = 8
        dataset_obj = dataset_class(no_of_images_of_one_person)
        # Data For Training
        images_names = dataset_obj.images_name_for_train
        y = dataset_obj.y_for_train
        no_of_elements = dataset_obj.no_of_elements_for_train
        target_names = dataset_obj.target_name_as_array

        img_width, img_height = 50, 50
        i_t_m_c = images_to_matrix_class(images_names, img_width, img_height)
        scaled_face = i_t_m_c.get_matrix()

        my_algo = pca_class(scaled_face, y, target_names, no_of_elements, 90)
        new_coordinates = my_algo.reduce_dim()
        
        logger.info("Model initialization complete")
        return my_algo, img_width, img_height
    except Exception as e:
        logger.error(f"Error initializing model: {str(e)}")
        raise

# Global variables to store model and dimensions
model, img_width, img_height = initialize_model()

@app.route('/')
def index():
    return jsonify({'status': 'Face Recognition API is running'})

@app.route('/upload', methods=['POST'])
def upload_image():
    """
    Handle image uploads from any of the front-end components
    (WebcamCapture, MobileCamera, or FileUpload)
    """
    try:
        if 'image' not in request.files:
            logger.warning("No image file in request")
            return jsonify({'error': 'No image provided'}), 400

        file = request.files['image']
        if file.filename == '':
            logger.warning("Empty filename in request")
            return jsonify({'error': 'No selected file'}), 400

        # Generate unique filename using timestamp
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"captured_image_{timestamp}.jpg"
        
        # Save the file
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)
        logger.info(f"Image saved to {file_path}")
        
        # Perform face detection first
        try:
            # Load the image for face detection
            img = cv2.imread(file_path)
            if img is None:
                raise ValueError("Could not read the image file")
            
            # You might want to add face detection here before recognition
            # (Using OpenCV's face detection is optional but recommended)
            
            # Perform face recognition
            person_name = model.recognize_face(model.new_cord(file_path, img_height, img_width))
            confidence = 0.85  # You could add confidence score from your model
            
            logger.info(f"Recognition result: {person_name}")
            
            return jsonify({
                'message': 'Image processed successfully',
                'filename': filename,
                'person_name': person_name if person_name else "Unknown",
                'confidence': confidence
            }), 200
            
        except Exception as e:
            logger.error(f"Recognition error: {str(e)}")
            return jsonify({
                'message': 'Image uploaded but recognition failed',
                'filename': filename,
                'person_name': "Error",
                'error': str(e)
            }), 200  # Return 200 so frontend shows the error properly

    except Exception as e:
        logger.error(f"Server error: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    """Serve uploaded files - useful if you want to display them in frontend"""
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/check-health', methods=['GET'])
def check_health():
    """Endpoint to check if the server is running"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    })

if __name__ == '__main__':
    # For development
    app.run(debug=True, host='0.0.0.0', port=5001)