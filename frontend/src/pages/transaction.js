function Transactions({ setPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Transactions</h2>
        <button
          onClick={() => setPage("home")}
          className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-500 text-green-900 font-semibold"
        >
          ← Back
        </button>
      </header>

      {/* Main */}
      <main className="flex justify-center items-start p-6">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-4">
          
          {/* Transfer Money */}
          <button
            onClick={() => setPage("transfer_money")}
            className="w-full flex items-center gap-4 p-5 rounded-xl border hover:border-green-400 hover:bg-green-50 transition"
          >
            <span className="material-symbols-outlined text-green-600 text-3xl">
              send_money
            </span>
            <div className="text-left">
              <p className="font-semibold text-lg">Transfer Money</p>
              <p className="text-sm text-gray-500">
                Send money to another user
              </p>
            </div>
          </button>

          {/* Transaction History */}
          <button
            onClick={() => setPage("check_history")}
            className="w-full flex items-center gap-4 p-5 rounded-xl border hover:border-green-400 hover:bg-green-50 transition"
          >
            <span className="material-symbols-outlined text-blue-600 text-3xl">
              receipt_long
            </span>
            <div className="text-left">
              <p className="font-semibold text-lg">Transaction History</p>
              <p className="text-sm text-gray-500">
                View past transactions
              </p>
            </div>
          </button>

        </div>
      </main>
    </div>
  );
}

export default Transactions;
