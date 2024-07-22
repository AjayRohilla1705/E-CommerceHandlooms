import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ThirdProductImage.css";

export type ThirdProductImageType = {
  className?: string;
  image6?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const ThirdProductImage: FunctionComponent<ThirdProductImageType> = ({
  className = "",
  image6,
  propGap,
}) => {
  const thirdProductImageStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`third-product-image ${className}`}
      style={thirdProductImageStyle}
    >
      <img className="image-6-icon1" loading="lazy" alt="" src={image6} />
      <div className="second-rating-value">
        <div className="product-information">
          <div className="product-rating">
            <div className="stars9">
              <img
                className="first-star-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <img
                className="second-star-icon"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="third-star-icon"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <img className="fourth-star-icon" alt="" src="/vector-3.svg" />
              <img className="fifth-star-icon" alt="" src="/vector-4.svg" />
            </div>
            <div className="rating-number-wrapper">
              <div className="rating-number">(4.5 stars)</div>
            </div>
          </div>
          <div className="rating-display">
            <div className="floral-print-cotton8">
              Floral Print Cotton Super King Bedsheet with 2 Reversible Pillow
              Covers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdProductImage;
