import frameworkData from "./fm.json";
import { useState } from "react";

export default function Fm() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.title.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag
            ? framework.tags.includes(dataForm.selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Daftar Produk</h1>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <input
                        type="text"
                        name="searchTerm"
                        placeholder="🔍 Cari produk..."
                        className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        onChange={handleChange}
                    />
                    <select
                        name="selectedTag"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        onChange={handleChange}
                    >
                        <option value="">📌 Semua Tags</option>
                        {allTags.map((tag, index) => (
                            <option key={index} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {filteredFrameworks.map((item) => (
                        <div 
                            key={item.id} 
                            className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl hover:scale-105 transition duration-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <p className="text-blue-600 font-medium mt-1">📂 {item.category}</p>

                            <div className="mt-2 flex items-center justify-between">
                                <p className="text-green-600 font-bold text-lg">💲{item.price}</p>
                                <p className="text-red-500 font-medium">🔥 -{item.discountPercentage}%</p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <p className="text-yellow-500 font-semibold">⭐ {item.rating}</p>
                                <p className={`text-sm ${item.stock > 10 ? "text-green-600" : "text-red-600"}`}>
                                    📦 {item.stock} Stok
                                </p>
                            </div>

                            <div className="mt-3">
                                {item.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-blue-200 text-blue-700 px-2 py-1 text-xs rounded-full mr-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-600 font-medium mt-2">🏷 Brand: {item.brand}</p>
                            <p className="text-gray-600">📏 Dimensi: {item.dimensions.depth} x {item.dimensions.height} x {item.dimensions.width}</p>

                            <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
                                🛒 Beli Sekarang
                            </button>
                        </div>
                    ))}
                </div>

                {filteredFrameworks.length === 0 && (
                    <p className="text-center text-gray-500 mt-6 text-lg">
                        ❌ Tidak ada framework yang sesuai dengan pencarian atau filter.
                    </p>
                )}
            </div>
        </div>
    );
}
