const clientId = "5ebee059d83d48319da0868e16b99725";
const redirectUri = 'http://localhost:3000/';
let accessToken;


const Spotify = {
        getAccessToken() {
    
        if (accessToken) {
          return accessToken;
        } 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
          accessToken = accessTokenMatch[1];
          const expiresIn = Number(expiresInMatch[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
          return accessToken;
        } else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
          window.location = accessUrl;
        }
      },

         async getSongs (searchedTitle) {
            
            const baseURL = "https://api.spotify.com";
            const searchEndpoint = "/v1/search";
            let token = Spotify.getAccessToken();
            try {
                const response = await fetch(`${baseURL}${searchEndpoint}?q=${searchedTitle}&type=track`, {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                });
                if (response.ok) {
                    const jsonResponse = await response.json();
                 //   console.log(jsonResponse); 
                 const resultsArr = await jsonResponse.tracks.items.map((item) => {
                    return {
                        name: item.name,
                        artist: item.artists[0].name,
                        album: item.album.name,
                        id: item.id,
                        uri: item.uri
                    }
                });
                return resultsArr;
                } else {
                    throw new Error("Request not successful");
                }
            } catch(error) {
                alert(error);
                console.log(error);
            }
        },
}

export default Spotify;











//--------------------------------------------------
