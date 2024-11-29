import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-200 rounded-md shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 p-2 text-left font-semibold">Name</th>
            <th className="border border-gray-200 p-2 text-left font-semibold">Email</th>
            <th className="border border-gray-200 p-2 text-left font-semibold">Phone</th>
            <th className="border border-gray-200 p-2 text-left font-semibold">Company</th>
            <th className="border border-gray-200 p-2 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-200 p-2">{user.name}</td>
              <td className="border border-gray-200 p-2">{user.email}</td>
              <td className="border border-gray-200 p-2">{user.phone}</td>
              <td className="border border-gray-200 p-2">{user.company.name}</td>
              <td className="border border-gray-200 p-2 text-blue-500">
                <Link to={`/users/${user.id}`} >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
