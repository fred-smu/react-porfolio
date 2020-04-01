import React from "react";
// import "../styles/Nav.css";

function Nav() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand"  >Frederick Clayton Guthrie III</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li id="NavAbout" className={
                window.location.pathname === "/" 
                  ? "nav-link active"
                  : "nav-link"
              }>
            <a className="nav-link About" href="/">About </a>
          </li>
          <li id="NavContact" className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }>
            <a className="nav-link " href="/contact">Contact <span class="sr-only">(current)</span></a>
          </li>
          <li  id="NavPortfolio" className={
                window.location.pathname === "/portFolio" 
                  ? "nav-link active"
                  : "nav-link"
              }>
            <a className="nav-link " href="/portFolio">Portfolio <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
