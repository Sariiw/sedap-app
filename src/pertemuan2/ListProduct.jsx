export default function ListProduct() {
    return (

        <div className="card">
            <h1>List Product</h1>
            <tr>
                <td>
                    <form className="kotakKecil">
                        <img src="img/1.jpg" alt="logo" className="image" />
                        <Produk
                            nama="Ramadan Bulan Sabit"
                            detail="Chocolate Pralines Dubai" />
                        <Harga
                            berat="90 gram"
                            harga="Rp 140.000" />
                        <Status
                            status="Ada" />
                    </form>
                </td>

                <td>
                    <form className="kotakKecil">
                        <img src="img/2.jpg" alt="logo" className="image" />
                        <Produk
                            nama="Valentine Pralines Heart"
                            detail="Shape Gift Box" />
                        <Harga
                            berat="16 pcs"
                            harga="Rp 270.000" />
                        <Status
                            status="Ada" />
                    </form>
                </td>

                <td>
                    <form className="kotakKecil">
                        
                        <img src="img/3.jpg" alt="logo" className="image" />
                        <Produk
                            nama="Wayang Pralines"
                            detail="Chocolate Best Seller" />
                        <Harga
                            berat="10 Delights"
                            harga="Rp 200.000" />
                        <Status
                            status="Ada" />
                    </form>
                </td>
            </tr>
            <Gambar/>
        </div>

    )
}
function Gambar(props) {
    return (
        <div>
            <p>{props.img}</p>
        </div>
    )
}

function Produk(props) {
    return (
        <div>
            <p>{props.nama}</p>
            <p>{props.detail}</p>
        </div>
    )
}
function Harga(props) {
    return (
        <div>
            <p>{props.berat}</p>
            <p>{props.harga}</p>
        </div>
    )
}

function Status(props) {
    return (
        <div>
            <p>Status: {props.status}</p>
        </div>
    )
}
