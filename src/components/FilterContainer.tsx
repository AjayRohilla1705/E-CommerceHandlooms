import { FunctionComponent } from "react";
import "./FilterContainer.css";

export type FilterContainerType = {
  className?: string;
};

const FilterContainer: FunctionComponent<FilterContainerType> = ({
  className = "",
}) => {
  return (
    <div className={`filter-container ${className}`}>
      <div className="filter-container-child" />
      <h1 className="quick-filter">Quick Filter</h1>
      <div className="filter-options1">
        <div className="price-filter">
          <input className="image-22" type="checkbox" />
          <div className="single-wrapper">
            <h3 className="single">Single</h3>
          </div>
        </div>
        <div className="price-filter1">
          <div className="image-22-parent">
            <img className="image-22-icon" alt="" src="/image-22-1@2x.png" />
            <img className="icon-check" alt="" src="/-icon-check.svg" />
          </div>
          <div className="double-wrapper">
            <h3 className="double">Double</h3>
          </div>
        </div>
        <div className="price-filter2">
          <input className="image-221" type="checkbox" />
          <div className="king-wrapper">
            <h3 className="king">King</h3>
          </div>
        </div>
        <div className="price-filter3">
          <input className="image-222" type="checkbox" />
          <div className="king-fitted-wrapper">
            <h3 className="king-fitted">King Fitted</h3>
          </div>
        </div>
        <div className="price-filter4">
          <input className="image-223" type="checkbox" />
          <div className="floral-wrapper">
            <h3 className="floral">Floral</h3>
          </div>
        </div>
        <div className="price-filter5">
          <input className="image-224" type="checkbox" />
          <div className="geometric-wrapper">
            <h3 className="geometric">Geometric</h3>
          </div>
        </div>
        <div className="price-filter6">
          <input className="image-225" type="checkbox" />
          <div className="plain-and-strips-wrapper">
            <h3 className="plain-and-strips">Plain and Strips</h3>
          </div>
        </div>
        <div className="bedsheet-info">
          <input className="image-226" type="checkbox" />
          <div className="under-999-wrapper">
            <div className="under-999">Under 999</div>
          </div>
        </div>
      </div>
      <div className="rating-container">
        <h1 className="availabilty">Availabilty</h1>
        <div className="availability-options">
          <div className="bedsheet-info1">
            <input className="image-227" type="checkbox" />
            <div className="in-stock-wrapper">
              <h3 className="in-stock">In Stock</h3>
            </div>
          </div>
          <div className="stock-options">
            <input className="image-228" type="checkbox" />
            <div className="price-options">
              <h3 className="out-of-stock">Out oF Stock</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bedsheet-details">
        <h1 className="price">Price</h1>
        <img
          className="image-23-icon"
          loading="lazy"
          alt=""
          src="/image-23@2x.png"
        />
      </div>
      <div className="price-filter7">
        <h1 className="color">Color</h1>
        <div className="product-name-container1">
          <img
            className="image-24-icon"
            loading="lazy"
            alt=""
            src="/image-24@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
