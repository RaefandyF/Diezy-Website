import React from "react";
import buttonGif from "../Assets/button.gif";
import "../css/home.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div className="home-page1 py-5">
        <div className="h-3/4 flex justify-center items-center">
          <div className="text-light wrap1">
            <div>
              <h1 className="text-[50px]">Selamat Datang di Diezy</h1>
            </div>
            <div>
              <h3 className="text-[20px]">
                Personal Asisten Diet Kamu. Klik Tanda untuk Melanjutkan
              </h3>
            </div>
            <div className="flex justify-center items-center mt-5">
              <img src={buttonGif} alt="gif1" className="w-20 h-20 py-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-page2 position-relative overflow-hidden bg-light">
        <div
          className="mainPage col-md-5 p-lg-5 mx-auto mt-32"
          style={{ width: "70rem" }}
        >
          <h1 className="mainText display-4 fw-normal text-white text-center">
            Izinkan Kami Mengenali Anda
          </h1>
          <div className="w-9/12 ml-32 bg-lime-800 mt-3 rounded-md">
            <form>
              <div className="form-group w-5/5 ml-10 mt-4">
                <label
                  className="mt-4 text-white text-2xl"
                  for="inputRegisterName"
                >
                  Nama
                </label>
                <br></br>
                <input
                  type="text"
                  className="form-control w-11/12"
                  id="inputRegisterNama"
                ></input>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group w-4/5 ml-7 mt-4">
                      <label
                        className="text-white text-2xl"
                        for="inputRegisterDate"
                      >
                        Tanggal lahir
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputRegisterDate"
                      ></input>
                    </div>
                  </div>
                  <div class="col-6">
                    <div className="form-group ml-7 w-4/5">
                      <label
                        className="mt-4 text-white text-2xl ml-2"
                        for="inputRegisterGender"
                      >
                        Jenis Kelamin
                      </label>
                      <br></br>
                      <form></form>
                      <div className="container mt-2">
                        <div className="row">
                          <div className="col-6">
                            <input type="radio" name="inputGender"></input>
                            <label className="text-white">Male</label>
                          </div>
                          <div className="col-6">
                            <input type="radio" name="inputGender"></input>
                            <label className="text-white">Female</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={'/login'}>
                <button
                  type="submit"
                  style={{ marginLeft: "44%" }}
                  className="btn bg-white mt-9 mt-20 text-lime-800 text-2xl"
                >
                  Lanjut
                </button>
              </Link>
            </form>
            <p className="text-white">
              Sudah Pernah Mencoba Diezy?{" "}
              <u style={{ cursor: "pointer" }}>Login</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
