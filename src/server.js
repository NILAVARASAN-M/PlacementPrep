import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
const PORT = 5000; // Backend runs on port 5000

app.use(cors()); // Allows frontend to access backend

    const uri = "mongodb://localhost:27017/TempNew"; // Replace with your MongoDB URI
const client = new MongoClient(uri);

async function fetchData() {
    try {
        await client.connect();
        const database = client.db("NewTemp"); // Replace with DB name
        const collection = database.collection("test1"); // Replace with Collection name
        const documents = await collection.find({}).toArray();
        return documents;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

app.get("/api/temp", async (req, res) => {
    const data = await fetchData();
    res.json(data);
});

app.get("/api/company", async (req, res) => {
    const data = await fetchData();
    res.json(data);
});

app.get("/api/company/:name", async (req, res) => {
    const companyName = req.params.name;
    const data = await fetchData();
    res.json(data);
});

app.get("/api/company/:name/:job_id", async (req, res) => {
    const companyName = req.params.name;
    const data = await fetchData();
    res.json(data);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
