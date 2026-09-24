import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="../../../src/assets/imgs/Alfa-Romeo-Logo.png"
            alt="logo"
          />
          <span className="logo-text">Studio span</span>
        </div>
        <nav className="nav">
          <a href="#">inicio</a>
          <a href="#">serviços</a>
          <a href="#">sobre</a>
          <a href="#" className="btn-contatos">
            contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
