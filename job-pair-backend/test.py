import requests

# URL of the Flask app
url = "http://localhost:5000/get_all_jobs"

# Send a GET request
response = requests.get(url, params={
    'usertype' : 'recruiters',
    'id' : 1
})

# response = requests.post(url, json={
#     'email' : 'spiderman_112@gmail.com',
#     'password' :'123',
#     'usertype': "seekers",
#     'username': 'bada spiderman',
#     'fullName': 'Bid spiderman'
# })

# Check if the request was successful
if response.status_code == 200:
    print("Response from the server:", response.text)
else:
    print("Failed to get a response from the server", response.text)