import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import "./Contact.css";

const courseNames = [
  "Data Analytics",
  "Full Stack Development",
  "Data Science & AI",
  "Python Programming",
  "SQL & Database",
  "Application Development",
  "Other enquiry",
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const params = new URLSearchParams(window.location.search);
  const requested = params.get("course") || "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("config-error");
      return;
    }

    try {
      setStatus("sending");

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setStatus("success");
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus("error");
    }
  };

  const resetForm = () => {
    formRef.current?.reset();
    setStatus("idle");
  };

  return (
    <main className="inner-page">
      <section className="inner-hero section-wrap">
        <div className="section-kicker">GET IN TOUCH</div>

        <h1>
          Let’s plan your
          <br />
          <span>next step.</span>
        </h1>

        <p>
          Have a question about a course or learning path? Send us an enquiry
          and our team can follow up with you.
        </p>
      </section>

      <section className="section contact-section">
        <div className="section-wrap contact-grid">
          <div className="contact-copy">
            <div className="section-kicker">CONTACT GREAT MINDS</div>

            <h2>
              We’re here to <span>help.</span>
            </h2>

            <p className="section-intro">
              Tell us what you would like to learn and ask about available
              courses and training options.
            </p>

            <div className="contact-detail">
              <span>
                <Mail size={19} />
              </span>
              <div>
                <small>EMAIL</small>
                <p>Send your enquiry using the form.</p>
              </div>
            </div>

            <div className="contact-detail">
              <span>
                <MapPin size={19} />
              </span>
              <div>
                <small>LOCATION</small>
                <p>Contact our team for location details.</p>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <h3>Send an enquiry</h3>
              <p>Fields marked * are required.</p>
            </div>

            {status === "success" ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={32} />

                <h3>Enquiry sent successfully!</h3>

                <p>
                  Thank you for contacting Great Minds Technology. Your enquiry
                  has been submitted.
                </p>

                <button type="button" className="text-link" onClick={resetForm}>
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <label>
                  Full name *
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Enter your name"
                    disabled={status === "sending"}
                  />
                </label>

                <div className="form-row">
                  <label>
                    Email address *
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      disabled={status === "sending"}
                    />
                  </label>

                  <label>
                    Phone number
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={25}
                      placeholder="Your phone number"
                      disabled={status === "sending"}
                    />
                  </label>
                </div>

                <label>
                  Interested in
                  <select
                    name="course"
                    defaultValue={requested}
                    disabled={status === "sending"}
                  >
                    <option value="">Select a learning path</option>

                    {courseNames.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Message *
                  <textarea
                    name="message"
                    required
                    minLength={5}
                    maxLength={3000}
                    rows={4}
                    placeholder="Tell us what you would like to know"
                    disabled={status === "sending"}
                  />
                </label>

                {status === "config-error" && (
                  <div className="form-error" role="alert">
                    <AlertCircle size={18} />
                    Email settings are missing. Please check your project .env
                    file.
                  </div>
                )}

                {status === "error" && (
                  <div className="form-error" role="alert">
                    <AlertCircle size={18} />
                    Your enquiry could not be sent. Please try again or contact
                    us another way.
                  </div>
                )}

                <button
                  className="btn btn-primary submit-btn"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>Sending enquiry...</>
                  ) : (
                    <>
                      Submit enquiry <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="form-disclaimer">
                  Your details will be used to respond to your enquiry.
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
