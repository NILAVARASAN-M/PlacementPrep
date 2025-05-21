import React, { useState } from "react";
import axios from "axios";

const UploadComponent = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !name) return alert("Please provide name and image.");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);

    try {
      await axios.post("http://localhost:5000/upload", formData);
      alert("Image uploaded!");
      setName("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mx-auto mt-10">
      <input
        type="text"
        placeholder="Enter image name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => e.target.files && setImage(e.target.files[0])}
        className="p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Upload Image Nila
      </button>
    </form>
  );
};

export default UploadComponent;
