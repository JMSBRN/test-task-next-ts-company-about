function Contact() {
  return (
    <>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          We did love to hear from you! Whether you have a question about our
          services, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
        <form id="contactForm" action="thanks.html" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea
            cols={30}
            rows={10}
            minLength={10}
            id="message"
            name="message"
            required
          ></textarea>

          <div className="checkbox-container">
            <input type="checkbox" id="agreement" name="agreement" required />
            <label htmlFor="agreement">
              I agree to the <a href="policy.html">privacy policy</a> and
              <a href="terms.html">terms and conditions</a>.
            </label>
          </div>

          <button className="button" type="submit">
            Send
          </button>
        </form>

        <div className="contact-info">
          <p>
            <a href="mailto:info@example.com">
              <strong>Email:</strong>info@example.com
            </a>
          </p>
          <p>
            <a href="tel:+48 123 456-7890">
              <strong>Phone:</strong>+48 (123) 456-7890
            </a>
          </p>
          <p>
            <strong>Address:</strong> 123 Main St, City, Country
          </p>
        </div>
        <div className="map">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468125!3d37.77492977975968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b6b9d%3A0x4c4b8e8e8e8e8e8e!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1593790820742!5m2!1sen!2s"
            width="80%"
            height="auto"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </section>
      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is minimalism in interior design?</h3>
          <p>
            Minimalism in interior design focuses on simplicity, functionality,
            and the use of clean lines. It emphasizes a clutter-free environment
            with a neutral color palette and carefully selected furnishings to
            create a serene and functional space.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do I start a project with your design studio?</h3>
          <p>
            Getting started is easy! Simply contact us through our website or
            sign up for a consultation. We will discuss your needs, preferences,
            and budget to tailor a design plan that suits you.
          </p>
        </div>
        <div className="faq-item">
          <h3>What is the typical timeline for a project?</h3>
          <p>
            The timeline for a project varies depending on its size and
            complexity. Generally, smaller projects can take a few weeks, while
            larger projects may take several months. We will provide a detailed
            timeline during the initial consultation.
          </p>
        </div>
        <div className="faq-item">
          <h3>Do you offer sustainable design options?</h3>
          <p>
            Yes, we are committed to sustainability and offer eco-friendly
            design options. We can incorporate sustainable materials,
            energy-efficient lighting, and other green practices into your
            project.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can you work with my existing furniture?</h3>
          <p>
            Absolutely! We can incorporate your existing furniture into the new
            design. Our goal is to create a cohesive and functional space that
            reflects your style and meets your needs.
          </p>
        </div>
        <div className="faq-item">
          <h3>What is the cost of your design services?</h3>
          <p>
            The cost of our design services depends on the scope of the project
            and the selected pricing plan. We offer various plans to suit
            different budgets. Please refer to our Pricing Plans section for
            more details.
          </p>
        </div>
        <div className="faq-item">
          <h3>How involved will I be in the design process?</h3>
          <p>
            We believe in a collaborative approach and encourage our clients to
            be as involved as they wish. Your input is valuable, and we will
            work closely with you to ensure the final design meets your
            expectations.
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
