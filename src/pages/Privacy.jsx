import "../styles/Legal.css";

function Privacy() {
  return (
    <main className="legal-page">
      {/* ========================================
          LEGAL HEADER
      ======================================== */}
      <section className="legal-header">
        <div className="legal-header-meta">
          <p>Legal</p>
          <span>Last updated · 14 August 2026</span>
        </div>

        <h1>
          Privacy
          <br />
          Policy.
        </h1>

        <p className="legal-intro">
          This policy explains how personal information shared through the
          NDOSSEEYY website is collected, used and handled.
        </p>
      </section>

      {/* ========================================
          LEGAL CONTENT
      ======================================== */}
      <section className="legal-content">
        <aside className="legal-sidebar">
          <p>Privacy Policy</p>

          <span>
            NDOSSEEYY
            <br />
            Johannesburg · South Africa
          </span>
        </aside>

        <div className="legal-sections">
          <section>
            <span>01</span>
            <h2>About this policy</h2>

            <p>
              NDOSSEEYY is the creative identity of an individual based in
              Johannesburg, South Africa.
            </p>

            <p>
              When you submit personal information through this website,
              NDOSSEEYY is responsible for deciding how that information is
              used in connection with your enquiry or project.
            </p>
          </section>

          <section>
            <span>02</span>
            <h2>Information I may collect</h2>

            <p>
              Information may be collected when you submit a project enquiry
              or contact me directly.
            </p>

            <p>This may include:</p>

            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone or WhatsApp number</li>
              <li>Business or brand name</li>
              <li>Business stage</li>
              <li>Project type and approximate budget</li>
              <li>Information you include in your project enquiry</li>
              <li>How you discovered NDOSSEEYY</li>
              <li>Basic technical information related to your submission</li>
            </ul>
          </section>

          <section>
            <span>03</span>
            <h2>How I use your information</h2>

            <p>Your information may be used to:</p>

            <ul>
              <li>Read and respond to your enquiry</li>
              <li>Understand what you would like help with</li>
              <li>Discuss potential projects or services</li>
              <li>Prepare proposals, quotations or project communication</li>
              <li>Maintain appropriate business records</li>
              <li>Protect the website and prevent misuse or spam</li>
              <li>Meet applicable legal obligations</li>
            </ul>

            <p>
              Information submitted through the contact form is not collected
              for unrelated marketing without an appropriate reason or
              permission.
            </p>
          </section>

          <section>
            <span>04</span>
            <h2>How information is handled</h2>

            <p>
              This website is hosted using third-party technology and the
              project enquiry form is currently processed through Netlify.
              Information submitted through the form may therefore be
              processed or stored by service providers used to operate the
              website.
            </p>

            <p>
              I do not sell personal information to advertisers or other third
              parties.
            </p>
          </section>

          <section>
            <span>05</span>
            <h2>Storage and retention</h2>

            <p>
              Personal information is kept only for as long as reasonably
              necessary for the purpose for which it was collected, including
              responding to enquiries, managing projects, maintaining relevant
              records and meeting legal obligations.
            </p>

            <p>
              Reasonable steps are taken to protect information against
              unauthorised access, loss, misuse or disclosure.
            </p>
          </section>

          <section>
            <span>06</span>
            <h2>Your choices and rights</h2>

            <p>
              Subject to applicable South African law, you may request access
              to personal information held about you, ask for inaccurate
              information to be corrected, request deletion where appropriate,
              or object to certain processing.
            </p>

            <p>
              Requests can be sent to{" "}
              <a href="mailto:ndosseeyy@gmail.com">
                ndosseeyy@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <span>07</span>
            <h2>Cookies and analytics</h2>

            <p>
              NDOSSEEYY does not currently use advertising or behavioural
              tracking cookies on this website.
            </p>

            <p>
              If analytics, advertising technology or other tracking tools are
              introduced in future, this policy will be updated where
              necessary.
            </p>
          </section>

          <section>
            <span>08</span>
            <h2>Third-party links</h2>

            <p>
              The website may link to social platforms or other third-party
              websites. Their privacy practices are controlled by those
              platforms and are not governed by this Privacy Policy.
            </p>
          </section>

          <section>
            <span>09</span>
            <h2>Complaints</h2>

            <p>
              If you have a concern about how your personal information is
              handled, please contact me first so that I can address it.
            </p>

            <p>
              You may also lodge a complaint with the Information Regulator of
              South Africa if you believe your personal information has been
              processed in a way that violates POPIA.
            </p>

            <p>
              Information Regulator:
              <br />
              <a href="mailto:POPIAComplaints@inforegulator.org.za">
                POPIAComplaints@inforegulator.org.za
              </a>
            </p>
          </section>

          <section>
            <span>10</span>
            <h2>Changes to this policy</h2>

            <p>
              This Privacy Policy may be updated as the website, services or
              technologies used by NDOSSEEYY change. The latest version will
              always appear on this page.
            </p>
          </section>

          <section>
            <span>11</span>
            <h2>Contact</h2>

            <p>
              Questions about this Privacy Policy or your personal information
              can be sent to:
            </p>

            <a href="mailto:ndosseeyy@gmail.com">
              ndosseeyy@gmail.com
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Privacy;