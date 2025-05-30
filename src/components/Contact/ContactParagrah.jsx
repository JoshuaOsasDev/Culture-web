import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "./ContactParagrah.module.css";

import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
function ContactParagrah() {
  return (
    <div className={styles.paragrah}>
      <div className={styles.paraDiv}>
        <h3>let talk</h3>
        <p>
          Have questions or want to learn more about ISEF? Get in touch with us
          today!
        </p>
      </div>

      <div>
        <h3>Direct Contact Info</h3>
        <p>
          Email: <span>Info.isef.org</span>
        </p>
        <p>
          Phone: <span>Phone: +44 123 4567</span>
        </p>
        <p>
          Address: <span>Warri, Nigeria</span>
        </p>
      </div>

      <div className={styles.icon}>
        <p>
          <FaLinkedinIn />
        </p>

        <p>
          <FaTwitter />
        </p>

        <p>
          <FaFacebookF />
        </p>
      </div>
    </div>
  );
}

export default ContactParagrah;
