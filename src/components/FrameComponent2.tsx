import { FunctionComponent } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={`frame-group ${className}`}>
      <div className="our-instagram-wrapper">
        <h1 className="our-instagram">Our Instagram</h1>
      </div>
      <div className="frame-container">
        <div className="frame-div">
          <div className="content-wrapper">
            <div className="content1">
              <img className="icon-eye" alt="" src="/-icon-eye.svg" />
              <div className="timeline-date">
                <div className="container">
                  <img
                    className="placeholder-image-icon"
                    loading="lazy"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="timeline-date1">
              <div className="container1">
                <img
                  className="image-27-icon2"
                  loading="lazy"
                  alt=""
                  src="/image-271@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="timeline-date2">
              <div className="container2">
                <img
                  className="image-6-icon"
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-wrapper">
          <h1 className="about-us"> About Us</h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
