import React from "react";
import Carousel from "./Carousel";


const Nav = () => {
  return (
    <>
    <Carousel/>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid my-0 my-md-2 mx-0 mx-md-5">
          <a className="navbar-brand" href="#">
           <img style={{height:"3pc"}} src="https://sheleadsafrica.org/wp-content/themes/sla/assets/img/logomain.png" alt="" />
          </a>
          <button
            className="navbar-toggler d-bock d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-none d-md-block ">
            <div className="dropdown ">
              <button className="dropbtn btn-select mt-2 bg-dark text-dark">
                ABOUT US
              </button>
              

              <div className="dropdown-content">
                <a href="#">WHO WE ARE</a>
                <a href="#">OUR JOURNEY</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn btn-select mt-2 bg-dark text-dark">
              PROGRAMS
              </button>
            

              <div className="dropdown-content">
                <a href="#">  MMI</a>
                <a href="#">HGCP</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn btn-select mt-2 bg-dark text-dark">
                EVENTS
              </button>
            

              <div className="dropdown-content">
                <a href="#">  SLAY FESTIVAL</a>
                <a href="#">UPCOMING</a>
                <a href="#"> EVENTS</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn btn-select mt-2 bg-dark text-dark">
               CAREERS
              </button>
             
            </div>
            <div className="dropdown">
              <button className="dropbtn btn-select mt-2 bg-dark text-dark">
               RESOURCES
              </button>
              
            </div>
            <div className="dropdown">
              <button className="dropbtn btn-select mt-2 bg-dark text-dark">
               COMMUNITY
              </button>
              

              <div className="dropdown-content">
                <a href="#">BOOKCLUBng</a>
                <a href="#">CONTRIBUTE</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="btn btn-primary  fw-bold text-light">
               JOIN NOW
              </button>
              
            </div>
          </div>
          <div
            className="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title mt-5" id="offcanvasNavbarLabel">
              
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                  <a
                    className="nav-link mt-2" 
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
             ABOUT US
                  </a>
                </li>
              <li className="nav-item dropdown">
                  <a
                    className="nav-link mt-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
               WHO WE ARE
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link mt-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CAREERS
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle mt-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                PROGRAMS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                      MMI
                    
                      </a>
                    </li>
                    <li>
                      <hr/>
                      <a className="dropdown-item" href="#">
                      HGCP
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li> */}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle mt-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                EVENTS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                      SLAY FESTIVAL                
                      </a>
                    </li>
                    <li>
                      <hr/>
                      <a className="dropdown-item" href="#">
                      UPCOMING
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li> */}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link mt-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
               RESOURCES
                  </a>
                </li>
                <li className="nav-item dropdown mt-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                COMMUNITY
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item mt-2" href="#">
                      BOOKCLUB
                
                      </a>
                    </li>
                    <li>
                      <hr/>
                      <a className="dropdown-item" href="#">
                      CONTRIBUTE
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li> */}
                  </ul>
                </li>
                <div className="dropdown">
              <button style={{fontSize:"13px",height:"3pc" , width:"9pc"}} className="btn mt-3 btn-primary w-70  fw-bold text-light">
               JOIN NOW
              </button>
              
            </div>
              </ul>
              <form className="d-flex mt-3 d-none" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      
      
    </>
  );
};

export default Nav;
