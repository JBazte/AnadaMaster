import { React } from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const getPath = (path) => {
        const parts = path.split('/');
        if (parts.length >= 3 && parts[1] === 'client') {
            return '/client';
        }
        if (parts.length >= 3 && parts[1] === 'order') {
            return '/order';
        }
        if (parts.length >= 3 && parts[1] === 'product') {
            return '/product';
        }
        if (parts.length >= 3 && parts[1] === 'rawmaterial') {
            return '/rawmaterial';
        }
        if (parts.length >= 3 && parts[1] === 'employee') {
            return '/employee';
        }
        if (parts.length >= 3 && parts[1] === 'business') {
            return '/business';
        }
        return path;
    };

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
                            <Link to="/corereservas/list" className={`nav-link rounded-pill py-0 px-3 ${getPath(location.pathname) === '/client' || getPath(location.pathname) === '/business' || getPath(location.pathname) === '/order' || getPath(location.pathname) === '/product' || location.pathname === '/corereservas/list' ? 'active' : ''}`} >CoreReservas</Link>
                        </li>
                        <li className="nav-item mx-3 my-auto">
                            <Link to="/corebodega/list" className={`nav-link rounded-pill py-0 px-3 ${getPath(location.pathname) === '/rawmaterial' || getPath(location.pathname) === '/rawmaterial' || getPath(location.pathname) === '/employee' || location.pathname === '/corebodega/list' ? 'active' : ''}`}>CoreBodega</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;