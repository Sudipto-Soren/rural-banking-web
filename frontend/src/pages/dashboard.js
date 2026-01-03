import { useState } from "react";
import Balance from "./balance";
import Transactions from "./transactions";
import Settings from "./settings_home";

function Dashboard({ user, setUser }) {
  const [page, setPage] = useState("home");

  if (page === "balance") return <Balance user={user} setPage={setPage} />;
  if (page === "transactions") return <Transactions user={user} setPage={setPage} />;
  if (page === "settings") return <Settings user={user} setPage={setPage} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
              <span className="material-symbols-outlined text-green-700">
                account_balance
              </span>
            </div>
            <h2 className="text-xl font-bold">Rural Bank</h2>
          </div>

          <button
            onClick={() => setUser(null)}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-400 hover:bg-red-500 text-white font-semibold"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="space-y-8">
          {/* Greeting */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Welcome, {user?.name || "User"}
            </h1>
            <p className="text-gray-600">
              Manage your banking safely and easily.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => setPage("balance")}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition flex flex-col items-center gap-4"
            >
              <span className="material-symbols-outlined text-5xl text-green-600">
                account_balance_wallet
              </span>
              <h3 className="text-xl font-semibold">Check Balance</h3>
            </button>

            <button
              onClick={() => setPage("transactions")}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition flex flex-col items-center gap-4"
            >
              <span className="material-symbols-outlined text-5xl text-blue-600">
                receipt_long
              </span>
              <h3 className="text-xl font-semibold">Transactions</h3>
            </button>

            <button
              onClick={() => setPage("settings")}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition flex flex-col items-center gap-4"
            >
              <span className="material-symbols-outlined text-5xl text-orange-600">
                manage_accounts
              </span>
              <h3 className="text-xl font-semibold">Settings</h3>
            </button>
          </div>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 pt-6">
            © 2024 Rural Bank. Secure Banking for Everyone.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
