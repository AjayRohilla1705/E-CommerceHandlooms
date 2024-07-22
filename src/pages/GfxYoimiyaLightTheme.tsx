import { FunctionComponent } from "react";
import ImageCarousel from "../components/ImageCarousel";
import FrameComponent3 from "../components/FrameComponent3";
import FilterContainer from "../components/FilterContainer";
import ProductCarousel from "../components/ProductCarousel";
import "./GfxYoimiyaLightTheme.css";

const GfxYoimiyaLightTheme: FunctionComponent = () => {
  return (
    <div className="gfx-yoimiya-light-theme">
      <ImageCarousel />
      <div className="image-8" />
      <div className="gfx-yoimiya-light-theme-child" />
      <main className="product-card-row">
        <FrameComponent3 />
        <section className="product-row">
          <FilterContainer />
          <div className="product-card" />
          <ProductCarousel />
        </section>
      </main>
    </div>
  );
};

export default GfxYoimiyaLightTheme;
