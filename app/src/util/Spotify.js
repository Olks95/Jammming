const redirectUri = "http://localhost:3000/"
const clientId = "ea249e6e221f4769b57b15bb63676e37";
const spotifyAuthorizeUrl = "https://accounts.spotify.com/authorize?client_id={clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}";

let accessToken;
let expiresIn;



const Spotify {
	getAccessToken() {
		if(accessToken) {
			return accessToken;
		} else {
			const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
			const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
			if(urlAccessToken && urlExpiresIn) {
				accessToken = urlAccessToken[1];
				expiresIn = urlExpiresIn[1];
				window.setTimeout(() => accessToken = '', expiresIn * 1000);
				window.history.pushState('Access Token', null, '/');
			} else {
				window.location = spotifyAuthorizeUrl;
			}
		}
	}
}


export default Spotify;