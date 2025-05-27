export default function HelloWorld(){
    const propsUserCard = {
        nama: "Sariw",
        nim: "09062005",
        tanggal: "2025-01-01",
        alamat: "Jl.Rumbai"
    }

    return (
        <div className="card">
            <h1>Hello World</h1>
            <p>Selamat Belajar </p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard 
            nama="Triwjsari" 
            nim="2355301202"
            tanggal={new Date().toLocaleDateString()}
            alamat= "Jl.Umban Sari"/>
            <UserCard {...propsUserCard}/>

            <img src = "img/kucing.jpg" alt="logo"/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <smal> Salam dari Binjai</smal>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}
function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Alamat: {props.alamat}</p>
        </div>
    )
}