const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[580px] pt-[120px] pl-[120px]">
      <div className="flex">
        <div className="footer-text-group">
          <p className="footer-keek-text">KEEK</p>
          <p className="footer-subtext">
            Bridge to collaborate brands and influencers
          </p>
        </div>
        <div className="footer-list-wrapper">
          <ul className="footer-list">
            <li className="footer-list-heading">Company</li>
            <li className="footer-list-item">Pricing</li>
            <li className="footer-list-item">About Us</li>
            <li className="footer-list-item">Contact Us</li>
          </ul>
        </div>
        <div className="footer-legal-list-wrapper">
          <ul className="footer-legal-list">
            <li className="footer-legal-list-heading">Legal</li>
            <li className="footer-legal-list-item">Privacy Policy</li>
            <li className="footer-legal-list-item">Terms &amp; Conditions</li>
            <li className="footer-legal-list-item">
              Grievance Redressal Policy
            </li>
          </ul>
        </div>
        <div className="footer-social-list-wrapper">
          <ul className="footer-social-list">
            <li className="footer-social-list-heading">Follow Us</li>
            <li className="footer-social-list-item">LinkedIn</li>
            <li className="footer-social-list-item">Twitter</li>
            <li className="footer-social-list-item">Instagram</li>
            <li className="footer-social-list-item">Facebook</li>
            <li className="footer-social-list-item">YouTube</li>
          </ul>
        </div>
      </div>
      <div className="mt-[64px] flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1200"
          height="2"
          viewBox="0 0 1200 2"
          fill="none"
          style={{
            strokeWidth: "1px",
            stroke: "var(--Primary-200, #CEBEFE)",
          }}
        >
          <path d="M0 1H1200" />
        </svg>
      </div>
      <p className="footer-copy mt-[34px]">
        © 2025, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
