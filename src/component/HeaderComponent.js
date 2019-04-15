import React from "react";
import {Link} from "react-router-dom";


const headerComponent = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="javascript:void(0)">Echanges devises</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to={'/'} className="nav-link"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/taux-devises'} className="nav-link"> Taux des devises </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default headerComponent;