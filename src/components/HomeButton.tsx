import { FunctionComponent } from "react";
import Column from "./Column";
import "./HomeButton.css";

export type HomeButtonType = {
  className?: string;
};

const HomeButton: FunctionComponent<HomeButtonType> = ({ className = "" }) => {
  return (
    <footer className={`home-button ${className}`}>
      <div className="footer-1">
        <div className="content4">
          <div className="newsletter">
            <img
              className="company-logo-icon"
              loading="lazy"
              alt=""
              src="/company-logo.svg"
            />
            <div className="join-our-newsletter">
              Join newsletter to know about new releases and latest offers
            </div>
            <div className="actions">
              <div className="form">
                <div className="text-input">
                  <div className="placeholder">Enter your email</div>
                </div>
                <div className="button14">
                  <div className="button15">Subscribe</div>
                </div>
              </div>
              <div className="by-subscribing-you-container">
                <span>{`By subscribing you agree to with our `}</span>
                <span className="privacy-policy">Privacy Policy</span>
                <span>
                  {" "}
                  and provide consent to receive updates from our company.
                </span>
              </div>
            </div>
          </div>
          <div className="links">
            <Column
              linkOne="Track Your Order"
              linkTwo="FAQs"
              linkThree="Return/Exchange"
              linkFour="Register Complaint"
              linkFive="Terms of service"
              showLinkFour
              showLinkFive
            />
            <Column
              linkOne="Privacy Policy"
              linkTwo="Refund Policy"
              linkThree="Shipping policy"
              linkFour="Link Nine"
              linkFive="Link Ten"
              showLinkFour={false}
              showLinkFive={false}
              propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            />
            <div className="column1">
              <div className="follow-us">Follow Us</div>
              <div className="social-links">
                <div className="link5">
                  <img
                    className="icon-facebook"
                    loading="lazy"
                    alt=""
                    src="/icon--facebook.svg"
                  />
                  <div className="facebook">Facebook</div>
                </div>
                <div className="link6">
                  <img
                    className="icon-instagram"
                    loading="lazy"
                    alt=""
                    src="/icon--instagram.svg"
                  />
                  <div className="instagram">Instagram</div>
                </div>
                <div className="link7">
                  <img className="icon-x" alt="" src="/icon--x.svg" />
                  <div className="x">X</div>
                </div>
                <div className="link8">
                  <img
                    className="icon-linkedin"
                    alt=""
                    src="/icon--linkedin.svg"
                  />
                  <div className="linkedin">LinkedIn</div>
                </div>
                <div className="link9">
                  <img
                    className="icon-youtube"
                    alt=""
                    src="/icon--youtube.svg"
                  />
                  <div className="youtube">Youtube</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="credits">
          <div className="divider" />
          <div className="row">
            <div className="relume-all-rights">
              © 2023 Relume. All rights reserved.
            </div>
            <div className="footer-links1">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-of-service">Terms of Service</div>
              <div className="cookies-settings">Cookies Settings</div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="join-our-newsletter1">
        Join newsletter to know about new releases and latest offers
      </h2>
      <img
        className="raja-s-chanab-16x20-removebg-p-icon"
        loading="lazy"
        alt=""
        src="/raja-s-chanab-16x20removebgpreview-4@2x.png"
      />
      <img
        className="elephant-3223522-640-4-icon"
        alt=""
        src="/elephant3223522-640-4@2x.png"
      />
    </footer>
  );
};

export default HomeButton;
