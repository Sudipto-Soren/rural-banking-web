import { useState } from "react";

const users = [
  {
    mobile: "9876543210",
    password: "1234",
    pin: "111111",
    balance: 2500,
    transactions: ["Sent ₹200", "Received ₹500"]
  }
];

function Login({ setUser }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = users.find(
      u => u.mobile === mobile && u.password === password
    );
    if (user) setUser(user);
    else alert("Invalid credentials");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Mobile" onChange={e=>setMobile(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
export default Login;
