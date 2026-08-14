import { useState } from "react";
import { useSearchParams } from "react-router";
import "../styles/Contact.css";

function Contact() {
  const [searchParams] = useSearchParams();

  const conceptParam = searchParams.get("concept");
  const serviceParam = searchParams.get("service");

  const serviceLabels = {
    "custom-brand": "Custom Brand Creation",
    "brand-elevation": "Brand Elevation",
    "creative-design": "Creative Design",
    "brand-playbook": "Standalone Brand Playbook",
    "strategy-session": "Private Strategy Session",
  };

  const getInitialProjectType = () => {
    if (conceptParam) {
      return "Ready-Made Brand Concept";
    }

    if (serviceParam && serviceLabels[serviceParam]) {
      return serviceLabels[serviceParam];
    }

    return "";
  };

  const [projectType, setProjectType] = useState(getInitialProjectType());

  const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error("Form submission failed.");
    }

    alert("Thank you. Your project enquiry has been sent.");

    form.reset();
    setProjectType("");
  } catch (error) {
    console.error("Form submission error:", error);

    alert(
      "Something went wrong while sending your enquiry. Please try again or email ndosseeyy@gmail.com."
    );
  }
};

  return (
    <main className="contact-page">
      {/* ========================================
          CONTACT INTRODUCTION
      ======================================== */}
      <section className="contact-intro">
        <div className="contact-intro-label">
          <p>Start a Project</p>
          <span>Johannesburg · South Africa</span>
        </div>

        <div className="contact-intro-grid">
          <h1>
            Tell me what
            <br />
            you’re thinking.
          </h1>

          <div className="contact-intro-copy">
            <p>
              You don’t need to arrive with everything figured out.
            </p>

            <p>
              Tell me what exists, what doesn’t, what you’re trying to build or
              what simply doesn’t feel right yet.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          PROJECT FORM
      ======================================== */}
      <section className="contact-form-section">
        <div className="contact-form-heading">
          <p>Project Enquiry</p>

          <span>
            Fields marked with <strong>*</strong> are required.
          </span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-field form-field-half">
            <label htmlFor="name">
              Your name <span>*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="How should I address you?"
              required
            />
          </div>

          {/* Email */}
          <div className="form-field form-field-half">
            <label htmlFor="email">
              Email address <span>*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-field form-field-half">
            <label htmlFor="phone">Phone / WhatsApp</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Optional"
            />
          </div>

          {/* Business */}
          <div className="form-field form-field-half">
            <label htmlFor="business">Business / Brand name</label>

            <input
              id="business"
              name="business"
              type="text"
              placeholder="If you already have one"
            />
          </div>

          {/* Project Type */}
          <div className="form-field form-field-full">
            <label htmlFor="projectType">
              What can NDOSSEEYY help with? <span>*</span>
            </label>

            <select
              id="projectType"
              name="projectType"
              value={projectType}
              onChange={(event) => setProjectType(event.target.value)}
              required
            >
              <option value="">Choose one</option>

              <option value="Ready-Made Brand Concept">
                Acquire a Ready-Made Brand Concept
              </option>

              <option value="Custom Brand Creation">
                Custom Brand Creation
              </option>

              <option value="Brand Elevation">
                Brand Elevation
              </option>

              <option value="Creative Design">
                Creative Design
              </option>

              <option value="Standalone Brand Playbook">
                Standalone Brand Playbook
              </option>

              <option value="Private Strategy Session">
                Private Strategy Session
              </option>

              <option value="Something Else">Something Else</option>
            </select>
          </div>

          {/* Concept Reference */}
          {conceptParam && (
            <div className="form-field form-field-full concept-enquiry-reference">
              <span>Concept enquiry</span>

              <p>{conceptParam.replaceAll("-", " ")}</p>

              <input
                type="hidden"
                name="concept"
                value={conceptParam}
              />
            </div>
          )}

          {/* Business Stage */}
          <div className="form-field form-field-half">
            <label htmlFor="stage">Where is the business currently?</label>

            <select id="stage" name="stage">
              <option value="">Choose one</option>
              <option value="idea">It is still an idea</option>
              <option value="starting">I am preparing to launch</option>
              <option value="operating">The business already exists</option>
              <option value="growing">The business is growing</option>
              <option value="not-applicable">Not applicable</option>
            </select>
          </div>

          {/* Budget */}
          <div className="form-field form-field-half">
            <label htmlFor="budget">Approximate project budget</label>

            <select id="budget" name="budget">
              <option value="">Prefer not to say yet</option>
              <option value="under-2500">Under R2,500</option>
              <option value="2500-7500">R2,500 – R7,500</option>
              <option value="7500-15000">R7,500 – R15,000</option>
              <option value="15000-25000">R15,000 – R25,000</option>
              <option value="25000-50000">R25,000 – R50,000</option>
              <option value="50000-plus">R50,000+</option>
              <option value="unsure">I’m not sure yet</option>
            </select>
          </div>

          {/* Project Description */}
          <div className="form-field form-field-full">
            <label htmlFor="message">
              Tell me about it <span>*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="What are you building? What do you need? What feels unfinished? What would you love the business to become?"
              required
            />
          </div>

          {/* Referral */}
          <div className="form-field form-field-full">
            <label htmlFor="referral">How did you find NDOSSEEYY?</label>

            <select id="referral" name="referral">
              <option value="">Choose one</option>
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="google">Google / Search</option>
              <option value="referral">Someone recommended NDOSSEEYY</option>
              <option value="other">Somewhere else</option>
            </select>
          </div>

          {/* Consent */}
          <label className="contact-consent">
            <input type="checkbox" required />

            <span>
              I agree that NDOSSEEYY may use the information I provide to
              respond to this enquiry.
            </span>
          </label>

          {/* Submit */}
          <div className="contact-submit">
            <p>
              No payment is required to send an enquiry.
            </p>

            <button type="submit">
              Send Project Enquiry
              <span>↗</span>
            </button>
          </div>
        </form>
      </section>

      {/* ========================================
          DIRECT CONTACT
      ======================================== */}
      <section className="contact-direct">
        <div className="contact-direct-label">
          <p>Prefer something simpler?</p>
        </div>

        <div className="contact-direct-content">
          <div>
            <span>Email</span>

            <a href="mailto:ndosseeyy@gmail.com">
              ndosseeyy@gmail.com
            </a>
          </div>

          <div>
            <span>WhatsApp</span>

            <p>Business WhatsApp coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;