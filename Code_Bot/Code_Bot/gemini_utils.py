# gemini_utils.py
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Supported languages
LANG_MAP = {
    "english": "English",
    "tamil": "Tamil",
    "telugu": "Telugu",
    "kannada": "Kannada",
    "malayalam": "Malayalam"
}

def generate_explanation(code: str, language: str = "english") -> str:
    model = genai.GenerativeModel("gemini-2.0-flash")

    lang_name = LANG_MAP.get(language.lower(), "English")
    prompt = f"""
      
    You are an expert technical assistant who helps with all topics related to computer science and technology. 
    This includes programming, data structures, algorithms, operating systems, databases, networking, system design, AI/ML, cybersecurity, and more.

    Explain the following query in clear, beginner-friendly {lang_name}. Be detailed and break down complex concepts into simpler parts.
    If the query is about code, explain what it does or identify any errors. 
    If it's a theoretical or conceptual question, provide a clear and concise explanation.

    Only respond with the explanation. Do not include any extra messages or headings. Also please keep it very crisp and concise. Keep the word Limit to be 20 words.

    Here is the query:
    \"\"\" 
    {code}
    \"\"\"
"""

    response = model.generate_content(prompt)
    return response.text.strip()

