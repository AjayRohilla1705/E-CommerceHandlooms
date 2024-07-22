import { FunctionComponent } from "react";
import "./AddToCart.css";

export type AddToCartType = {
  className?: string;
};

const AddToCart: FunctionComponent<AddToCartType> = ({ className = "" }) => {
  return (
    <div className={`add-to-cart ${className}`}>
      <div className="add-to-cart-button-wrapper">
        <div className="add-to-cart-button">
          <h1 className="floral-print-cotton4">
            Floral Print Cotton Super King Bedsheet with 2 Reversible Pillow
            Covers
          </h1>
          <div className="counter">
            <div className="counter-buttons">
              <div className="counter-sub-buttons">
                <img
                  className="react-iconsfafaminus"
                  loading="lazy"
                  alt=""
                  src="/reacticonsfafaminus.svg"
                />
              </div>
              <div className="quantity">1</div>
              <div className="counter-sub-buttons1">
                <img
                  className="react-iconsfafaplus"
                  loading="lazy"
                  alt=""
                  src="/reacticonsfafaplus.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buy-now-parent">
        <div className="buy-now">
          <div className="buy-now-button-wrapper">
            <div className="buy-now-button">
              <div className="shipping">
                <img className="shipping-child" loading="lazy" alt="" />
              </div>
              <div className="frame1">
                <h3 className="add-to-cart1">Add to cart</h3>
              </div>
            </div>
          </div>
          <div className="product-details-parent">
            <div className="product-details1">
              <div className="user-settings-wrapper">
                <div className="user-settings">
                  <div className="product-details-content">
                    <div className="rs-4799-1139900-rs-parent">
                      <div className="rs-4799-1139900-container4">
                        <b>Rs. 4,799</b>
                        <span className="span7"> 11</span>
                        <span className="rs4">399.00 Rs</span>
                      </div>
                      <div className="frame-item" />
                    </div>
                  </div>
                  <div className="products-details-container">
                    <p className="products-details-print-typ">
                      <span className="products-details">
                        Products Details :   
                      </span>
                      <span className="print-type-ikat">Print Type: Ikat</span>
                    </p>
                    <p className="blank-line">&nbsp;</p>
                    <p className="size-single-60x">
                      Size: Single (60X 90 Inches)
                    </p>
                    <p className="blank-line1">&nbsp;</p>
                    <p className="material-100">Material : 100% cotton</p>
                    <p className="filling-100"> Filling : 100% Cotton</p>
                    <p className="wash-care-dry"> Wash Care: Dry Clean only</p>
                    <p className="suitable-for-mild">
                       Suitable for mild winters/ AC rooms
                    </p>
                    <p className="size-60x90-inches"> Size: 60X90 Inches</p>
                  </div>
                </div>
              </div>
              <div className="shipping-details">
                <button className="shipping-button">
                  <b className="buy-now1">Buy Now</b>
                </button>
                <div className="pincode-wrapper">
                  <div className="pincode">
                    <div className="shipping-availability-wrapper">
                      <div className="shipping-availability">
                        Shipping Availability
                      </div>
                    </div>
                    <div className="pincode-input">
                      <div className="pincode-sub-input">
                        <input
                          className="enter-pincode"
                          placeholder="Enter pincode"
                          type="text"
                        />
                      </div>
                      <button className="pincode-sub-input1">
                        <b className="check-now">Check Now</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="rectangle-group">
                <div className="frame-inner" />
                <div className="offer-type">
                  <img
                    className="ciombo-offer-icon"
                    loading="lazy"
                    alt=""
                    src="/ciombo-offer.svg"
                  />
                  <div className="offer-timer">
                    <div className="timer">
                      <div className="hours-value-parent">
                        <div className="hours-value">
                          <div className="hours-number">
                            <div className="hours-label">{`08 `}</div>
                            <div className="hours-bottom-label">
                              <div className="hours-top-label">:</div>
                            </div>
                          </div>
                        </div>
                        <div className="hours">HOURS</div>
                      </div>
                      <div className="minutes-value-parent">
                        <div className="minutes-value">
                          <div className="minutes-number">
                            <div className="minutes-label">23</div>
                            <div className="minutes-bottom-label">:</div>
                          </div>
                        </div>
                        <div className="minutes">MINUTES</div>
                      </div>
                      <div className="seconds-value-parent">
                        <div className="seconds-value">
                          <div className="seconds-label">12</div>
                        </div>
                        <div className="seconds">SECONDS</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-button">
                  <button className="get-now-button">
                    <div className="get-now-button-child" />
                    <b className="get-it-now">GET IT NOW</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="you-may-also-like-wrapper">
          <h1 className="you-may-also">You May also like</h1>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
