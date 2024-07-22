import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import HomeButton from "../components/HomeButton";
import GridRowOne from "../components/GridRowOne";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ContentGrid from "../components/ContentGrid";
import "./Desktop.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <div className="frame">
        <h2 className="summer-start-sale1">
          ✨. Summer Start sale 11 Get Free DHURRIE on orders above 10000 ✨.
        </h2>
      </div>
      <img
        className="navigate-your-educational-futu"
        alt=""
        src="/navigate-your-educational-future-confidently-with@2x.png"
      />
      <section className="step-into-a">
        Step into a world of traditional elegance with our exclusive collection
        of handloom products.
      </section>
      <img
        className="desktop-1-child"
        loading="lazy"
        alt=""
        src="/line-3.svg"
      />
      <div className="desktop-1-item" />
      <img
        className="desktop-1-inner"
        loading="lazy"
        alt=""
        src="/line-11.svg"
      />
      <section className="new-arrival-image">
        <div className="new-arrival-product">
          <h1 className="new-arrivals"> New Arrivals</h1>
        </div>
        <div className="screenshot-2024-06-27-164118-2-parent">
          <img
            className="screenshot-2024-06-27-164118-2"
            loading="lazy"
            alt=""
            src="/screenshot-20240627-164118-2@2x.png"
          />
          <div className="image-26-wrapper">
            <img
              className="image-26-icon"
              loading="lazy"
              alt=""
              src="/image-26@2x.png"
            />
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <img className="line-icon" loading="lazy" alt="" src="/line-11.svg" />
      <img className="rectangle-icon" alt="" src="/rectangle-17@2x.png" />
      <HomeButton />
      <img className="desktop-1-child1" alt="" src="/line-1-1.svg" />
      <img className="desktop-1-child2" alt="" src="/line-1-1.svg" />
      <section className="product-image">
        <div className="categories-wrapper">
          <h1 className="categories">Categories</h1>
        </div>
        <div className="bedsheets">
          <GridRowOne />
          <FrameComponent1 />
        </div>
      </section>
      <img className="desktop-1-child3" alt="" src="/line-11.svg" />
      <FrameComponent />
      <ContentGrid />
    </div>
  );
};

export default Desktop;
