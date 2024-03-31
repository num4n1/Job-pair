import requests

# URL of the Flask app
url = "http://localhost:5000/signup"

# Send a GET request
response = requests.post(url, json={
    'email' : 'spiderman_112@gmail.com',
    'password' :'123',
    'usertype': "seekers",
    'username': 'bada_spiderman',
    'fullName': 'Bid spiderman'
})

# Check if the request was successful
if response.status_code == 200:
    print("Response from the server:", response.text)
else:
    print("Failed to get a response from the server", response.text)