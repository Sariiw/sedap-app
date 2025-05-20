export default function About() {
  return (
    <div className="font-['Rubik']">
      <div
        className="relative w-full h-64 bg-cover bg-center font-['Rubik']"
        style={{ backgroundImage: `url('https://grahapenabatam.id/images/penahall5.png')` }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">TENTANG KAMI</h1>
          <p className="mt-2 text-sm">Home / Tentang Kami</p>
        </div>
      </div>

      <div className="bg-white px-4 py-10 max-w-6xl mx-auto">
        {/* Judul & Deskripsi */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-['Rubik']">SELAMAT DATANG DI RESTORAN SEDAP</h1>
          <p className="text-sm text-gray-600 mt-2 max-w-xl mx-auto font-['Rubik']">
            Restoran Sedap adalah tempat makan keluarga yang menyajikan aneka hidangan tradisional dan modern
            dengan cita rasa autentik. Kami mengutamakan kualitas bahan, kebersihan, dan pelayanan ramah untuk
            memastikan setiap kunjungan menjadi pengalaman yang menyenangkan dan berkesan.
          </p>
        </div>

        {/* Gambar Dekorasi */}
        <div className="mb-12">
          <img
            src="https://grahapenabatam.id/images/penahall4.png"
            alt="Dekorasi Restoran"
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>

        {/* Visi & Misi */}
        <div className="mb-12 font-['Rubik']">
          <h2 className="text-2xl font-bold mb-6">Visi & Misi Kami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Misi Kami</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Menyediakan hidangan berkualitas tinggi dengan cita rasa khas nusantara.</li>
                <li>Menghadirkan suasana makan yang nyaman dan ramah keluarga.</li>
                <li>Memastikan layanan pelanggan yang cepat, sopan, dan profesional.</li>
                <li>Mendukung petani dan produsen lokal melalui pemanfaatan bahan-bahan segar dan lokal.</li>
                <li>Mengembangkan inovasi menu agar pelanggan selalu mendapatkan pengalaman kuliner yang segar dan unik.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Visi Kami</h3>
              <p className="text-gray-700">
                Menjadi restoran pilihan utama di kota ini yang dikenal dengan kelezatan masakan, suasana hangat,
                dan pelayanan terbaik untuk semua kalangan.
              </p>
            </div>
          </div>
        </div>

        {/* Sejarah */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Sejarah Restoran Sedap</h2>
          <p className="text-gray-700 leading-relaxed">
            Restoran Sedap berdiri sejak tahun 2010 dan berawal dari usaha keluarga kecil yang ingin menghadirkan
            masakan rumahan khas Indonesia ke tengah kota. Berkat konsistensi dalam menjaga kualitas dan cita rasa,
            Restoran Sedap kini telah berkembang menjadi salah satu destinasi kuliner favorit masyarakat. Dengan konsep
            ruang makan yang nyaman dan menu yang terus diperbarui, kami berkomitmen untuk terus memberikan pengalaman
            terbaik bagi setiap pelanggan yang datang.
          </p>
        </div>
      </div>
    </div>
  );
}
