import { useState } from "react";
import Balance from "./balance";
import Transactions from "./transactions";
import Settings from "./settings";

function Dashboard({ user, setUser }) {
  const [page, setPage] = useState("home");

  if (page === "balance") return <Balance user={user} />;
  if (page === "transactions") return <Transactions user={user} />;
  if (page === "settings") return <Settings user={user} />;

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={()=>setPage("balance")}>Balance</button>
      <button onClick={()=>setPage("transactions")}>Transactions</button>
      <button onClick={()=>setPage("settings")}>Settings</button>
      <button onClick={()=>setUser(null)}>Logout</button>
    </div>
  );
}
export default Dashboard;
