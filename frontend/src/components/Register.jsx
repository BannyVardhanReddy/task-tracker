export default function Register() {
  return (
    <div className="form-section">
      <h2>Open a new Ledger</h2>
      <p>A few details and you're entered</p>

      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />

        <label htmlFor="confirm-password">confirm-password</label>
        <input type="password" name="confirm-password" id="" />

        <button>Create account</button>
      </form>
    </div>
  );
}
