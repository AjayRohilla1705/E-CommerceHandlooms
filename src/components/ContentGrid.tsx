import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContentGrid.css";

export type ContentGridType = {
  className?: string;
};

const ContentGrid: FunctionComponent<ContentGridType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBedsheetsTextClick = useCallback(() => {
    navigate("/frame-25");
  }, [navigate]);

  const onImage16IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/frame-33");
  }, [navigate]);

  return (
    <header className={`content-grid ${className}`}>
      <img
        className="raja-s-chanab-16x20-removebg-p-icon1"
        loading="lazy"
        alt=""
        src="/raja-s-chanab-16x20removebgpreview-2@2x.png"
      />
      <div className="product-carousel">
        <div className="frame-parent5">
          <div className="category-wrapper">
            <div className="category">
              <a className="bedsheets1" onClick={onBedsheetsTextClick}>
                Bedsheets
              </a>
              <div className="icon-image-wrapper">
                <img className="icon-image" alt="" src="/icon-image.svg" />
              </div>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="cushion-covers-parent">
              <div className="cushion-covers1">Cushion Covers</div>
              <div className="curtains-container">
                <img
                  className="vector-cushion-icon"
                  alt=""
                  src="/icon-image.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="curtains-parent">
              <div className="curtains2">Curtains</div>
              <div className="vector-curtain-wrapper">
                <img
                  className="vector-curtain-icon"
                  alt=""
                  src="/icon-image.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="bathing-parent">
              <div className="bathing">Bathing</div>
              <div className="towel-title-container">
                <img
                  className="vector-bath-icon"
                  alt=""
                  src="/icon-image.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper4">
            <div className="quilts-group">
              <a className="quilts1">Quilts</a>
              <div className="grid-item-one">
                <img
                  className="vector-quilt-icon"
                  alt=""
                  src="/icon-image.svg"
                />
              </div>
            </div>
          </div>
          <div className="category-grid-wrapper">
            <div className="category-grid">
              <a className="blankets1">Blankets</a>
              <div className="grid-item-three">
                <img
                  className="vector-blanket-icon"
                  alt=""
                  src="/icon-image.svg"
                />
              </div>
            </div>
          </div>
          <div className="about-us-frame">
            <a className="about-us1">About Us</a>
          </div>
          <div className="three-product-button">
            <img
              className="three-product-button-child"
              alt=""
              src="/line-4.svg"
            />
          </div>
          <div className="image-16-wrapper">
            <img
              className="image-16-icon"
              loading="lazy"
              alt=""
              src="/image-16@2x.png"
              onClick={onImage16IconClick}
            />
          </div>
          <img
            className="image-15-icon"
            loading="lazy"
            alt=""
            src="/image-15@2x.png"
            onClick={onImageClick}
          />
        </div>
      </div>
    </header>
  );
};

export default ContentGrid;
