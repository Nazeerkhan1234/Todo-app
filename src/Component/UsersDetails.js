import React from "react";
import { useParams } from "react-router-dom";
export const UsersDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return <div> Details about user {userId}</div>;
};
