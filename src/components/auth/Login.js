import React from 'react';
import OAuthButton from './OAuthButton';

class Login extends React.Component {
  render() {
    const stravaStyle = {
      background: 'url(https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-4/Strava_Logo.jpg)',
      height: '20px',
      width: '20px',
      display: 'inline-block',
      'background-size': 'cover'
    };

    const iconStyle = 'https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-4/footpath-logo.png';

    return (
      <div className="login-all">

        <div className="col-xs-0 col-sm-0 col-md-6 col-lg-6 login-left">
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 login-right">

          <div className="button-wrapper">
            <h1 className="nav-trace-login">TRACE <img src={iconStyle} className="foot-icon-login" /></h1>
            <OAuthButton provider="strava"><p><span className="icon" style={stravaStyle}></span> Login with Strava</p></OAuthButton>
            <br/>
            <a
              className="btn btn-primary"
              id="login-button"
              href="https://www.strava.com/register/free"
              target="blank"
            >Register for Strava account
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;
