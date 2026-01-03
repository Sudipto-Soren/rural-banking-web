import { useState } from "react";

function Settings({ user, setPage }) {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const changePin = () => {
    if (oldPin !== user.pin) {
      alert("Wrong old PIN");
      return;
    }
    if (newPin.length !== 6) {
      alert("PIN must be 6 digits");
      return;
    }
    if (newPin !== confirmPin) {
      alert("New PINs do not match");
      return;
    }
    user.pin = newPin;
    alert("PIN changed successfully");
    setPage("home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-green-700">
              account_balance
            </span>
            <span className="font-bold text-lg">Rural Bank</span>
          </div>

          <button
            onClick={() => setPage("home")}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-400 hover:bg-green-500 text-green-900 font-bold"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col gap-8">
        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Change PIN
          </h1>
          <p className="text-gray-600 text-lg">
            Update your 6-digit secret number
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg border p-6 md:p-10 max-w-xl">
          <div className="flex flex-col gap-6">
            {/* Old PIN */}
            <div>
              <label className="font-semibold block mb-2">
                Current PIN
              </label>
              <input
                type="password"
                maxLength={6}
                inputMode="numeric"
                value={oldPin}
                onChange={(e) => setOldPin(e.target.value)}
                className="w-full h-14 rounded-full px-6 text-xl tracking-[0.4em] border-2 border-green-200 focus:border-green-500 outline-none"
                placeholder="••••••"
              />
            </div>

            {/* New PIN */}
            <div>
              <label className="font-semibold block mb-2">
                New PIN
              </label>
              <input
                type="password"
                maxLength={6}
                inputMode="numeric"
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                className="w-full h-14 rounded-full px-6 text-xl tracking-[0.4em] border-2 border-green-200 focus:border-green-500 outline-none"
                placeholder="••••••"
              />
            </div>

            {/* Confirm PIN */}
            <div>
              <label className="font-semibold block mb-2">
                Confirm New PIN
              </label>
              <input
                type="password"
                maxLength={6}
                inputMode="numeric"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value)}
                className="w-full h-14 rounded-full px-6 text-xl tracking-[0.4em] border-2 border-green-200 focus:border-green-500 outline-none"
                placeholder="••••••"
              />
            </div>

            {/* Actions */}
            <button
              onClick={changePin}
              className="h-14 bg-green-400 hover:bg-green-500 rounded-full text-xl font-bold text-green-900 active:scale-95 transition"
            >
              Save New PIN
            </button>

            <button
              onClick={() => setPage("home")}
              className="text-gray-500 font-semibold hover:text-gray-800 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
