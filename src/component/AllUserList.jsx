import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import UserTable from "./UserTable";
import { Link } from "react-router-dom";

const AllUserList = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.dataList);
  const isLoading = useSelector((state) => state.users.isLoading);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    if (!isLoading) dispatch(fetchUsers());
  }, [dispatch, isLoading]);

  const searchUser = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold text-center py-5">ALL USER LIST</h2>
      <input
        type="text"
        placeholder="Search by Name or Email......."
        className="border p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading === "loading" && <p>Loading...</p>}
      {isLoading === "failed" && <p>Error fetching users Details</p>}

     <div>
     <UserTable users={searchUser} />
     </div>
     <div>
        <Link to='/usersform'><button className="border rounded-lg font-semibold text-white p-3 w-full bg-green-700">ADD USER</button></Link>
     </div>
    </div>
  );
};

export default AllUserList;
