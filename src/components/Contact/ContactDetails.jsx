import styles from "./ContactDetails.module.css";
import ContactForm from "./ContactForm";
import ContactParagrah from "./ContactParagrah";

function ContactDetails() {
  return (
    <div className={styles.details}>
      <ContactParagrah />
      <ContactForm />
    </div>
  );
}

export default ContactDetails;
