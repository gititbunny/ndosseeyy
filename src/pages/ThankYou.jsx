import { Link } from "react-router";
import "../styles/ThankYou.css";

function ThankYou() {
  return (
    <main className="thank-you-page">
      {/* ========================================
          SUCCESS MESSAGE
      ======================================== */}
      <section className="thank-you-content">
        <div className="thank-you-label">
          <p>Project Enquiry Sent</p>
          <span>NDOSSEEYY</span>
        </div>

        <div className="thank-you-main">
          <h1>
            Got it.
            <br />
            Thank you.
          </h1>

          <div className="thank-you-copy">
            <p>
              Your enquiry has been sent successfully.
            </p>

            <p>
              I’ll review what you shared and get back to you using the contact
              details you provided.
            </p>

            <div className="thank-you-actions">
              <Link to="/">Return Home →</Link>
              <Link to="/work">Explore Work →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ThankYou;