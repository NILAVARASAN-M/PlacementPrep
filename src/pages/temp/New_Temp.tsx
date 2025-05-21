import React, { useEffect, useState } from "react";
import axios from "axios";

const NewNewTemp = () => {
  const [explanation, setExplanation] = useState("");
  const prompt = "Explain what is BIg-data";

  useEffect(() => {
    const fetchExplanation = async () => {
      try {
        const res = await axios.post("http://localhost:5002/api/explain", {
          code: prompt,
          language: "", // You can change this to tamil, telugu, etc.
        });
        console.log(res.data);
        setExplanation(res.data.explanation);
      } catch (err) {
        console.error("Error fetching explanation:", err);
        setExplanation("Failed to fetch explanation.");
      }
    };

    fetchExplanation();
  }, []);

  return (
    <div className="p-4 text-gray-800">
      <h1 className="text-xl font-bold mb-2">Explanation</h1>
      <pre className="bg-gray-100 p-4 rounded shadow text-sm whitespace-pre-wrap">
        {explanation}
      </pre>
    </div>
  );
};

export default NewNewTemp;