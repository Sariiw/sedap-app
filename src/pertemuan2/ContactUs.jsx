export default function ContactUs() {
    return (

        <div className="cardf">
            <h1>Kontak Kami</h1>
            <FormInput1 nama="Nama:" />
            <FormInput2 no="No hp/Wa:" />
            <FormTextArea label="Pesan" />
            <SubmitButton />
        </div>
    )
}
function FormInput1(props) {
    return (
        <div>
            <p>{props.nama}</p>
            <input type="text" className="input-field" />
        </div>
    );
}

function FormInput2(props) {
    return (
        <div>
            <p>{props.no}</p>
            <input type="text" className="input-field" />
        </div>
    );
}

function FormTextArea(props) {
    return (
        <div>
            <p>{props.label}:</p>
            <textarea className="input-field" rows="4"></textarea>
        </div>
    );
}

function SubmitButton() {
    return <button className="submit-btn">Kirim</button>;
}
