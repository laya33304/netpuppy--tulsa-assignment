import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <img
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="Tulas International School"
          />

          <p>
            A CBSE-affiliated co-educational boarding and day school in
            Dehradun, Uttarakhand.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h4>Explore</h4>

          <a href="#about">About TIS</a>
          <a href="#experience">Academics</a>
          <a href="#campus">Campus Life</a>
          <a href="#sports">Sports</a>
        </div>

        {/* Admissions */}
        <div className="footer-column">
          <h4>Admissions</h4>

          <a href="#admissions">Apply Now</a>
          <a href="#admissions">Enquire</a>
          <a href="#tour">Virtual Tour</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h4>Contact</h4>

          <a href="tel:+919837983791">
            <Phone size={16} />
            <span>+91-9837983791</span>
          </a>

          <a href="mailto:info@tis.edu.in">
            <Mail size={16} />
            <span>info@tis.edu.in</span>
          </a>

          <p>
            <MapPin size={16} />
            <span>
              Dhoolkot, P.O - Selaqui,
              <br />
              Chakrata Road,
              <br />
              Dehradun - 248011
            </span>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tulas International School</span>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://www.instagram.com/tulasinternationalschool/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.linkedin.com/school/tulas-international-school/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={18} />
          </a>
        </div>

        {/* Back to Top */}
        <a href="#top" className="back-top">
          Back to top
          <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
