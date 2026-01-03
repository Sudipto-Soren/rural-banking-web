import { useState } from "react";

function ChangePassword({ user, setPage }) {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");

  const updatePassword = () => {
    if (oldPwd !== user.password) {
      alert("Wrong old password");
      return;
    }
    user.password = newPwd;
    alert("Password updated");
    setPage("home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Change Password</h2>
        <button
          onClick={() => setPage("settings")}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-400 font-semibold"
        >
          ← Back
        </button>
      </header>

      {/* Card */}
      <main className="flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5">
          <input
            type="password"
            placeholder="Current Password"
            onChange={(e) => setOldPwd(e.target.value)}
            className="w-full h-12 rounded-full px-5 border-2 border-green-200 focus:border-green-500 outline-none"
          />

          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setNewPwd(e.target.value)}
            className="w-full h-12 rounded-full px-5 border-2 border-green-200 focus:border-green-500 outline-none"
          />

          <button
            onClick={updatePassword}
            className="w-full h-12 rounded-full bg-green-400 hover:bg-green-500 font-bold"
          >
            Save Password
          </button>
        </div>
      </main>
    </div>
  );
}

export default ChangePassword;
