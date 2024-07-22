import { FunctionComponent } from "react";
import XIcon from "./XIcon";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={`product-row-wrapper ${className}`}>
      <div className="product-row1">
        <div className="cushion-image">
          <div className="product-card1">
            <img
              className="image-5-icon1"
              loading="lazy"
              alt=""
              src="/image-51@2x.png"
            />
            <div className="product-name-container">
              <h1 className="comfortable-blankets1">
                <p className="comfortable1">{`Comfortable `}</p>
                <p className="blank-line10">&nbsp;</p>
                <p className="blank-line11">&nbsp;</p>
                <p className="blank-line12">&nbsp;</p>
                <p className="blankets3">Blankets</p>
              </h1>
            </div>
          </div>
        </div>
        <div className="towel-title">
          <div className="towel-image">
            <img
              className="image-9-icon1"
              loading="lazy"
              alt=""
              src="/image-17@2x.png"
            />
            <div className="towel-photo">
              <h1 className="royal-curtains1">
                <p className="royal1">Royal</p>
                <p className="blank-line13">&nbsp;</p>
                <p className="blank-line14">&nbsp;</p>
                <p className="blank-line15">&nbsp;</p>
                <p className="curtains4">Curtains</p>
              </h1>
            </div>
          </div>
        </div>
        <div className="wrapper-image-5-parent">
          <div className="wrapper-image-5">
            <img
              className="image-5-icon2"
              loading="lazy"
              alt=""
              src="/image-18@2x.png"
            />
          </div>
          <div className="filter-title">
            <h1 className="cushion-covers3">
              <p className="cushion1">Cushion  </p>
              <p className="covers1">Covers</p>
            </h1>
          </div>
        </div>
        <XIcon
          propHeight="unset"
          propWidth="unset"
          propFlex="1"
          propMinWidth="9.938em"
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
