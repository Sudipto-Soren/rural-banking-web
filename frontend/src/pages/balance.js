import { useState } from "react";

function Balance({ user }) {
  const [pin, setPin] = useState("");
  const [show, setShow] = useState(false);

  const checkPin = () => {
    if (pin === user.pin) setShow(true);
    else alert("Wrong PIN");
  };

  return (
    <div>
      <h2>Enter 6-digit PIN</h2>
      <input onChange={e=>setPin(e.target.value)} />
      <button onClick={checkPin}>Submit</button>

      {show && <h3>Balance: ₹{user.balance}</h3>}
    </div>
  );
}
export default Balance;
