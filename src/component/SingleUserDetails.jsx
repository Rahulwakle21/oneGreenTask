import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SingleUserDetails = () => {
  
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.dataList.find((user) => user.id === parseInt(id))
  );

  if (!user) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="text-center text-3xl ">User not found</p>
        <Link to='/'>
          <button className="border p-2 mt-4 rounded-md bg-slate-600 text-white px-6 hover:bg-slate-300 hover:text-black transition duration-500">
            Back To Home Page
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="p-6 h-[80vh] flex flex-col justify-center items-center">
      <div className=" border rounded-md shadow-md bg-white p-8">
        <h2 className="font-semibold text-2xl mb-4">{user.name}</h2>
        <p className="text-lg mb-2">
          Email: <span className="font-medium">{user.email}</span>
        </p>
        <p className="text-lg mb-2">
          Phone: <span className="font-medium">{user.phone}</span>
        </p>
        <p className="text-lg mb-2">
          Company:
          <span className="font-medium">
            {typeof user.company === "object"
              ? user.company.name
              : user.company}
          </span>
        </p>
        <Link to="/">
          <button className="border p-2 mt-4 rounded-md bg-slate-600 text-white px-6 hover:bg-slate-300 hover:text-black transition duration-500">
            Back to User List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleUserDetails;
