import orders from "../Orders.json";
import PageHeader2 from "../components/PageHeader2";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader2 title="Orders" breadcrumb={["Orders", "Orders List"]}>
        <div className="flex space-x-2">
          <Link to="/formOrders"className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add
          </Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Export
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
            Kembali
          </button>
        </div>
      </PageHeader2>

      <h1 className="text-2xl font-bold mb-6 text-gray-800 px-5">
        Daftar Pesanan
      </h1>

      <div className="overflow-x-auto px-5">
        <table className="w-full table-auto border-collapse border border-gray-200 text-sm">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="border border-gray-200 px-4 py-3">Order ID</th>
              <th className="border border-gray-200 px-4 py-3">Customer</th>
              <th className="border border-gray-200 px-4 py-3">Date</th>
              <th className="border border-gray-200 px-4 py-3">Total</th>
              <th className="border border-gray-200 px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {orders.map((order, index) => (
              <tr
                key={order.OrderID}
                className={`hover:bg-blue-50 transition duration-150 ease-in-out ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {order.OrderID}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {order.CustomerName}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {order.OrderDate}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-right">
                  {order.TotalPrice && !isNaN(order.TotalPrice)
                    ? `Rp${order.TotalPrice.toLocaleString("id-ID")}`
                    : "Rp0"}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      order.Status === "Completed"
                        ? "bg-green-200 text-green-800"
                        : order.Status === "Processing"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {order.Status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
