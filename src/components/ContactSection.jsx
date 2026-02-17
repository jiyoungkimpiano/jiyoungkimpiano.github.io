import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_r0g3chv";
const TEMPLATE_ID = "template_au340su";
const PUBLIC_KEY = "9Fv88K2fpatD4x8v8";

export default function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const params = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "Not Provided",
      message: formData.get("message"),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY).then(
      () => {
        alert("Your message has been sent successfully!");
        form.reset();
      },
      () => {
        alert("Failed to send the message. Please try again.");
      }
    );
  };

  return (
    <section id="contact">
      <div className="contact-header">
        <h2 className="contact-title">Contact</h2>
      </div>

      <div className="contact-container">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ENTER YOUR NAME*"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="PHONE NUMBER"
            />
          </div>

          <div className="input-group">
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="YOUR MESSAGE*"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            <img src="/img/submit_btn.png" alt="Submit" />
          </button>
        </form>
      </div>
    </section>
  );
}
