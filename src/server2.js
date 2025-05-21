// server.js
import express from "express";
import multer from "multer";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const port = 5000;

const uri = "mongodb://localhost:27017/ProjectTemp";
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

// multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle image uploads
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { name } = req.body;
    const imageBuffer = req.file.buffer;
    const base64Image = imageBuffer.toString("base64");

    const database = client.db("User");
    const collection = database.collection("UserDetails");

    const result = await collection.insertOne({
      name,
      image: base64Image,
      createdAt: new Date()
    });

    res.status(200).json({ message: "Image uploaded", id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Route to handle form submission with multiple images
app.post("/submit-user-details", express.json(), async (req, res) => {
  try {
    const formData = req.body;
    
    // Convert ObjectId strings to actual ObjectId objects for the imageIds
    if (formData.imageIds) {
      formData.imageIds = formData.imageIds.map(id => new ObjectId(id));
    }
    
    const database = client.db("User");
    const collection = database.collection("UserDetails");
    
    const result = await collection.insertOne(formData);
    
    res.status(200).json({ 
      message: "User details submitted successfully", 
      id: result.insertedId 
    });
  } catch (error) {
    console.error("Error submitting user details:", error);
    res.status(500).json({ error: "Submission failed" });
  }
});

// Route to get all images
app.get("/images", async (req, res) => {
  try {
    const database = client.db("User");
    const collection = database.collection("UserDetails");
    const images = await collection.find({ image: { $exists: true } }).sort({ createdAt: -1 }).toArray();

    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

// Route to get user details
app.get("/user-details", async (req, res) => {
  try {
    const database = client.db("User");
    const collection = database.collection("UserDetails");
    const users = await collection.find({ fullName: { $exists: true } }).sort({ createdAt: -1 }).toArray();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user details" });
  }
});

// Endpoint: Get all users with image data
app.get("/users-with-images", async (req, res) => {
  try {
    const db = client.db("User");
    const collection = db.collection("UserDetails");

    // Get all user documents that have the fullName field
    const users = await collection
      .find({ fullName: { $exists: true } })
      .sort({ createdAt: -1 })
      .toArray();

    // Process each user to fetch their associated images
    const usersWithImages = await Promise.all(
      users.map(async (user) => {
        let images = [];
        
        // Only process if the user has imageIds
        if (user.imageIds && user.imageIds.length > 0) {
          // Fetch all images for this user based on imageIds
          const imageDocuments = await collection
            .find({ 
              _id: { $in: user.imageIds },
              image: { $exists: true } 
            })
            .toArray();
          
          // Extract base64 images
          images = imageDocuments.map(doc => doc.image);
        }
        
        return {
          ...user,
          images
        };
      })
    );

    res.status(200).json(usersWithImages);
  } catch (error) {
    console.error("Error fetching users with images:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start the server and connect to MongoDB
app.listen(port, async () => {
  try {
    await client.connect();
    console.log(`Server is running at http://localhost:${port}`);
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
});