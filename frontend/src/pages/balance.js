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
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#0d1b12] dark:text-white flex flex-col">
      {/* Header */}
      <header className="w-full bg-white dark:bg-[#1a2e22] border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-primary">
            account_balance
          </span>
          <h2 className="text-xl font-bold">RuralBank</h2>
        </div>
        <button
          onClick={() => setPage("home")}
          className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/10 font-bold"
        >
          Back
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-[#1a2e22] rounded-xl shadow-xl border p-6 flex flex-col">
          {/* Title */}
          <div className="text-center mb-6">
            <div className="size-14 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl fill-1">
                lock
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-1">Security Check</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your 6-digit PIN
            </p>
          </div>

          {/* PIN dots */}
          <div className="flex justify-center gap-3 mb-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`size-4 rounded-full border-2 ${
                  i < pin.length
                    ? "bg-primary border-primary"
                    : "border-gray-300 dark:border-gray-600"
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
                className="aspect-square rounded-full bg-gray-50 dark:bg-[#15281e] border font-bold text-xl active:scale-95"
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
              className="aspect-square rounded-full bg-gray-50 dark:bg-[#15281e] border font-bold text-xl active:scale-95"
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
              className="h-14 bg-primary hover:bg-[#25db60] rounded-full font-bold text-lg text-[#0d1b12]"
            >
              Check Balance
            </button>
          ) : (
            <div className="text-center mt-4">
              <p className="text-lg text-gray-500">Your Balance</p>
              <h3 className="text-4xl font-black text-primary">
                ₹{user.balance}
              </h3>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t">
        <span className="material-symbols-outlined text-sm align-middle">
          verified_user
        </span>{" "}
        Your information is secure
      </footer>
    </div>
  );
}

export default Balance;
