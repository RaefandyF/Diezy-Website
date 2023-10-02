import React from "react";
import "../css/Footer.css";
import Button from "./Button";
import LogoDiezy from "../Assets/logoDiezy.png";
import TelephoneIcon from "../Assets/telephone.png";
import EmailIcon from "../Assets/email.png";

function Footer() {
  return (
    <div className="footerPage">
      <div className="flex">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-5">
            <div>
              <img src={LogoDiezy} width={300} />
            </div>
          </div>
          <div className="col-9">
            <h1 className="text-white mt-5" style={{fontSize:"3rem"}}>
              Informasi Kontak
            </h1>
            <h2 className="text-white" style={{fontSize:"1.5rem"}}>ZAF Corp.</h2>
            <div style={{width:"60%"}}>
              <p className="text-white">Jalan Lingkar Boulevar Blok WA No .1 Summarecon Bekasi Kel, RT.006/RW.003, Marga Mulya, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17142 </p>
            </div>
            <div className="flex mt-4">
              <div>
                <img src={TelephoneIcon} />
              </div>
              <div className="mx-2">
                <p className="text-white">021-8889-929</p>
              </div>
            </div>
            <div className="flex mt-4">
              <div>
                <img src={EmailIcon} />
              </div>
              <div className="mx-2">
                <p className="text-white">diezzy.support@diezzy.id</p>
              </div>
            </div>
            {/* <div className="container">
              <div className="row">
                <div className="col-1">
                  <img src={TelephoneIcon}/>
                   <p className="text-white">021-8889-929</p>
                </div>
                <div className="col-11">
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
