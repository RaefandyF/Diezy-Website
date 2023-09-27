import React, { useState, useEffect } from "react";
import "../css/InputCustomerData.css";
import '../css/loading.css'
import Button from "../component/Button";
import { Link, useNavigate } from "react-router-dom";

function InputCustomerData() {
  const [loading, setLoading] = useState(false);
  const [mulaiClick, setMulaiClick] = useState(false)

  const navigate = useNavigate()


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000)

    if(mulaiClick){
        setTimeout(()=>{
            setMulaiClick(false)
        }, 2000)
        setMulaiClick(false)
    }
  }, []);

  return (
    <div className="input-customer-data">
      {loading ? (
        <div className="loading-container"></div>
      ) : !mulaiClick ? (
        <div className="w-full flex justify-center items-center h-screen">
          <div>
            <div className="text-center">
              <h1 className="text-white text-[50px]">Kenali Tubuhmu</h1>
            </div>
            <div className="w-[649px] h-[500px] bg-green-800 rounded-2xl">
              <div className="px-3 pt-5 pb-3">
                <div>
                  <p className="text-white text-[20px]">Berat Badan (kg)</p>
                </div>
                <div className="py-2">
                  <input
                    type={"text"}
                    className="rounded w-full px-1 py-2"
                    placeholder="Berat Badan"
                  />
                </div>
              </div>
              <div className="px-3 pb-3">
                <div>
                  <p className="text-white text-[20px]">Tinggi Badan (cm)</p>
                </div>
                <div>
                  <input
                    type={"text"}
                    className="rounded w-full px-1 py-2"
                    placeholder="Tinggi Badan"
                  />
                </div>
              </div>
              <div className="px-3 pb-3">
                <div>
                  <p className="text-white text-[20px]">Target (kg)</p>
                </div>
                <div>
                  <input
                    type={"text"}
                    className="rounded w-full px-1 py-2"
                    placeholder="Target"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center py-2">
                  <Button 
                  className={"bg-white px-2 py-2 w-[80px] rounded text-lime-500 font-bold"}
                  onClick={()=>setMulaiClick(true)}
                  text={"Mulai!"}
                  >
                  </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
            <div className="loading-container">
                <div className="w-full flex justify-center items-center h-2/4">
                    <p className="text-white text-[40px] font-bold">Menyiapkan</p>
                </div>
            </div>
            {
                setTimeout(()=>{
                    setMulaiClick(false)
                    navigate('/login')
                }, 2000)
                
            }
        </div>
      ) }
    </div>
  );
}

export default InputCustomerData;
