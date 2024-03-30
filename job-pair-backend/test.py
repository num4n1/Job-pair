import requests

# URL of the Flask app
url = "http://localhost:5000/get_all_jobs_brief"

# Send a GET request
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    print("Response from the server:", response.text)
else:
    print("Failed to get a response from the server", response.status_code)