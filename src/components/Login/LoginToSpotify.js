import "./login.css";

const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-top-read",
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const LoginToSpotify = () => {
  const handleLogin = () => {
    window.location = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true&state=code`;
  };

  return (
    <div>
      <h1>MyFest</h1>
      <h3>What's your line up?</h3>
      <div className="icon">
        <img
          className="logo"
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
          alt="spotify logo"
        />
      </div>

      <div className="login-button-div">
        <p onClick={() => handleLogin()}>Tap to log into Spotify</p>
      </div>
    </div>
  );
};

export default LoginToSpotify;
