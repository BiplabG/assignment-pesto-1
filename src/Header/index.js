import "./header.css";

function Header({ amount }) {
  return (
    <nav>
      <ul>
        <li className="company-logo">Apple Products</li>
        <li>Total Amount: {amount}</li>
      </ul>
    </nav>
  );
}

export default Header;
