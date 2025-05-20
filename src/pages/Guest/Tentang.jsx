export default function Tentang() {
    return (
     <div>
         <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://grahapenabatam.id/images/penahall5.png')` }}>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">TENTANG KAMI</h1>
          <p className="mt-2 text-sm">Home / Tentang kami</p>
        </div>
      </div>
      <div className="bg-white px-4 py-10 max-w-6xl mx-auto">
        {/* Logo & Judul */}
        
        <div className="text-center mb-8">
         
          <h1 className="text-3xl font-bold">MELAYANI SEWA ALAT PESTA</h1>
          <p className="text-sm text-gray-600 mt-2 max-w-xl mx-auto">
            Melayani Sewa alat pesta, Sewa kipas angin air, Sewa kursi futura, Sewa kursi Tiffany,
            Sewa AC standing, Sewa genset, Sewa meja kotak, Sewa meja bulat, Sewa tenda, dan lainnya.
            Silakan klik foto atau gambar layanan di bawah ini untuk informasi lengkap.
          </p>
        </div>
  
        {/* Gambar Dekorasi */}
        <div className="mb-12">
          <img
            src="https://grahapenabatam.id/images/penahall4.png"
            alt="Dekorasi Pelaminan"
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>
  
        {/* Visi & Misi */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Visi & Misi Kami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Misi Kami</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Menyediakan fasilitas berkualitas tinggi untuk mendukung berbagai jenis acara, mulai dari seminar, konferensi, hingga pernikahan.</li>
                <li>Meningkatkan layanan pelanggan dengan sistem reservasi yang cepat, mudah, dan transparan.</li>
                <li>Mengembangkan teknologi digital untuk memberikan pengalaman reservasi yang lebih efisien dan modern.</li>
                <li>Mendukung pertumbuhan ekonomi lokal dengan memberikan ruang bagi pelaku usaha dan komunitas untuk berkegiatan.</li>
                <li>Mengedepankan kepuasan pelanggan dengan pelayanan profesional dan ramah.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Visi Kami</h3>
              <p className="text-gray-700">
                Menjadi pusat reservasi gedung terbaik di Riau yang menyediakan layanan profesional,
                fasilitas lengkap, dan kenyamanan bagi setiap penyelenggaraan acara.
              </p>
            </div>
          </div>
        </div>
  
        {/* Sejarah */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Sejarah Graha Pena Riau</h2>
          <p className="text-gray-700 leading-relaxed">
            Gedung Graha Pena Riau adalah salah satu landmark penting di Provinsi Riau yang menjadi
            pusat kegiatan bisnis, media, dan acara publik. Didirikan sebagai bagian dari jaringan
            Graha Pena Group, gedung ini awalnya dibangun untuk mendukung industri media dan perkantoran
            di Pekanbaru. Seiring waktu, Graha Pena Riau berkembang menjadi pusat acara, seminar,
            pernikahan, dan berbagai kegiatan bisnis lainnya. Dengan fasilitas modern dan lokasi strategis,
            gedung ini menjadi pilihan utama bagi masyarakat dan pelaku bisnis yang ingin menyelenggarakan
            berbagai acara profesional maupun personal.
          </p>
        </div>
      </div>
      </div>
    );
  }
  