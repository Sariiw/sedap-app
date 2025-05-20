export default function Latihan(){
    
    return(
        <div className="card">
            <h1>Latihan</h1>

            <Artikel
            judul= "CERITA MONGGO"
            deskripsi= " Ahli Cokelat Pertama di Yogyakarta! Perjalanan ini dimulai di Yogyakarta pada tahun 2001 ketika seorang pria berusia 35 tahun dari Belgia menginjakkan kaki di Indonesia tanpa rencana. Merasa kecewa dengan kualitas yang kurang baik dari cokelat yang Ia temukan di Indonesia, Ia memutuskan untuk mengambil tindakan dengan membuat beberapa spesialisasi cokelat dari negara asalnya dengan menggunakan sumber daya terbatas. "/>
            <img src = "img/coklat.png" alt="logo" style={{width: "500px"}}/>
            {new Date().toLocaleDateString()}

            <QnA
            tanya= ""
            jawab= ""/>

            <List
            menu= ""
            detail= ""
            img src = "img/kucing.jpg" alt="logo"/>
            
            <footer>
                <p>by sari</p>
            </footer>
        </div>
    )
}


function QnA(props){
    return (
        <div>
            <hr/>
            <p>QnA Section</p>
            <p>Pertanyaan: {props.tanya}</p>
            <p>Jawaban: {props.jawab}</p>
        </div>
    )
} 

function List(props){
    return (
        <div>
            <hr/>
            <p>List Product</p>
            <p>Nama Menu: {props.menu}</p>
            <p>Harga Menu: {props.detail}</p>
        </div>
    )
}