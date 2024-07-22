import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

export type LoginFormType = {
  className?: string;
};

const LoginForm: FunctionComponent<LoginFormType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLoginButtonBackgroundClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className={`login-form ${className}`}>
      <div className="login-form-container">
        <div className="login-form-content">
          <div className="hi-welcome-back-parent">
            <div className="hi-welcome-back">{`Hi, Welcome back 👋 `}</div>
            <button className="google-login">
              <div className="google-login-child" />
              <img
                className="flat-color-iconsgoogle"
                alt=""
                src="/flatcoloriconsgoogle.svg"
              />
              <div className="google-login-button">
                <a className="login-with-google">Login with Google</a>
              </div>
            </button>
          </div>
          <div className="email-login-container-parent">
            <div className="email-login-container">
              <div className="frame-parent">
                <div className="line-wrapper">
                  <div className="line-div" />
                </div>
                <div className="or-login-with">or Login with Email</div>
                <div className="line-container">
                  <div className="frame-child1" />
                </div>
              </div>
              <a className="email">Email</a>
            </div>
            <div className="email-input">
              <div className="email-input-child" />
              <div className="enter-your-email">Enter your email id</div>
            </div>
            <div className="password-input">
              <div className="password">Password</div>
              <div className="password-input-container">
                <div className="password-input-container-child" />
                <div className="password-input-inner">
                  <div className="enter-your-password">Enter your password</div>
                </div>
                <img
                  className="basileye-closed-solid-icon"
                  loading="lazy"
                  alt=""
                  src="/basileyeclosedsolid.svg"
                />
              </div>
            </div>
            <div className="login-options">
              <div className="remember-me">
                <input className="remember-me-checkbox" type="checkbox" />
                <div className="remember-me1">Remember Me</div>
              </div>
              <div className="forgot-password">Forgot Password?</div>
            </div>
          </div>
          <div className="login-buttons">
            <button className="login-button">
              <div
                className="login-button-background"
                onClick={onLoginButtonBackgroundClick}
              />
              <div className="login">Login</div>
            </button>
            <div className="signup-button-container">
              <div className="not-registered-yet-container">
                <span className="not-registered-yet">Not registered yet?</span>
                <span className="span8">{` `}</span>
                <span className="create-an-account">Create an account</span>
                <span className="span9">{` `}</span>
                <span className="signup">SignUp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="reshot-illustration-website-de-icon"
        loading="lazy"
        alt=""
        src="/reshotillustrationwebsitedesignu3pzxdsevy-1@2x.png"
      />
    </div>
  );
};

export default LoginForm;
