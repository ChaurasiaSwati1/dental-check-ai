import React from "react";
import home from "../../assets/img/home.svg";
import report from "../../assets/img/reports.svg";
import profile from "../../assets/img/profile.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer mt-8 relative bg-[#0F1114] ">
        <div className="footer-inner py-4 px-8 max-w-[375px] mx-auto">
          <div className="grid grid-cols-12 gap-3 w-[100%]">
            <div className="col-span-4">
              <img src={home} alt="home"/>
            </div>
            <div className="col-span-4 mx-auto">
              <img src={report} alt="home"/>
            </div>
            <div className="col-span-4 ms-auto">
              <img src={profile} alt="home"/>
            </div>
          </div>
        </div>
        <div className="footerBar h-[5px] w-[134px] absolute left-0 right-0 bottom-[0px] mt-4 mb-2 z-6 rounded-md bg-[#ffffff] mx-auto"></div>
      </div>
    </>
  );
}

export default Footer;
