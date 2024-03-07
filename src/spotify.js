const client_id = "";
const clientSecret = "";
const baseURL = "https://api.spotify.com";
const searchEndpoint = "/v1/search";

const Spotify = {
    async getAccessToken () {
        const redirect_uri = "http://localhost:3000/";
        const scope = 'playlist-modify-public';
        let accessToken = window.location.href.match(/(?<=access_token=)[^&]*/)[0];
        let expiresIn = window.length.href.match(/(?<=expires_in=)[^&]*/)[0];
        try {
        if (accessToken) {
            return accessToken;
        } else {
            while (!accessToken) {
                let url = 'https://accounts.spotify.com/authorize';
                url += '?response_type=token';
                url += '&client_id=' + encodeURIComponent(client_id);
                url += '&scope=' + encodeURIComponent(scope);
                url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
                window.location = url;
            }
            setTimeout(() => {
                accessToken = "";
                window.history.pushState("Access Token","","/");
            },expiresIn*1000);
        }
        } catch (error) {
            console.log(error);
            alert(error);
        }
        },
        
        async getSongs (searchedTitle) {
            let accessToken = Spotify.getAccessToken();
            try {
                const response = await fetch(`${baseURL}${searchEndpoint}?q=${searchedTitle}&type=track`, {
                    headers: {
                        Authorization: "Bearer " + accessToken,
                    }
                });
                if (response.ok) {
                    const jsonResponse = await response.json();
                    console.log(jsonResponse); //SO FAR JUST LOGGED TO THE CONSOLE
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
