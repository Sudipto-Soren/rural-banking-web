import { useState } from "react";

function Settings({ user }) {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");

  const changePin = () => {
    if (oldPin === user.pin) {
      user.pin = newPin;
      alert("PIN changed");
    } else alert("Wrong old PIN");
  };

  return (
    <div>
      <h2>Change PIN</h2>
      <input placeholder="Old PIN" onChange={e=>setOldPin(e.target.value)} />
      <input placeholder="New PIN" onChange={e=>setNewPin(e.target.value)} />
      <button onClick={changePin}>Update</button>
    </div>
  );
}
export default Settings;
