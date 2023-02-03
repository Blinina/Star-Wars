import { Link } from "react-router-dom"
// import logo from "../assets/images/logo.png"
export const Nav = () => {
    return (
        <nav>
            <div>
                {/* <img src={logo} alt="logo" /> */}
            </div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/characters">Characters</Link>
            </ul>
        </nav>
    );
};
