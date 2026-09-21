import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-icon">🔧</span>
          <span>Jack of All Trades KC</span>
        </div>
        <p className="footer-tagline">
          Serving Kansas City home sellers and realtors with pride.
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Jack of All Trades KC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
