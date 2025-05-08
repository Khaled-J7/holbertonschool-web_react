import "./Footer.css";
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";

function Footer() {
  return (
    <>
      <footer className="App-footer" role="contentinfo">
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy()}
        </p>
      </footer>
    </>
  );
}

export default Footer;
