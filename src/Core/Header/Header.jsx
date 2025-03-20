import React from 'react'

export default function Header() {
  return (
    <>
    <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark w-100">
          <div className="container-fluid">
            <a className="navbar-brand text-white fs-5 ps-4" href="#">
              <img
                src="/Images/Logo.png"
                alt="ICCNDS Logo"
                height="58"
                width="130"
                className="me-2"
              />
            </a>
            <button
              className="navbar-toggler me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-end">
              <ul className="navbar-nav fs-5 align-items-start ps-5">
                <li className="nav-item pe-4">
                  <Link
                    className={`nav-link text-white ${location.pathname === "/" ? "active" : ""}`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown pe-4">
                  <Link
                     className={`nav-link dropdown-toggle text-white ${location.pathname.includes("about") ? "active" : ""}`}
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                  <ul className="dropdown-menu fs-5">
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/about" ? "active" : ""}`}
                        to="/about"
                      >
                        About the Conference
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/about/Scope" ? "active" : ""}`}
                        to="/about/Scope"
                      >
                        Scope of Conference
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/about/Organizing_Committee" ? "active" : ""}`}
                        to="/about/Organizing_Committee"
                      >
                        Organizing Committee
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/about/Editorial_Board" ? "active" : ""}`}
                        to="/about/Editorial_Board"
                      >
                        Editorial Board
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown pe-4">
                  <Link
                    className={`nav-link dropdown-toggle text-white ${location.pathname.includes("author") ? "active" : ""}`}
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Author's Desk
                  </Link>
                  <ul className="dropdown-menu fs-5">
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/authors/journal-publication" ? "active" : ""}`}
                        to="/authors/journal-publication"
                      >
                        Journal Publication
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/authors/key-dates" ? "active" : ""}`}
                        to="/authors/key-dates"
                      >
                        Key Dates
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/authors/registration-details" ? "active" : ""}`}
                        to="/authors/registration-details"
                      >
                        Registration Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/authors/new-paper-submissions" ? "active" : ""}`}
                        to="/authors/new-paper-submissions"
                      >
                        New Paper Submission
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item pe-4">
                  <Link
                    className={`nav-link text-white ${location.pathname === "/Speaker" ? "active" : ""}`}
                    to="/Speaker"
                  >
                    Speakers
                  </Link>
                </li>
                <li className="nav-item pe-4">
                  <Link
                    className={`nav-link text-white ${location.pathname === "/contact" ? "active" : ""}`}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
