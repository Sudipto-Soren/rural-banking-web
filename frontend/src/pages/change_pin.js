import { useState } from "react";

function ChangePin({ user, setPage }) {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const savePin = () => {
    if (oldPin !== user.pin) {
      alert("Wrong old PIN");
      return;
    }
    if (newPin.length !== 6 || confirmPin.length !== 6) {
      alert("PIN must be 6 digits");
      return;
    }
    if (newPin !== confirmPin) {
      alert("PINs do not match");
      return;
    }
    user.pin = newPin;
    alert("PIN changed successfully");
    setPage("home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Change PIN</h2>
        <button
          onClick={() => setPage("settings")}
          className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-500 text-green-900 font-semibold"
        >
          ← Back
        </button>
      </header>

      {/* Card */}
      <main className="flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
          {/* Old PIN */}
          <div>
            <label className="block mb-2 font-semibold">Current PIN</label>
            <input
              type="password"
              maxLength={6}
              inputMode="numeric"
              value={oldPin}
              onChange={(e) => setOldPin(e.target.value)}
              placeholder="••••••"
              className="w-full h-14 rounded-full px-6 text-xl tracking-[0.4em]
                         border-2 border-green-200 focus:border-green-500 outline-none"
            />
          </div>

          {/* New PIN */}
          <div>
            <label className="block mb-2 font-semibold">New PIN</label>
            <input
              type="password"
              maxLength={6}
              inputMode="numeric"
              value={newPin}
              onChange={(e) => setNewPin(e.target.value)}
              placeholder="••••••"
              className="w-full h-14 rounded-full px-6 text-xl tracking-[0.4em]
                         border-2 border-green-200 focus:border-green-500 outline-none"
            />
          </div>

          {/* Confirm PIN */}
          <div>
            <label className="block mb-2 font-semibold">Confirm New PIN</label>
            <input
              type="password"
              maxLength={6}
              inputMode="numeric"
              value={confirmPin}
              onChange={(e) => setConfirmPin(e.target.value)}
              placeholder="••••••"
              className="w-full h-14 rounded-full px-6 text-xl tracking-[0.4em]
                         border-2 border-green-200 focus:border-green-500 outline-none"
            />
          </div>

          {/* Actions */}
          <button
            onClick={savePin}
            className="w-full h-14 rounded-full bg-green-400 hover:bg-green-500
                       text-green-900 font-bold text-xl active:scale-95 transition"
          >
            Save New PIN
          </button>

          <button
            onClick={() => setPage("settings")}
            className="w-full text-center text-gray-500 font-semibold hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
}

export default ChangePin;
