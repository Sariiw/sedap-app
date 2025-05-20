import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="p-8">
        
      <h1 className="text-3xl font-bold mb-6 text-center">List of Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">No</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Photo</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Name</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Email</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">
                  <img src={user.image} alt={user.firstName} className="w-10 h-10 rounded-full object-cover" />
                </td>
                <td className="py-3 px-6">{user.firstName} {user.lastName}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
