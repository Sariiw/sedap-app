export default function QnA() {
    return (
        <div className="card">
            <h1>Question and Answer</h1>
            <Gambar />
            <form className="kotak">
                <Tanya
                    penanya="Junita"
                    tanya="Apakah Chocolate Monggo sudah memiliki cabang?" />
            </form>
            <form className="kotak">
                <Jawab
                    penjawab="Raihan"
                    untuk="Sari"
                    jawab="Sudah ada 3 cabang" />
            </form>
            <Footer />
        </div>
    )
}

function Gambar() {
    return (
        <img src="img/tanya.jpg" alt="QnA" style={{ width: "300px" }} />
    )
}

function Tanya(props) {
    return (
        <div>
            <p>User: {props.penanya}</p>
            <p>Question: {props.tanya}</p>
        </div>
    )
}


function Jawab(props) {
    return (
        <div>
            <p>Admin: {props.penjawab}</p>
            <p>To: {props.untuk}</p>
            <p>Answer: {props.jawab}</p>
        </div>
    )
}

function Footer() {
    return (
        <p className="kanan">Chocolate Monggo</p>
    )
}