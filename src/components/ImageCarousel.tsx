import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageCarousel.css";

export type ImageCarouselType = {
  className?: string;
};

const ImageCarousel: FunctionComponent<ImageCarouselType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/frame-33");
  }, [navigate]);

  const onDetailsIconClick = useCallback(() => {
    navigate("/frame-25");
  }, [navigate]);

  return (
    <div className={`image-carousel ${className}`}>
      <header className="lore">
        <div className="dhurrie-offer">
          <h3 className="summer-start-sale2">
            ✨. Summer Start sale 11 Get Free DHURRIE on orders above 10000 ✨.
          </h3>
        </div>
        <div className="lore-child" />
        <img
          className="image-15-icon1"
          loading="lazy"
          alt=""
          src="/image-15@2x.png"
          onClick={onImageClick}
        />
        <img
          className="image-16-icon1"
          loading="lazy"
          alt=""
          src="/image-16@2x.png"
        />
        <img className="details-icon" alt="" src="/icon-image.svg" />
        <div className="cushion-covers2">Cushion Covers</div>
        <img className="details-icon1" alt="" src="/icon-image.svg" />
        <div className="curtains3">Curtains</div>
        <div className="about-us2">About Us</div>
        <img className="details-icon2" alt="" src="/icon-image.svg" />
        <div className="blankets2">Blankets</div>
        <img className="details-icon3" alt="" src="/icon-image.svg" />
        <div className="quilts2">Quilts</div>
        <img className="details-icon4" alt="" src="/icon-image.svg" />
        <div className="bathing1">Bathing</div>
        <img
          className="details-icon5"
          loading="lazy"
          alt=""
          src="/icon-image.svg"
          onClick={onDetailsIconClick}
        />
        <div className="bedsheets2">Bedsheets</div>
        <img className="search-icon" loading="lazy" alt="" src="/search.svg" />
        <img className="lore-item" loading="lazy" alt="" />
      </header>
      <img
        className="raja-s-chanab-16x20-removebg-p-icon2"
        loading="lazy"
        alt=""
        src="/raja-s-chanab-16x20removebgpreview-2@2x.png"
      />
    </div>
  );
};

export default ImageCarousel;
