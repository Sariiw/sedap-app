import { useState } from "react";
import productData from "./Produk.json";
import { FaShoppingCart, FaHeart, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProductList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isFading, setIsFading] = useState(false);
    const productsPerPage = 6;
    const totalPages = Math.ceil(productData.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (newPage) => {
        if (newPage === currentPage || newPage < 1 || newPage > totalPages) return;
        setIsFading(true);
        setTimeout(() => {
            setCurrentPage(newPage);
            setIsFading(false);
        }, 300);
    };

    const generateRandomBgColor = () => {
        const colors = [
            "bg-yellow-50",
            "bg-green-50",
            "bg-pink-50",
            "bg-red-50",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="bg-white py-12 font-['Rubik']">
            <p className="text-gray-500 font-lato">Recently Added</p>
            <h1 className="text-3xl font-bold uppercase font-oswald mb-8">New Products</h1>

            <div
                key={currentPage}
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"
                    }`}
            >
                {currentProducts.map((produk) => (
                    <div key={produk.id} className="group bg-white border border-gray-200 shadow-sm rounded-md overflow-hidden">
                        <div className={`relative ${generateRandomBgColor()} p-6`}>
                            {/* Sale Label */}
                            {produk.label === "Sale" && (
                                <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 uppercase">
                                    Sale
                                </div>
                            )}

                            {/* Gambar Produk */}
                            <img
                                src={produk.gambar}
                                alt={produk.nama}
                                className="w-full h-40 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Hover Icons */}
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-green-100 text-gray-700 hover:text-black p-2 rounded-full">
                                    <FaEye />
                                </button>
                                <button className="bg-green-100 text-gray-700 hover:text-black p-2 rounded-full">
                                    <FaHeart />
                                </button>
                                <button className="bg-green-100 text-gray-700 hover:text-black p-2 rounded-full">
                                    <FaShoppingCart />
                                </button>
                            </div>
                        </div>

                        {/* Info Produk */}
                        <div className="p-4 text-center">
                            <h3 className="font-semibold text-gray-800 mb-1">{produk.nama}</h3>
                            <div className="text-green-500 text-sm mb-1">★★★★★</div>
                            <p className="text-gray-900 font-bold">Rp {produk.harga.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
