export default function AboutUs() {
    return (
      <div className="card">
        <h1>Tentang Kami</h1>
        <Sejarah
          sejarah="Gedung Graha Pena Riau adalah salah satu landmark penting di Provinsi Riau yang menjadi pusat kegiatan bisnis, media, dan acara publik. Didirikan sebagai bagian dari jaringan Graha Pena Group, gedung ini awalnya dibangun untuk mendukung industri media dan perkantoran di Pekanbaru. Seiring waktu, Graha Pena Riau berkembang menjadi pusat acara, seminar, pernikahan, dan berbagai kegiatan bisnis lainnya. Dengan fasilitas modern dan lokasi strategis, gedung ini menjadi pilihan utama bagi masyarakat dan pelaku bisnis yang ingin menyelenggarakan berbagai acara profesional maupun personal."
        />
        <Visi
          visi="Menjadi pusat reservasi gedung terbaik di Riau yang menyediakan layanan profesional, fasilitas lengkap, dan kenyamanan bagi setiap penyelenggaraan acara."
        />
        <div className="list">
          <Misi
            misi={[
              "Menyediakan fasilitas berkualitas tinggi untuk mendukung berbagai jenis acara, mulai dari seminar, konferensi, hingga pernikahan.",
              "Meningkatkan layanan pelanggan dengan sistem reservasi yang cepat, mudah, dan transparan.",
              "Mengembangkan teknologi digital untuk memberikan pengalaman reservasi yang lebih efisien dan modern.",
              "Mendukung pertumbuhan ekonomi lokal dengan memberikan ruang bagi pelaku usaha dan komunitas untuk berkegiatan.",
              "Mengedepankan kepuasan pelanggan dengan pelayanan profesional dan ramah.",
            ]}
          />
        </div>
        <Gambar />
      </div>
    );
  }
  
  function Sejarah(props) {
    return (
      <div>
        <h3>Sejarah Graha Pena Riau</h3>
        <p>{props.sejarah}</p>
      </div>
    );
  }
  
  function Visi(props) {
    return (
      <div>
        <h3>Visi</h3>
        <p>{props.visi}</p>
      </div>
    );
  }
  
  function Misi(props) {
  return (
    <div className="text">
      <h3>Misi</h3>
      <ul className="misi-list">
        {props.misi.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Gambar() {
  return <img src="img/graha.jpg" alt="Graha Pena Riau" className="image" />;
}