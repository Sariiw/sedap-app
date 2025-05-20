import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

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
            framework.name
                .toLowerCase()
                .includes(_searchTerm) ||
            framework.description
                .toLowerCase()
                .includes(_searchTerm);
    
        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;
        return matchesSearch && matchesTag;
    });
    
    const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search framework..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                    onChange={handleChange}
                />

                <select
                    name="selectedTag"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                    onChange={handleChange}
                >
                    <option value="">All Tags</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>{tag}</option>
                    ))}
                </select>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {filteredFrameworks.map((item) => (
                        <div key={item.id} className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300">
                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <a className="text-blue-500 hover:text-blue-700 font-medium mt-2 block" href={item.details.officialWebsite} target="_blank" rel="noopener noreferrer">Visit Website</a>
                            <p className="text-gray-700 font-medium mt-1">Developer: {item.details.developer}</p>
                            <p className="mt-2">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="bg-blue-200 text-blue-700 px-2 py-1 text-xs rounded-full mr-2">{tag}</span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}