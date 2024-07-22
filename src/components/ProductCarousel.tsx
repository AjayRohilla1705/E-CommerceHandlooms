import { FunctionComponent } from "react";
import ThirdProductImage from "./ThirdProductImage";
import PriceList from "./PriceList";
import "./ProductCarousel.css";

export type ProductCarouselType = {
  className?: string;
};

const ProductCarousel: FunctionComponent<ProductCarouselType> = ({
  className = "",
}) => {
  return (
    <div className={`product-carousel1 ${className}`}>
      <div className="frame-parent6">
        <div className="rating-value-parent">
          <div className="rating-value">
            <div className="slide-content">
              <h1 className="bedsheets3">Bedsheets</h1>
              <img
                className="slide-content-child"
                loading="lazy"
                alt=""
                src="/line-12.svg"
              />
            </div>
          </div>
          <img
            className="image-25-icon"
            loading="lazy"
            alt=""
            src="/image-25@2x.png"
          />
        </div>
        <div className="carousel-track">
          <ThirdProductImage image6="/image-61@2x.png" />
          <ThirdProductImage image6="/image-27@2x.png" propGap="2.313em" />
          <ThirdProductImage image6="/image-29@2x.png" propGap="1.813em" />
        </div>
      </div>
      <div className="product-name-wrapper">
        <div className="product-name">
          <div className="rating-and-image">
            <PriceList />
            <PriceList
              propMarginLeft="-2.594em"
              propFlex="1"
              propMinWidth="17em"
              propWidth="unset"
            />
            <PriceList
              propMarginLeft="-2.594em"
              propFlex="1"
              propMinWidth="17em"
              propWidth="unset"
            />
          </div>
          <div className="price-and-rating-container">
            <ThirdProductImage image6="/image-27@2x.png" propGap="2.313em" />
            <div className="image-and-rating">
              <div className="product-card-image">
                <div className="button24">Add to cart</div>
                <img
                  className="image-28-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className="review-details-wrapper">
                <div className="review-details">
                  <div className="product-image1">
                    <div className="stars10">
                      <img
                        className="average-rating-stars"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className="average-rating-stars1"
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className="average-rating-stars2"
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <img
                        className="average-rating-stars3"
                        loading="lazy"
                        alt=""
                        src="/vector-3.svg"
                      />
                      <img
                        className="average-rating-stars4"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="detailed-product-name">
                      <div className="text">(4.5 stars)</div>
                    </div>
                  </div>
                  <div className="rating-summary">
                    <div className="floral-print-cotton9">
                      Floral Print Cotton Super King Bedsheet with 2 Reversible
                      Pillow Covers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ThirdProductImage image6="/image-30@2x.png" propGap="2.313em" />
          </div>
        </div>
      </div>
      <div className="blanket-image">
        <div className="product-card-details">
          <PriceList
            propMarginLeft="unset"
            propFlex="unset"
            propMinWidth="unset"
            propWidth="22.688em"
          />
          <PriceList
            propMarginLeft="-2.594em"
            propFlex="unset"
            propMinWidth="unset"
            propWidth="22.688em"
          />
          <PriceList
            propMarginLeft="-2.594em"
            propFlex="unset"
            propMinWidth="unset"
            propWidth="22.688em"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
