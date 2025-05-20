import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    CustomerID: "",
    CustomerName: "",
    Email: "",
    Phone: "",
    Loyalty: "Bronze",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer baru:", formData);

    alert("Customer berhasil ditambahkan!");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Tambah Customer Baru</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Customer ID"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.CustomerID}
              onChange={(e) => setFormData({ ...formData, CustomerID: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Nama"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.CustomerName}
              onChange={(e) => setFormData({ ...formData, CustomerName: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.Email}
              onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Telepon"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.Phone}
              onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
              required
            />
          </div>
          <div>
            <select
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.Loyalty}
              onChange={(e) => setFormData({ ...formData, Loyalty: e.target.value })}
            >
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>

          <div className="flex justify-between mt-8 space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300 w-full md:w-auto"
            >
              Simpan
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-8 py-4 rounded-lg hover:bg-gray-600 focus:outline-none transition duration-300 w-full md:w-auto"
              onClick={() => navigate("/")}
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
