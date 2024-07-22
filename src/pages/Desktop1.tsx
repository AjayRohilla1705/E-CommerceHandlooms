import { FunctionComponent } from "react";
import "./Desktop1.css";

const Desktop1: FunctionComponent = () => {
  return (
    <div className="desktop">
      <img className="desktop-child" alt="" src="/rectangle-14.svg" />
      <div className="content">
        <a className="curtains">Curtains</a>
        <div className="filters">
          <div className="filter-options">
            <a className="cotton">Cotton</a>
            <div className="under-999-rs">Under 999 Rs</div>
            <a className="linen">Linen</a>
            <div className="newly-arrived">Newly Arrived</div>
            <a className="silk">Silk</a>
            <div className="luxury-range">Luxury Range</div>
            <div className="newly-arrived1">Newly Arrived</div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="product">
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        </div>
        <div className="heading-parent">
          <h3 className="heading">
            <span className="white-flower-curtain">
              <span className="white-flower-curtain1">{`White Flower Curtain    `}</span>
              <span className="span4">{`                       `}</span>
            </span>
            <span className="silk1">SILK</span>
          </h3>
          <button className="button8">
            <div className="button9">Explore</div>
          </button>
        </div>
      </div>
      <div className="header1">
        <img
          className="image-17-icon"
          loading="lazy"
          alt=""
          src="/image-171@2x.png"
        />
        <div className="heading-group">
          <h3 className="heading1">
            <span className="white-flower-curtain2">
              <span className="white-flower-curtain3">{`White Flower Curtain    `}</span>
              <span className="span5">{`                      `}</span>
            </span>
            <span className="linen1">LINEN</span>
          </h3>
          <div className="button-frame">
            <button className="button10">
              <div className="button11">Explore</div>
            </button>
          </div>
        </div>
      </div>
      <div className="product-details">
        <div className="product1">
          <img className="image-18-icon" alt="" src="/image-181@2x.png" />
        </div>
        <h3 className="heading2">
          <span className="white-flower-curtain4">
            <span className="white-flower-curtain5">{`White Flower Curtain    `}</span>
            <span className="span6">{`                       `}</span>
          </span>
          <span className="silk2">SILK</span>
        </h3>
        <div className="action-buttons">
          <button className="button12">
            <div className="button13">Explore</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;