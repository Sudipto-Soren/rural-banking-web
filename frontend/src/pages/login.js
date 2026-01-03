import { useState } from "react";

const users = [
  {
    mobile: "9876543210",
    password: "1234",
    pin: "111111",
    balance: 2500,
    transactions: ["Sent ₹200", "Received ₹500"],
  },
];

function Login({ setUser }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = users.find(
      (u) => u.mobile === mobile && u.password === password
    );
    if (user) setUser(user);
    else alert("Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-emerald-300">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          RuralBank Login
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full h-12 px-4 rounded-full border-2 border-green-200 focus:border-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-full border-2 border-green-200 focus:border-green-500 outline-none"
            />
          </div>

          <button
            onClick={login}
            className="w-full h-12 bg-green-400 text-green-900 font-bold rounded-full hover:bg-green-500 transition"
          >
            Login
          </button>
        </div>

        <p className="text-xs text-center mt-4 opacity-60">
          Demo user: 9876543210 / 1234
        </p>
      </div>
    </div>
  );
}

export default Login;
