const Footer = () => {
  return (
    <footer className="w-full h-[580px] p-[120px]  z-[1]">
      <div className="w-full flex justify-center items-center">
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
              <li className="footer-list-item">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="footer-list-item">
                <a href="/about-us">About Us</a>
              </li>
              <li className="footer-list-item">
                <a href="/get-demo">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-legal-list-wrapper">
            <ul className="footer-legal-list">
              <li className="footer-legal-list-heading">Legal</li>
              <li className="footer-legal-list-item">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="footer-legal-list-item">
                <a href="/terms">Terms &amp; Conditions</a>
              </li>
              <li className="footer-legal-list-item">
                <a href="/grievance">Grievance Redressal Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-social-list-wrapper">
            <ul className="footer-social-list">
              <li className="footer-social-list-heading">Follow Us</li>
              <li className="footer-social-list-item">
                <a href="https://linkedin.com" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li className="footer-social-list-item">
                <a href="https://twitter.com" target="_blank">
                  Twitter
                </a>
              </li>
              <li className="footer-social-list-item">
                <a href="https://instagram.com" target="_blank">
                  Instagram
                </a>
              </li>
              <li className="footer-social-list-item">
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
              <li className="footer-social-list-item">
                <a href="https://youtube.com" target="_blank">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
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

        <p className="footer-copy mt-[34px]">© 2025, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
