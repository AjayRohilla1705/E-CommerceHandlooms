import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./PriceList.css";

export type PriceListType = {
  className?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const PriceList: FunctionComponent<PriceListType> = ({
  className = "",
  propMarginLeft,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const priceListStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propMarginLeft, propFlex, propMinWidth, propWidth]);

  return (
    <div className={`price-list ${className}`} style={priceListStyle}>
      <div className="rs-4799-1139900-rs-wrapper">
        <div className="rs-4799-1139900-container8">
          <b>Rs. 4,799</b>
          <span className="span13"> 11</span>
          <span className="rs8">399.00 Rs</span>
        </div>
      </div>
      <button className="button22">
        <div className="button23">Add to cart</div>
      </button>
    </div>
  );
};

export default PriceList;
