import { FunctionComponent } from "react";
import LoginForm from "../components/LoginForm";
import "./LoginPage.css";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="login-page">
      <div className="rajas-chanab-parent">
        <h1 className="rajas-chanab">Raja’s Chanab</h1>
        <button className="rectangle-parent">
          <div className="frame-child" />
          <a className="sign-up">Sign Up</a>
        </button>
      </div>
      <section className="login-now-parent">
        <h1 className="login-now">Login now</h1>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
