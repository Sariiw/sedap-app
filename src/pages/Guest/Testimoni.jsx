import { FaQuoteLeft } from "react-icons/fa";

export default function Testimoni() {
    return (
        <div>
            <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://grahapenabatam.id/images/penahall5.png')` }}>
                <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
                    <h1 className="text-4xl font-bold">TESTIMONI</h1>
                    <p className="mt-2 text-sm">Home / Testimoni</p>
                </div>
            </div>

            <section className="py-20 bg-gray-50 text-center">
                <div className="mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Testimonial</h2>
                    <p className="text-gray-500 text-lg"> ;
                        Apa Kata Mereka <span className="text-orange-500 font-semibold">Yang Sudah Menggunakan Jasa Kami</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    <Card name="Rina" text="Gedung bersih dan sangat nyaman untuk seminar!" />
                    <Card name="Andi" text="Proses booking cepat dan mudah. Recommended!" />
                    <Card name="Maya" text="Fasilitasnya lengkap dan pelayanan bagus!" />
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pt-5">
                    <Card name="Rina" text="Gedung bersih dan sangat nyaman untuk seminar!" />
                    <Card name="Andi" text="Proses booking cepat dan mudah. Recommended!" />
                    <Card name="Maya" text="Fasilitasnya lengkap dan pelayanan bagus!" />
                </div>

            </section>
        </div>
    );
}

function Card({ name, text }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-orange-500 text-3xl mb-4">
                <FaQuoteLeft />
            </div>
            <p className="italic text-gray-700 mb-6">“{text}”</p>
            <div className="font-bold text-gray-800 text-lg">{name}</div>
        </div>

    );
}
