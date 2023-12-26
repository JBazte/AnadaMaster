import { React } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-md bg-white justify-content-center shadow-sm">
            <div className="d-flex page-margin w-100 align-middle">
                <Link className="navbar-brand mx-5" to="/">
                    <img src="../logo.png" alt="" className="d-inline-block align-top w-25" style={{ "filter": "brightness(0%)" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 mx-5 justify-content-end" id="collapsingNavbar3">
                    <ul className="nav nav-pills navbar-nav">
                        <li className="nav-item mx-3 my-auto">
                            <Link className="nav-link rounded-pill py-0 px-3 active" to="#">CoreReservas</Link>
                        </li>
                        <li className="nav-item mx-3 my-auto">
                            <Link className="nav-link rounded-pill py-0 px-3 navbar-custom-text" to="#">CoreBodegas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;