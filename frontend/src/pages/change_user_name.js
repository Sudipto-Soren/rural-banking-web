import { useState } from "react";

function ChangeUsername({ user, setPage }) {
  const [name, setName] = useState(user.name || "");

  const updateName = () => {
    user.name = name;
    alert("Username updated");
    setPage("home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
      <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Change Username</h2>
        <button
          onClick={() => setPage("settings")}
          className="px-4 py-2 rounded-full bg-green-400 font-semibold"
        >
          ← Back
        </button>
      </header>

      <main className="flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new username"
            className="w-full h-12 rounded-full px-5 border-2 border-green-200 focus:border-green-500 outline-none"
          />

          <button
            onClick={updateName}
            className="w-full h-12 rounded-full bg-green-400 hover:bg-green-500 font-bold"
          >
            Save Username
          </button>
        </div>
      </main>
    </div>
  );
}

export default ChangeUsername;
