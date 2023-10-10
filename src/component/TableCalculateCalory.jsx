import React from 'react'

function TableCalculateCalory() {

    const dataKalori = [
        {namaMakanan: 'Oatmeal', jumlahKalori: 150},
        {namaMakanan: 'Chicken Salad', jumlahKalori: 300},
        {namaMakanan: 'Greek Yogurt', jumlahKalori: 150},
        {namaMakanan: 'Salmon Panggang', jumlahKalori: 250},
        {namaMakanan: 'Telur Rebus', jumlahKalori: 80}
    ]

  return (
    <div className='rounded w-full px-[50px]'>
        <table className='w-full rounded'>
            <thead className='bg-green-800 text-white'>
                <tr className=''>
                    <th className='px-[50px] py-2'>No</th>
                    <th className='px-[50px] py-2'>Nama Makanan</th>
                    <th className='px-[50px] py-2'>Jumlah Kalori</th>
                </tr>
            </thead>
            <tbody className='bg-red'>
                {
                    dataKalori.map((dt, idx)=>{
                        return(
                            <tr key={idx} style={{backgroundColor: "#4ddb40"}} className='bg-[#40991A] text-xl'>
                                <td className='py-3 text-center'>{idx+1}</td>
                                <td className='py-3 '>{dt.namaMakanan}</td>
                                <td className='py-3 text-center'>{dt.jumlahKalori}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableCalculateCalory