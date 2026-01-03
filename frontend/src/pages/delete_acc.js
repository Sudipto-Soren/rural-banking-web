function DeleteAccount({ setUser, setPage }) {
    const deleteAccount = () => {
      if (window.confirm("This action cannot be undone. Delete account?")) {
        setUser(null);
        alert("Account deleted");
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-200">
        <header className="bg-white/80 backdrop-blur border-b px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-lg text-red-600">
            Delete Account
          </h2>
          <button
            onClick={() => setPage("settings")}
            className="px-4 py-2 rounded-full bg-gray-200 font-semibold"
          >
            ← Back
          </button>
        </header>
  
        <main className="flex justify-center items-center p-6">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 text-center">
            <p className="text-gray-700 font-semibold">
              This action is permanent and cannot be undone.
            </p>
  
            <button
              onClick={deleteAccount}
              className="w-full h-12 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold"
            >
              Delete My Account
            </button>
          </div>
        </main>
      </div>
    );
  }
  
  export default DeleteAccount;
  