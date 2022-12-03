import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    auth.Login(user);
    navigate("./");
  };
  return (
    <div>
      <Label>
        UserName:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </Label>
    </div>
  );
};
