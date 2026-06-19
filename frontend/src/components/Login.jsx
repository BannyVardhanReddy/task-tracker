export default function Login() {
  return (
    <div className="form-section">
      <h2>Welcome back</h2>
      <p>Enter your details to open the ledger</p>

      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" placeholder="your@example.com" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />

        <div className="details">
          <div>
            <input type="checkbox" name="remember-me" id="" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>

          <p>Forgot Password?</p>
        </div>
        
        <button type="submit">Log in</button>
      </form>

      <span className="dashed-span"></span>

      <p>New here? open an Account</p>
    </div>
  );
}
