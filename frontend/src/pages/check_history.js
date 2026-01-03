function CheckHistory({ user, setPage }) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-lg">Transaction History</h2>
          <button
            onClick={() => setPage("transactions")}
            className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-500 text-green-900 font-semibold"
          >
            ← Back
          </button>
        </header>
  
        {/* Main */}
        <main className="flex justify-center items-start p-6">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            {(!user.transactions || user.transactions.length === 0) ? (
              <p className="text-center text-gray-500">
                No transactions found
              </p>
            ) : (
              <div className="space-y-3">
                {user.transactions.map((t, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border bg-gray-50 hover:border-green-300 transition"
                  >
                    <p className="font-semibold">{t}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
  
  export default CheckHistory;
  