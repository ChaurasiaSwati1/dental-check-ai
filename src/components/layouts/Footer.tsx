import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../assets/img/home.svg";
import homeActive from "../../assets/img/home-active.svg";
import report from "../../assets/img/reports.svg";
import reportActive from "../../assets/img/reports-active.svg";
import profile from "../../assets/img/profile.svg";
import profileActive from "../../assets/img/profile-active.svg";

function Footer() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname.includes("/home"));
  }, [location.pathname]);

  return (
    <>
      <div className="relative foot-main overflow-hidden">
        <div className="footerBar h-[5px] w-[134px] absolute left-0 right-0 bottom-[0px] mb-2 z-[6] rounded-md bg-[#ffffff] mx-auto"></div>
        <div className="footer bg-[#0F1114] z-1">
          <div className="footer-inner py-4 px-8 max-w-[375px] mx-auto">
            <div className="grid grid-cols-12 gap-3 w-[100%]">
              <div className="col-span-4">
                <Link to="/home">
                  <img
                    src={location.pathname === "/home" ? homeActive : home}
                    alt="home"
                    className={location.pathname === "/home" ? "active" : ""}
                  />
                </Link>
              </div>
              <div className="col-span-4 mx-auto">
                <Link to="/reports">
                  <img
                    src={location.pathname === "/reports" ? reportActive : report}
                    alt="report"
                    className={location.pathname === "/" ? "active" : ""}
                  />
                </Link>
              </div>
              <div className="col-span-4 ms-auto">
                <Link to="/profile">
                  <img
                    src={location.pathname === "/profile" ? profileActive : profile}
                    alt="profile"
                    className={location.pathname === "/profile" ? "active" : ""}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
