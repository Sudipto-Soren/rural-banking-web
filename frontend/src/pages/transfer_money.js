import { useState } from "react";

function TransferMoney({ user, setPage }) {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");

  const sendMoney = () => {
    const amt = Number(amount);

    if (!receiver) {
      alert("Enter receiver mobile number");
      return;
    }

    if (!amt || amt <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (amt > user.balance) {
      alert("Insufficient balance");
      return;
    }

    if (pin !== user.pin) {
      alert("Wrong PIN");
      return;
    }

    // Update balance
    user.balance -= amt;

    // Update transaction history
    user.transactions.unshift(
      `Sent ₹${amt} to ${receiver}`
    );

    alert("Money transferred successfully");
    setPage("transactions");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Transfer Money</h2>
        <button
          onClick={() => setPage("transactions")}
          className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-500 text-green-900 font-semibold"
        >
          ← Back
        </button>
      </header>

      {/* Main */}
      <main className="flex justify-center items-start p-6">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-5">
          
          {/* Receiver */}
          <div>
            <label className="block mb-2 font-semibold">
              Receiver Mobile Number
            </label>
            <input
              type="tel"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              placeholder="Enter mobile number"
              className="w-full h-12 rounded-full px-5 border-2 border-green-200 focus:border-green-500 outline-none"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-2 font-semibold">
              Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full h-12 rounded-full px-5 border-2 border-green-200 focus:border-green-500 outline-none"
            />
            <p className="text-sm text-gray-500 mt-1">
              Available balance: ₹{user.balance}
            </p>
          </div>

          {/* PIN */}
          <div>
            <label className="block mb-2 font-semibold">
              Confirm PIN
            </label>
            <input
              type="password"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••••"
              className="w-full h-12 rounded-full px-5 tracking-[0.3em] border-2 border-green-200 focus:border-green-500 outline-none"
            />
          </div>

          {/* Action */}
          <button
            onClick={sendMoney}
            className="w-full h-12 rounded-full bg-green-400 hover:bg-green-500 text-green-900 font-bold text-lg active:scale-95 transition"
          >
            Send Money
          </button>
        </div>
      </main>
    </div>
  );
}

export default TransferMoney;
