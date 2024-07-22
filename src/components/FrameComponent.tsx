import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={`offer-title-parent ${className}`}>
      <div className="offer-title">
        <h1 className="top-offers"> Top Offers</h1>
      </div>
      <div className="offers">
        <img className="offers-child" alt="" src="/rectangle-18.svg" />
        <div className="offer-details">
          <div className="offer-one">
            <img
              className="pngtree-pink-arrow-c4d-stereo-icon"
              loading="lazy"
              alt=""
              src="/pngtreepinkarrowc4dstereopngimage-2429054removebgpreview-4@2x.png"
            />
          </div>
          <div className="offer-two">
            <img
              className="pngtree-pink-arrow-c4d-stereo-icon1"
              loading="lazy"
              alt=""
              src="/pngtreepinkarrowc4dstereopngimage-2429054removebgpreview-2@2x.png"
            />
            <img
              className="screenshot-2024-06-27-164054-2"
              alt=""
              src="/screenshot-20240627-164054-2@2x.png"
            />
          </div>
        </div>
        <div className="slider-navigation">
          <div className="slider-dots">
            <div className="dot" />
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
