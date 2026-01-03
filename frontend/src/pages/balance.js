import { useState } from "react";

function Balance({ user, setPage }) {
  const [pin, setPin] = useState("");
  const [show, setShow] = useState(false);

  const addDigit = (d) => {
    if (pin.length < 6) setPin(pin + d);
  };

  const removeDigit = () => {
    setPin(pin.slice(0, -1));
  };

  const clearPin = () => {
    setPin("");
  };

  const checkPin = () => {
    if (pin === user.pin) {
      setShow(true);
    } else {
      alert("Wrong PIN");
      clearPin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200 flex flex-col text-gray-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-green-600">
            account_balance
          </span>
          <h2 className="text-xl font-bold">Rural Bank</h2>
        </div>
        <button
          onClick={() => setPage("home")}
          className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-500 font-bold text-green-900"
        >
          Back
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl border p-6 flex flex-col">
          {/* Title */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-green-600">
                lock
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-1">Security Check</h1>
            <p className="text-gray-500">Enter your 6-digit PIN</p>
          </div>

          {/* PIN dots */}
          <div className="flex justify-center gap-3 mb-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full border-2 ${
                  i < pin.length
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <button
                key={n}
                onClick={() => addDigit(n.toString())}
                className="aspect-square rounded-full bg-gray-50 border font-bold text-xl active:scale-95"
              >
                {n}
              </button>
            ))}

            <button
              onClick={removeDigit}
              className="aspect-square rounded-full text-red-500 active:scale-95"
            >
              <span className="material-symbols-outlined">backspace</span>
            </button>

            <button
              onClick={() => addDigit("0")}
              className="aspect-square rounded-full bg-gray-50 border font-bold text-xl active:scale-95"
            >
              0
            </button>

            <button
              onClick={clearPin}
              className="aspect-square rounded-full text-gray-500 font-semibold active:scale-95"
            >
              Clear
            </button>
          </div>

          {/* Action */}
          {!show ? (
            <button
              onClick={checkPin}
              className="h-14 bg-green-400 hover:bg-green-500 rounded-full font-bold text-lg text-green-900"
            >
              Check Balance
            </button>
          ) : (
            <div className="text-center mt-4">
              <p className="text-lg text-gray-500">Your Balance</p>
              <h3 className="text-4xl font-black text-green-600">
                ₹{user.balance}
              </h3>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500 border-t bg-white/50">
        <span className="material-symbols-outlined text-sm align-middle">
          verified_user
        </span>{" "}
        Your information is secure
      </footer>
    </div>
  );
}

export default Balance;
