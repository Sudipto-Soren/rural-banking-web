import { useState } from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  const [user, setUser] = useState(null);

  return user ? <Dashboard user={user} setUser={setUser} /> : <Login setUser={setUser} />;
}
export default App;
