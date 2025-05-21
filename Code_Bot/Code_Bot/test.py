import requests

url = "http://127.0.0.1:5002/api/explain"
data = {
    "code": "def add(a, b): return a + b",
    "language": "english"
}

response = requests.post(url, json=data)
print(response.json())