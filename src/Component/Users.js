import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParam.get("filter") === "active";
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active User
        </button>
      </div>
      <div>
        <button onClick={() => setSearchParams({})}>Reset Filter </button>
      </div>
      {showActiveUsers ? (
        <h2>showing Active Users</h2>
      ) : (
        <h2>SHOWING all users</h2>
      )}
    </div>
  );
};
