function Transactions({ user, setPage }) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-text-main dark:text-white">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-[#e7f3eb] dark:border-white/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-2xl">
                  account_balance
                </span>
              </div>
              <h1 className="text-xl font-bold">Rural Bank</h1>
            </div>
  
            <button
              onClick={() => setPage("home")}
              className="bg-primary text-text-main font-bold py-2 px-5 rounded-full flex items-center gap-2 active:scale-95"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
          </div>
        </header>
  
        {/* Main */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Heading + Balance */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Transaction History
              </h2>
              <p className="text-text-muted text-lg">
                See where your money went
              </p>
            </div>
  
            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
              <p className="text-text-main/70 font-medium">Current Balance</p>
              <p className="text-4xl font-bold">₹{user.balance}</p>
            </div>
          </div>
  
          {/* Transactions */}
          <div className="flex flex-col gap-4">
            {user.transactions.length === 0 && (
              <p className="text-center text-text-muted">
                No transactions found
              </p>
            )}
  
            {user.transactions.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-card-dark p-5 rounded-lg shadow-card border hover:border-primary/30 transition"
              >
                <p className="text-lg font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </main>
  
        {/* Footer */}
        <footer className="py-6 text-center text-sm opacity-60">
          © 2024 Rural Bank. Secure Banking for Everyone.
        </footer>
      </div>
    );
  }
  
  export default Transactions;
  