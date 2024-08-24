export default {
  getAccessToken: () => {
    return fetch('https://api.artsy.net/api/tokens/xapp_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: '7135d6a0c388b51d467e',
        client_secret: '60698da8f74ebf8281b409b8b1ec4a5b'
      })
    })
    .then(response => response.json())
    .then(data => {
      return data.token;
    })
    .catch(error => {
      console.error('Error fetching access token:', error);
      return null;
    });
  },
  runOnLoad: () => {
    this.getAccessToken().then(token => {
			return token
    });
  }
};