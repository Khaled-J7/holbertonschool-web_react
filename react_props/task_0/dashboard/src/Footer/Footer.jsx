import React from "react";
import "./Footer.css";
import { getFooterCopy, getFullYear } from "../utils/utils";

function Footer() {
  let footertext = getFooterCopy(true);
  return (
    <div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {footertext}
        </p>
      </div>
    </div>
  );
}

export default Footer;
