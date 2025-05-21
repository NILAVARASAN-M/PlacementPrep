from flask import Flask, request, jsonify
from flask_cors import CORS
from gemini_utils import generate_explanation

app = Flask(__name__)
CORS(app)

@app.route("/api/explain", methods=["POST"])
def explain_code():
    data = request.get_json()
    code = data.get("code")
    language = data.get("language", "english")

    if not code:
        return jsonify({"error": "Code is required"}), 400

    try:
        explanation = generate_explanation(code, language)
        return jsonify({"explanation": explanation})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5002, host="0.0.0.0")
