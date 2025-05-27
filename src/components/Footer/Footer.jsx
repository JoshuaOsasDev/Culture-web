import QuickLink from "./QuickLink";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img src="logoimg.png" alt="" />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <h3>Social media</h3>
        <ul>
          <li>
            <p>
              {" "}
              <FaFacebook />
            </p>

            <a href="http://www.facebook.com/" target="_blank" rel="facebook">
              Facebook
            </a>
          </li>
          <li>
            <p>
              {" "}
              <FaInstagramSquare />{" "}
            </p>

            <a href="http://www.instagram.com" target="_blank" rel="instagram">
              instagram
            </a>
          </li>
          <li>
            <p>
              {" "}
              <FaTwitterSquare />
            </p>

            <a href="http://x.com" target="_blank" rel="X">
              Twitter
            </a>
          </li>
          <li>
            <p>
              {" "}
              <FaLinkedin />
            </p>

            <a href="http://linkedin.com" target="_blank" rel="linkdin">
              Linkedin
            </a>
          </li>
          <li>
            <p>
              {" "}
              <FaYoutubeSquare />{" "}
            </p>

            <a href="http://www.youtube.com/" target="_blank" rel="youtube">
              Youtude
            </a>
          </li>
          <li>
            <p>
              {" "}
              <FaEnvelope />{" "}
            </p>

            <a href="http://mail.google.com" target="_blank" rel="mail">
              Email
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3>Quick Links</h3>
        <QuickLink />
      </div>
    </footer>
  );
}

export default Footer;
