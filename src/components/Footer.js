import { footerLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="footer-link">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
