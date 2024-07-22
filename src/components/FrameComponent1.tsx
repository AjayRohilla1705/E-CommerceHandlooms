import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`carousel-container-wrapper ${className}`}>
      <div className="carousel-container">
        <div className="curtains-title-container">
          <div className="image-parent">
            <div className="image-parent-child" />
            <img
              className="rating-background-icon"
              loading="lazy"
              alt=""
              src="/rectangle-14@2x.png"
            />
          </div>
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="about-us-container-parent">
                <div className="about-us-container">
                  <div className="stars6">
                    <img
                      className="product-rating-icon"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="product-rating-icon1"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="product-rating-icon2"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className="product-rating-icon3"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <img
                      className="product-rating-icon4"
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                </div>
                <div className="floral-print-cotton5">
                  Floral Print Cotton Super King Bedsheet with 2 Reversible
                  Pillow Covers
                </div>
              </div>
              <div className="rs-4799-1139900-container5">
                <b>Rs. 4,799</b>
                <span className="span10"> 11</span>
                <span className="rs5">399.00 Rs</span>
              </div>
            </div>
            <button className="button16">
              <div className="button17">Add to cart</div>
            </button>
          </div>
        </div>
        <div className="product-card-two">
          <img
            className="product-two-background"
            loading="lazy"
            alt=""
            src="/rectangle-13@2x.png"
          />
          <div className="card-info-two">
            <div className="frame-parent3">
              <div className="stars-parent">
                <div className="stars7">
                  <img className="rating-icon" alt="" src="/vector.svg" />
                  <img className="rating-icon1" alt="" src="/vector-1.svg" />
                  <img className="rating-icon2" alt="" src="/vector-2.svg" />
                  <img className="rating-icon3" alt="" src="/vector-3.svg" />
                  <img className="rating-icon4" alt="" src="/vector-4.svg" />
                </div>
                <div className="instagram-container">
                  <div className="floral-print-cotton-super-king-parent">
                    <div className="floral-print-cotton6">
                      Floral Print Cotton Super King Bedsheet with 2 Reversible
                      Pillow Covers
                    </div>
                    <div className="rs-4799-1139900-container6">
                      <b>Rs. 4,799</b>
                      <span className="span11"> 11</span>
                      <span className="rs6">399.00 Rs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-now-two">
                <button className="button18">
                  <div className="button19">Add to cart</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-one">
          <img
            className="product-three-background"
            loading="lazy"
            alt=""
            src="/rectangle-15@2x.png"
          />
          <div className="card-info-three">
            <div className="frame-parent4">
              <div className="title-info-three-parent">
                <div className="title-info-three">
                  <div className="stars8">
                    <img className="vector-icon30" alt="" src="/vector.svg" />
                    <img className="vector-icon31" alt="" src="/vector-1.svg" />
                    <img className="vector-icon32" alt="" src="/vector-2.svg" />
                    <img className="vector-icon33" alt="" src="/vector-3.svg" />
                    <img className="vector-icon34" alt="" src="/vector-4.svg" />
                  </div>
                  <div className="product-name-three">
                    <div className="product-review">(4.5 stars)</div>
                  </div>
                </div>
                <div className="long-description-three">
                  <div className="floral-print-cotton7">
                    Floral Print Cotton Super King Bedsheet with 2 Reversible
                    Pillow Covers
                  </div>
                </div>
              </div>
              <div className="product-price-three">
                <div className="rs-4799-1139900-container7">
                  <b>Rs. 4,799</b>
                  <span className="span12"> 11</span>
                  <span className="rs7">399.00 Rs</span>
                </div>
              </div>
              <div className="shop-now-three">
                <button className="button20">
                  <div className="button21">Add to cart</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
