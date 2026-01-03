function Transactions({ user, setPage }) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200 text-gray-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-700">
                  account_balance
                </span>
              </div>
              <h1 className="text-xl font-bold">Rural Bank</h1>
            </div>
  
            <button
              onClick={() => setPage("home")}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-400 hover:bg-green-500 text-green-900 font-semibold"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
          </div>
        </header>
  
        {/* Main */}
        <main className="max-w-4xl mx-auto px-4 py-10">
          {/* Heading + Balance */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Transaction History
              </h2>
              <p className="text-gray-600 text-lg">
                See where your money went
              </p>
            </div>
  
            <div className="bg-green-100 p-6 rounded-xl border border-green-200">
              <p className="text-gray-600 font-medium">Current Balance</p>
              <p className="text-4xl font-bold">₹{user.balance}</p>
            </div>
          </div>
  
          {/* Transactions */}
          <div className="space-y-4">
            {user.transactions.length === 0 && (
              <p className="text-center text-gray-500">
                No transactions found
              </p>
            )}
  
            {user.transactions.map((t, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow border hover:border-green-300 transition"
              >
                <p className="text-lg font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </main>
  
        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500">
          © 2024 Rural Bank. Secure Banking for Everyone.
        </footer>
      </div>
    );
  }
  
  export default Transactions;
  