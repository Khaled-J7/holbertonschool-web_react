
import "./Footer.css";
import {getCurrentYear, getFooterCopy} from "../utils/utils.js" 

function Footer() {
    return (
        <>
            <div className='App-footer'><p>Copyright {getCurrentYear()} - {getFooterCopy()}</p></div>
        </>
    )
}

export default Footer