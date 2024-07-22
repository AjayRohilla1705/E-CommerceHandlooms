import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./XIcon.css";

export type XIconType = {
  className?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const XIcon: FunctionComponent<XIconType> = ({
  className = "",
  propHeight,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const xIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propHeight, propWidth, propFlex, propMinWidth]);

  return (
    <div className={`x-icon ${className}`} style={xIconStyle}>
      <div className="wrapper-image-19-parent">
        <div className="wrapper-image-19">
          <img
            className="image-19-icon"
            loading="lazy"
            alt=""
            src="/image-19@2x.png"
          />
        </div>
        <div className="image-wrapper">
          <h1 className="luxury-towels">
            <p className="luxury">Luxury</p>
            <p className="blank-line2">&nbsp;</p>
            <p className="blank-line3">&nbsp;</p>
            <p className="towels">Towels</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default XIcon;
