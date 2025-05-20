import { useState } from "react";
import HasilGaji from "./components/HasilGaji";
import InputGaji from "./components/InputGaji";

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");
  const pajak = 0.11;
  const totalGaji = gaji - gaji * pajak;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>

        <div className="mb-4">
          <div>
            <InputGaji pesan = "Pajak: " persen = "11%" label="Gaji Pokok" type="number" placeholder="Masukkan jumlah gaji" onChange={(e) => setGaji(e.target.value)}/>
          </div>
        </div>

        <div>
          {!gaji ? (
            <HasilGaji isi="  Silahkan masukkan gaji yang valid (tidak boleh kosong atau negatif" className="mt-4 p-3 bg-red-100 border-1-4 border-red-500 text-red-700"/>
          ) : (
            <HasilGaji isi={`Total Take Home Pay (THP): Rp ${totalGaji.toLocaleString()}`} className="mt-4 p-3 bg-blue-100 border-1-4 border-blue-500 text-blue-700 break-words" />)}
        </div>
		
      </div>
    </div>
  );
}
