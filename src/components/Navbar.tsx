import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav
                className="navbar sticky-top navbar-expand-md bg-dark border-bottom border-body navbar-dark"
                data-bs-theme="dark"
            >
                <div className="container container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="icon.jpg" alt="Logo" width="30" height="30" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/profile">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/users">
                                    View users
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;