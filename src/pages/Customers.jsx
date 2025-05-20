import { Link } from "react-router-dom";
import customers from "../Customer.json";
import PageHeader2 from "../components/PageHeader2";


export default function Customers() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader2 title="Customers" breadcrumb={["Customers", "Customers List"]}>
        <div className="flex space-x-2">
          <Link to="/formcust" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
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
        Customer List
      </h1>

      <div className="overflow-x-auto px-5">
        <table className="w-full table-auto border-collapse border border-gray-200 text-sm">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="border border-gray-200 px-4 py-3">ID</th>
              <th className="border border-gray-200 px-4 py-3">Nama</th>
              <th className="border border-gray-200 px-4 py-3">Email</th>
              <th className="border border-gray-200 px-4 py-3">Telepon</th>
              <th className="border border-gray-200 px-4 py-3">Loyalty</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {customers.map((cust, index) => (
              <tr
                key={cust.CustomerID}
                className={`hover:bg-blue-50 transition duration-150 ease-in-out ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {cust.CustomerID}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {cust.CustomerName}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {cust.Email}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {cust.Phone}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      cust.Loyalty === "Gold"
                        ? "bg-yellow-200 text-yellow-800"
                        : cust.Loyalty === "Silver"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {cust.Loyalty}
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
