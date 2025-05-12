import React from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className="bodySectionWithMargin" data-testid="bodySectionWithMargin">
        <BodySection title={title}>{children}</BodySection>
    </div>
  );
}

export default BodySectionWithMarginBottom;