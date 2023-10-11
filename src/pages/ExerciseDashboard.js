import React from "react";
import "../css/exerciseDashboard.css";
import HeaderDashboard from "../component/HeaderDashboard";
import squat from "../Assets/squat.png";
import Button from "../component/Button";
import Footer from "../component/Footer";

function ExerciseDashboard() {
    return (
        <div className="w-full bg-[#7ed957]">
            <HeaderDashboard />
            <div className="page1-exercise">
                <h1 className="text1">DIET TANPA OLAHRAGA</h1>
                <h1 className="text2">MANA CUKUP!</h1>
                <p>Lengkapi Dietmu dengan berolahraga.
                    Kamu bisa mengikuti olahraga yang telah kami pilih atau memilih sendiri olahraga yang kamu mau.</p>
                <br></br>
                <p>Scroll ke bawah untuk melanjutkan</p>
            </div>

            <div className="page2-exercise">
                <div className=" flex pt-5 justify-content-center">
                    <div className="cursor-pointer rounded-[20px] w-[45%] bg-white mr-3 h-[3.5rem]">
                        <p className="text-[#2C832A] ml-[40%] mt-3 text-[1.1rem] font-bold">Olahraga Rekomendasi</p>
                    </div>
                    <div className="cursor-pointer rounded-[20px] w-[45%] bg-[#2C832A] ml-3">
                        <p className="text-white ml-[35%] mt-3 text-[1.1rem] font-bold">Pilih Olahraga Sendiri</p>
                    </div>
                </div>
                <div className="wrap-all flex mt-[6rem]">
                    {/* box redeclare */}
                    <div className="box rounded mx-3">
                        <div>
                            <img src={squat} className="px-2 py-1" alt="" />
                        </div>
                        <div className="px-2 py-1 text-2xl">
                            <p>Squat</p>
                        </div>
                        <div className="px-2 py-1 text-sm">
                            <p>10x, 2 repetisi</p>
                        </div>
                        <div className="lihat-resep px-2 py-1 text-sm">
                            <p className="text-right text-green-500">Ikuti Latihan</p>
                        </div>
                    </div>
                    <div className="box rounded mx-3">
                        <div>
                            <img src={squat} className="px-2 py-1" alt="" />
                        </div>
                        <div className="px-2 py-1 text-2xl">
                            <p>Squat</p>
                        </div>
                        <div className="px-2 py-1 text-sm">
                            <p>10x, 2 repetisi</p>
                        </div>
                        <div className="lihat-resep px-2 py-1 text-sm">
                            <p className="text-right text-green-500">Ikuti Latihan</p>
                        </div>
                    </div>
                    <div className="box rounded mx-3">
                        <div>
                            <img src={squat} className="px-2 py-1" alt="" />
                        </div>
                        <div className="px-2 py-1 text-2xl">
                            <p>Squat</p>
                        </div>
                        <div className="px-2 py-1 text-sm">
                            <p>10x, 2 repetisi</p>
                        </div>
                        <div className="lihat-resep px-2 py-1 text-sm">
                            <p className="text-right text-green-500">Ikuti Latihan</p>
                        </div>
                    </div>
                    <div className="box rounded mx-3">
                        <div>
                            <img src={squat} className="px-2 py-1" alt="" />
                        </div>
                        <div className="px-2 py-1 text-2xl">
                            <p>Squat</p>
                        </div>
                        <div className="px-2 py-1 text-sm">
                            <p>10x, 2 repetisi</p>
                        </div>
                        <div className="lihat-resep px-2 py-1 text-sm">
                            <p className="text-right text-green-500">Ikuti Latihan</p>
                        </div>
                    </div>
                    <div className="box rounded mx-3">
                        <div>
                            <img src={squat} className="px-2 py-1" alt="" />
                        </div>
                        <div className="px-2 py-1 text-2xl">
                            <p>Squat</p>
                        </div>
                        <div className="px-2 py-1 text-sm">
                            <p>10x, 2 repetisi</p>
                        </div>
                        <div className="lihat-resep px-2 py-1 text-sm">
                            <p className="text-right text-green-500">Ikuti Latihan</p>
                        </div>
                    </div>
                </div>

            </div>
                
            <div className="page3-exercise">
                <div className="diezyPlusBanner2">
                    <Button
                        className={"bg-white px-2 py-2 w-[80px] rounded text-[#2c832a] font-bold  buttonDaftar"}
                        text={"Daftar"}
                    />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default ExerciseDashboard;