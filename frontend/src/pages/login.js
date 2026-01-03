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
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-md bg-white dark:bg-[#1a2c20] p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          RuralBank Login
        </h2>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full h-12 px-4 rounded-full border-2 border-[#cfe7d7] focus:border-primary outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 rounded-full border-2 border-[#cfe7d7] focus:border-primary outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={login}
          className="w-full h-12 bg-primary text-[#0d1b12] font-bold rounded-full hover:bg-[#25d660] transition"
        >
          Login
        </button>

        <p className="text-xs text-center mt-4 opacity-60">
          Demo user: 9876543210 / 1234
        </p>
      </div>
    </div>
  );
}

export default Login;
