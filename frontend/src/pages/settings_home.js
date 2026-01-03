function Settings({ setPage }) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Account Settings</h2>
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
          
          {/* Change PIN */}
          <button
            onClick={() => setPage("change_pin")}
            className="w-full flex items-center gap-4 p-4 rounded-xl border hover:border-green-400 hover:bg-green-50 transition"
          >
            <span className="material-symbols-outlined text-green-600">
              lock
            </span>
            <div className="text-left">
              <p className="font-semibold">Change PIN</p>
              <p className="text-sm text-gray-500">
                Update your 6-digit security PIN
              </p>
            </div>
          </button>

          {/* Change Password */}
          <button
            onClick={() => setPage("change_pass")}
            className="w-full flex items-center gap-4 p-4 rounded-xl border hover:border-green-400 hover:bg-green-50 transition"
          >
            <span className="material-symbols-outlined text-blue-600">
              key
            </span>
            <div className="text-left">
              <p className="font-semibold">Change Password</p>
              <p className="text-sm text-gray-500">
                Update your login password
              </p>
            </div>
          </button>

          {/* Change Username */}
          <button
            onClick={() => setPage("change_user_name")}
            className="w-full flex items-center gap-4 p-4 rounded-xl border hover:border-green-400 hover:bg-green-50 transition"
          >
            <span className="material-symbols-outlined text-orange-600">
              person
            </span>
            <div className="text-left">
              <p className="font-semibold">Change Username</p>
              <p className="text-sm text-gray-500">
                Edit your display name
              </p>
            </div>
          </button>

          {/* Delete Account */}
          <button
            onClick={() => setPage("delete_acc")}
            className="w-full flex items-center gap-4 p-4 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 transition"
          >
            <span className="material-symbols-outlined text-red-600">
              delete
            </span>
            <div className="text-left">
              <p className="font-semibold text-red-700">
                Delete Account
              </p>
              <p className="text-sm text-red-500">
                Permanently remove your account
              </p>
            </div>
          </button>

        </div>
      </main>
    </div>
  );
}

export default Settings;
