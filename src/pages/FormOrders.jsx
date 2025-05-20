import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddOrder() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    OrderID: "",
    CustomerName: "",
    OrderDate: "",
    TotalPrice: "",
    Status: "Processing", // Default value for status (but can be changed)
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order baru:", formData);

    alert("Order berhasil ditambahkan!");
    navigate("/orders");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Tambah Order Baru</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="number"
              placeholder="Order ID"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.OrderID}
              onChange={(e) => setFormData({ ...formData, OrderID: parseInt(e.target.value) })}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Customer Name"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.CustomerName}
              onChange={(e) => setFormData({ ...formData, CustomerName: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="date"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.OrderDate}
              onChange={(e) => setFormData({ ...formData, OrderDate: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Total Price"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.TotalPrice}
              onChange={(e) => setFormData({ ...formData, TotalPrice: parseInt(e.target.value) })}
              required
            />
          </div>
          <div>
            <select
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={formData.Status}
              onChange={(e) => setFormData({ ...formData, Status: e.target.value })}
            >
              <option value="Processing">Processing</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
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
              onClick={() => navigate("/orders")}
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
