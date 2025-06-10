import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader2 from "../components/PageHeader2";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader2 title="Dashboard" breadcrumb={["Dashboard", "Order List"]}>
        {" "}
        <div className="flex space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Export
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
            Kembali
          </button>
        </div>
      </PageHeader2>

      <div
        id="dashboard-grid"
        className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {/* Ordrs Section */}
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
          <div className="bg-hijau text-white p-4 rounded-full">
            <FaShoppingCart className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">75</span>
            <span className="text-gray-500">Total Orders</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
          <div className="bg-blue-500 text-white p-4 rounded-full">
            <FaTruck className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">175</span>
            <span className="text-gray-500">Total Delivered</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
          <div className="bg-red-500 text-white p-4 rounded-full">
            <FaBan className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">40</span>
            <span className="text-gray-500">Total Canceled</span>
          </div>
        </div>

        {/* Revenue Section */}
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
          <div className="bg-yellow-500 text-white p-4 rounded-full">
            <FaDollarSign className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Rp.128</span>
            <span className="text-gray-500">Total Revenue</span>
          </div>
        </div>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
