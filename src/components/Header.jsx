import { Link } from "react-router-dom";

function Header () {
    return (
        <div className="header">
            <Link to="/"><img src="/images/header-logo.png" alt="Colorado Airlift Outreach Logo" className="header-img"></img></Link>
        </div>
    )
}

export default Header;