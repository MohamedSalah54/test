
const Navbar = () => {
  const navStyle = {
    backgroundColor: '#282c34',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
  };

  return (
    <nav style={navStyle}>
      <div>
        <a href="/" style={linkStyle}>
          My Blog
        </a>
      </div>
      <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li>
          <a href="/" style={linkStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="/contact" style={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;