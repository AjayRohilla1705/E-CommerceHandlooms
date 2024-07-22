import { FunctionComponent } from "react";
import XIcon from "./XIcon";
import "./GridRowOne.css";

export type GridRowOneType = {
  className?: string;
};

const GridRowOne: FunctionComponent<GridRowOneType> = ({ className = "" }) => {
  return (
    <div className={`grid-row-one ${className}`}>
      <div className="new-arrivals-container">
        <div className="image-5-parent">
          <img
            className="image-5-icon"
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
          <div className="categories-container">
            <h1 className="comfortable-blankets">
              <p className="comfortable">{`Comfortable `}</p>
              <p className="blank-line4">&nbsp;</p>
              <p className="blank-line5">&nbsp;</p>
              <p className="blank-line6">&nbsp;</p>
              <p className="blankets">Blankets</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="quilts-parent">
        <div className="quilts">
          <div className="grid-item-two-wrapper">
            <div className="grid-item-two">
              <div className="image-17-wrapper">
                <img
                  className="image-17-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-17@2x.png"
                />
              </div>
              <div className="wrapper-image-18">
                <img
                  className="image-18-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-18@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="royal-curtains-parent">
            <h1 className="royal-curtains">
              <p className="royal">Royal</p>
              <p className="blank-line7">&nbsp;</p>
              <p className="blank-line8">&nbsp;</p>
              <p className="blank-line9">&nbsp;</p>
              <p className="curtains1">Curtains</p>
            </h1>
            <div className="facebook-icon">
              <h1 className="cushion-covers">
                <p className="cushion">Cushion  </p>
                <p className="covers">Covers</p>
              </h1>
            </div>
          </div>
        </div>
        <div className="best-sellers-wrapper">
          <h1 className="best-sellers">Best Sellers</h1>
        </div>
      </div>
      <XIcon />
    </div>
  );
};

export default GridRowOne;
