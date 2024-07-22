import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Column.css";

export type ColumnType = {
  className?: string;
  linkOne?: string;
  linkTwo?: string;
  linkThree?: string;
  linkFour?: string;
  linkFive?: string;
  showLinkFour?: boolean;
  showLinkFive?: boolean;

  /** Style props */
  propBoxShadow?: CSSProperties["boxShadow"];
};

const Column: FunctionComponent<ColumnType> = ({
  className = "",
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
  linkFive,
  showLinkFour,
  showLinkFive,
  propBoxShadow,
}) => {
  const columnStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  return (
    <div className={`column ${className}`} style={columnStyle}>
      <div className="column-one" />
      <div className="footer-links">
        <div className="link">
          <div className="link-one">{linkOne}</div>
        </div>
        <div className="link1">
          <div className="link-two">{linkTwo}</div>
        </div>
        <div className="link2">
          <div className="link-three">{linkThree}</div>
        </div>
        <div className="link3">
          {showLinkFour && <div className="link-four">{linkFour}</div>}
        </div>
        <div className="link4">
          {showLinkFive && <div className="link-five">{linkFive}</div>}
        </div>
      </div>
    </div>
  );
};

export default Column;
