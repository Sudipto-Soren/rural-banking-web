import { useState } from "react";
import Balance from "./balance";
import Transactions from "./transactions";
import Settings from "./settings";

function Dashboard({ user, setUser }) {
  const [page, setPage] = useState("home");

  if (page === "balance") return <Balance user={user} setPage={setPage} />;
  if (page === "transactions") return <Transactions user={user} setPage={setPage} />;
  if (page === "settings") return <Settings user={user} setPage={setPage} />;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-text-main-light dark:text-text-main-dark">
      {/* Header */}
      <header className="w-full flex justify-center py-4 px-4 sm:px-8 border-b bg-white/50 dark:bg-black/20 sticky top-0 z-50">
        <div className="flex items-center justify-between w-full max-w-[1200px]">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">
                account_balance
              </span>
            </div>
            <h2 className="text-xl font-bold">Rural Bank</h2>
          </div>

          <button
            onClick={() => setUser(null)}
            className="flex h-10 px-5 items-center justify-center rounded-full bg-primary hover:bg-primary-dark text-black font-bold"
          >
            <span className="material-symbols-outlined mr-2">logout</span>
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex justify-center px-4 py-8">
        <div className="w-full max-w-[1200px] flex flex-col gap-8">
          {/* Greeting */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-black">
              Good Morning, {user?.name || "User"}
            </h1>
            <p className="text-lg text-text-sub-light">
              Welcome to your Rural Bank Dashboard.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Balance */}
            <button
              onClick={() => setPage("balance")}
              className="flex flex-col items-center justify-center gap-6 rounded-lg bg-card-light dark:bg-card-dark p-10 shadow-sm hover:shadow-xl transition"
            >
              <span className="material-symbols-outlined text-[56px] text-green-600">
                account_balance_wallet
              </span>
              <div className="text-center">
                <h3 className="text-2xl font-bold">Check My Money</h3>
                <p className="text-text-sub-light">View Balance</p>
              </div>
            </button>

            {/* Transactions */}
            <button
              onClick={() => setPage("transactions")}
              className="flex flex-col items-center justify-center gap-6 rounded-lg bg-card-light dark:bg-card-dark p-10 shadow-sm hover:shadow-xl transition"
            >
              <span className="material-symbols-outlined text-[56px] text-blue-600">
                receipt_long
              </span>
              <div className="text-center">
                <h3 className="text-2xl font-bold">Past Payments</h3>
                <p className="text-text-sub-light">Transactions</p>
              </div>
            </button>

            {/* Settings */}
            <button
              onClick={() => setPage("settings")}
              className="flex flex-col items-center justify-center gap-6 rounded-lg bg-card-light dark:bg-card-dark p-10 shadow-sm hover:shadow-xl transition"
            >
              <span className="material-symbols-outlined text-[56px] text-orange-600">
                manage_accounts
              </span>
              <div className="text-center">
                <h3 className="text-2xl font-bold">My Account</h3>
                <p className="text-text-sub-light">Settings</p>
              </div>
            </button>
          </div>

          {/* Footer */}
          <footer className="pt-6 text-center text-sm opacity-60">
            © 2024 Rural Bank. Secure Banking for Everyone.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
