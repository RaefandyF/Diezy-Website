import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/Button'

function Login() {
  return (
    <div className="home-page3 position-relative overflow-hidden bg-light">
        <div className="mainPage col-md-5 p-lg-5 mx-auto mt-32" style={{width:"70rem"}}>
            <h1 className="mainText display-4 fw-normal text-white text-center">
              Senang Bertemu Anda Kembali
            </h1>
            <p className="mainText lead fw-normal text-white text-center text-2xl">
              Jangan Menyerah! Lanjutkan capaian diet anda!
            </p>
            <p className="text-white text-center text-2xl">
              Login Untuk Melanjutkan
            </p>
            <div className="w-3/5 ml-52 bg-lime-800 mt-3 rounded-md">
              <form>
                <div className="form-group w-4/5 ml-28 mt-4">
                  <label className="mt-4 text-white text-2xl" for="inputUsername">Username</label>
                  <br></br>
                  <input type="text" className="form-control w-5/6" id="inputUsername" aria-describedby="emailHelp"></input>
                </div>
                <div className="form-group w-4/5 ml-28 mt-3">
                  <label className="text-white text-2xl" for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control w-5/6" id="exampleInputPassword1"></input>
                </div>
                <Link to={'/input-customer-data'}>
                    <Button 
                    type={"submit"} 
                    text={"Login"} 
                    className={"btn bg-white my-4 text-lime-800 text-2xl ml-[45%]"}
                    />
                </Link>
              </form>
            </div>
        </div>
      </div>
  )
}

export default Login