export default function Artikel() {
    return (

        <div className="card">
            <h1>Chocolate Monggo</h1>
            <Penulis
                nama="Sari"
                tanggal={new Date().toLocaleDateString()} />
            <Judul
                judul="CERITA MONGGO" />
            <Deskripsi
                deskripsi=" Ahli Cokelat Pertama di Yogyakarta! Perjalanan ini dimulai di Yogyakarta pada tahun 2001 ketika seorang pria berusia 35 tahun dari Belgia menginjakkan kaki di Indonesia tanpa rencana. Merasa kecewa dengan kualitas yang kurang baik dari cokelat yang Ia temukan di Indonesia, Ia memutuskan untuk mengambil tindakan dengan membuat beberapa spesialisasi cokelat dari negara asalnya dengan menggunakan sumber daya terbatas. " />
            <Gambar/>

        </div>
    )
}
function Penulis(props) {
    return (
        <div>
            <p>Nama Penulis: {props.nama}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}
function Judul(props) {
    return (
        <div>
            <p>Judul: {props.judul}</p>
        </div>
    )
}

function Deskripsi(props) {
    return (
        <div>
            <p>{props.deskripsi}</p>
        </div>
    )
}

function Gambar() {
    return (
        <img src="img/coklat.png" alt="logo" style={{ width: "600px" }} />
    )
}
