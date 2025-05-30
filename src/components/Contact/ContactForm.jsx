import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";
function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  // console.log(errors.name);
  function onError(err) {
    console.log(err);
  }
  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className={styles.contactInput}>
        <div className={styles.required}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name", { required: "Name is required" })}
          />

          <span>{errors && errors?.name?.message}</span>
        </div>

        <div className={styles.required}>
          <input
            type="text"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <span>{errors && errors?.email?.message}</span>
        </div>
      </div>

      <div className={styles.textArea}>
        <textarea
          name=""
          placeholder="Subject"
          id="subject"
          {...register("subject", { required: "subject is required" })}
        />
        <span>{errors && errors?.subject?.message}</span>
        <button>send message</button>
      </div>
    </form>
  );
}

export default ContactForm;
