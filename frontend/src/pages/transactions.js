function Transactions({ user }) {
    return (
      <div>
        <h2>Transactions</h2>
        {user.transactions.map((t,i)=><p key={i}>{t}</p>)}
      </div>
    );
  }
  export default Transactions;
  