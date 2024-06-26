import Image from "next/image";
function HomePage() {
  return (
    <div>
      <main>
        <div className="modal" id="modal">
          <div className="modal-content">
            <a href="index.html#hero">Home</a>
            <a href="index.html#about">About</a>
            <a href="index.html#services">Services</a>
            <a href="index.html#testimonials">Testimonials</a>
            <a href="index.html#contact">Contact</a>
          </div>
        </div>
        <section id="hero">
          <h1>
            Pure Design, <span>Pure Living.</span>
          </h1>
          <p>Elevate Your Space with Minimalist Design.</p>
          <Image
            width={600}
            height={600}
            src={require("../public/images/hero_bg.jpg")}
            alt="Hero Image"
            loading="lazy"
          />
          <a className="button" href="#services">
            Get Started
          </a>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>
            Our mission is to create serene, functional, and aesthetically
            pleasing spaces that embody the principles of minimalism. We believe
            in the power of simplicity and strive to design environments that
            are both beautiful and practical, enhancing the quality of life for
            our clients.
          </p>
          <p>
            We started in 2015 with a vision to redefine modern living through
            minimalist design. Over the years, we have grown into a team of
            passionate designers, architects, and artists who are dedicated to
            transforming spaces into tranquil sanctuaries. Our work spans
            residential, commercial, and public spaces, all unified by our
            commitment to minimalism.
          </p>
          <p>
            Our approach is rooted in a deep understanding of our clients needs
            and a meticulous attention to detail. We collaborate closely with
            our clients to ensure that every project is tailored to their unique
            preferences and lifestyle. From concept to completion, we are
            committed to delivering exceptional design solutions that stand the
            test of time.
          </p>
          <p>
            We take pride in our sustainable practices and strive to use
            eco-friendly materials and techniques in all our projects. Our goal
            is to create spaces that not only look good but also feel good,
            promoting a sense of calm and well-being.
          </p>
          <h2>Meet Our Team</h2>
          <p>
            Our team is a diverse group of talented professionals who share a
            passion for minimalism and design excellence. From experienced
            architects to innovative interior designers, each member brings a
            unique perspective and skill set to the table. Together, we work
            seamlessly to bring our clients visions to life.
          </p>
          <p>
            We invite you to explore our portfolio and see the transformative
            power of minimalist design. Whether you are looking to redesign your
            home, office, or any other space, we are here to help you create a
            place that is truly your own.
          </p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Residential Design</h3>
            <div className="bottom-content">
              <Image
                width={200}
                height={200}
                src={require("../public/images/direction2-icon.png")}
                alt="Residential Design"
                loading="lazy"
              />
              <p>
                We specialize in creating minimalist residential spaces that are
                both functional and aesthetically pleasing. Our team works
                closely with homeowners to design interiors that reflect their
                personal style while promoting a sense of calm and well-being.
              </p>
            </div>
          </div>
          <div className="service">
            <h3>Commercial Design</h3>
            <div className="bottom-content">
              <Image
                width={200}
                height={200}
                src={require("../public/images/direction3-icon.png")}
                alt="Commercial Design"
                loading="lazy"
              />
              <p>
                Our commercial design services aim to transform workplaces into
                inspiring and efficient environments. We focus on clean lines,
                open spaces, and natural light to create productive and
                enjoyable spaces for businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="service">
            <h3>Public Spaces</h3>
            <div className="bottom-content">
              <Image
                width={200}
                height={200}
                src={require("../public/images/direction4-icon.png")}
                alt="Public Spaces"
                loading="lazy"
              />
              <p>
                We design public spaces that are inviting and functional, using
                minimalist principles to create areas that encourage community
                interaction and engagement. From parks to public buildings, our
                designs enhance the user experience while maintaining simplicity
                and elegance.
              </p>
            </div>
          </div>
          <div className="service">
            <h3>Interior Styling</h3>
            <div className="bottom-content">
              <Image
                width={200}
                height={200}
                src={require("../public/images/direction5-icon.png")}
                alt="Interior Styling"
                loading="lazy"
              />
              <p>
                Our interior styling services focus on the finer details of
                design, including furniture selection, color schemes, and decor.
                We help clients achieve a cohesive and harmonious look that
                aligns with the principles of minimalism.
              </p>
            </div>
          </div>
          <div className="service">
            <h3>Consultation Services</h3>
            <div className="bottom-content">
              <Image
                width={200}
                height={200}
                src={require("../public/images/office_people.png")}
                alt="Consultation Services"
                loading="lazy"
              />
              <p>
                We offer design consultation services for clients who need
                professional guidance on their projects. Our experts provide
                valuable insights and recommendations to help clients achieve
                their design goals while staying true to minimalist principles.
              </p>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <Image
              width={50}
              height={50}
              src={require("../public/images/customer1.png")}
              alt="Customer 1"
              loading="lazy"
            />
            <h3>John Doe</h3>
            <p>
              The team at the studio transformed our home into a serene and
              beautiful space. Their attention to detail and commitment to
              minimalism made the entire process enjoyable and stress-free. We
              could not be happier with the results
            </p>
          </div>
          <div className="testimonial">
            <Image
              width={50}
              height={50}
              src={require("../public/images/customer2.png")}
              alt="Customer 2"
              loading="lazy"
            />
            <h3>Jane Smith</h3>
            <p>
              Highly recommend! The designers understood our vision perfectly
              and created a workspace that is both functional and inspiring.
              Their minimalist approach has significantly improved our
              productivity and overall office atmosphere.
            </p>
          </div>
          <div className="testimonial">
            <Image
              width={50}
              height={50}
              src={require("../public/images/customer4.png")}
              alt="Customer 3"
              loading="lazy"
            />
            <h3>Emily Johnson</h3>
            <p>
              Fantastic experience from start to finish. The studios sustainable
              design solutions were exactly what we were looking for. They
              managed to create a beautiful and eco-friendly space that we
              absolutely love. Thank you for your exceptional work!
            </p>
          </div>
          <div className="testimonial">
            <Image
              width={50}
              height={50}
              src={require("../public/images/customer3.png")}
              alt="Customer 4"
              loading="lazy"
            />
            <h3>Michael Brown</h3>
            <p>
              The interior styling services provided by the studio were
              top-notch. They helped us select the perfect furniture and decor
              to complement our minimalist design. Our home now feels more
              cohesive and tranquil than ever before.
            </p>
          </div>
          <div className="testimonial">
            <Image
              width={50}
              height={50}
              src={require("../public/images/customer5.png")}
              alt="Customer 5"
              loading="lazy"
            />
            <h3>Sarah Wilson</h3>
            <p>
              We are thrilled with the public space design the studio created
              for our community center. The space is inviting, functional, and
              beautifully minimalist. It has become a favorite spot for our
              residents, and we receive compliments on it all the time.
            </p>
          </div>
        </section>
        <section id="case-studies">
          <h2>Success Stories</h2>
          <div className="case-studies__slider-container">
            <div className="case-study slides">
              <h3>Modern Urban Residence</h3>
              <p>
                Overview: Our team was tasked with transforming a dated urban
                apartment into a sleek, modern residence. The client desired a
                minimalist space that maximized natural light and offered a
                sense of tranquility amidst the bustling city.
              </p>
              <p>
                Results: We achieved this by using a neutral color palette,
                clean lines, and multifunctional furniture. The open-plan layout
                and strategically placed mirrors enhanced the sense of space and
                light. The client was thrilled with the transformation, noting a
                significant improvement in their overall living experience.
              </p>
            </div>
            <div className="case-study slides">
              <h3>Eco-Friendly Office Space</h3>
              <p>
                Overview: A growing tech company approached us to redesign their
                office space with a focus on sustainability and employee
                well-being. They wanted an environment that reflected their
                commitment to eco-friendly practices and fostered creativity and
                collaboration.
              </p>
              <p>
                Results: We incorporated sustainable materials, energy-efficient
                lighting, and plenty of green plants to create a healthy
                workspace. The open layout and minimalist design elements
                promoted a sense of calm and productivity. The company reported
                increased employee satisfaction and productivity following the
                redesign.
              </p>
            </div>
            <div className="case-study slides">
              <h3>Community Center Revamp</h3>
              <p>
                Overview: The local community center needed a makeover to better
                serve its diverse user base. The goal was to create a welcoming
                and versatile space that could accommodate various activities
                and events while maintaining a minimalist aesthetic.
              </p>
              <p>
                Results: We redesigned the center with flexible, modular
                furniture and a neutral color scheme that could easily adapt to
                different uses. The inclusion of natural light and open spaces
                made the center feel more inviting. The community has since seen
                a significant increase in attendance and positive feedback from
                residents.
              </p>
            </div>
            <div className="case-study slides">
              <h3>Luxury Minimalist Home</h3>
              <p>
                Overview: A family sought our expertise to design their new home
                with a luxurious yet minimalist approach. They wanted a space
                that was elegant, functional, and easy to maintain.
              </p>
              <p>
                Results: We used high-quality materials, custom-built furniture,
                and a monochromatic color palette to create a sophisticated and
                timeless look. The seamless integration of indoor and outdoor
                spaces enhanced the homes overall appeal. The family was
                delighted with their new home, praising its beauty and
                practicality.
              </p>
            </div>
            <div className="case-study slides">
              <h3>Retail Store Transformation</h3>
              <p>
                Overview: A boutique clothing store needed a fresh look to
                attract more customers and improve the shopping experience. The
                owner wanted a minimalist design that highlighted the products
                and provided a serene shopping environment.
              </p>
              <p>
                Results: We redesigned the store with sleek display units, ample
                lighting, and a neutral color scheme to let the products shine.
                The clutter-free layout and thoughtful design elements created a
                calm and inviting atmosphere. The store has since seen an
                increase in foot traffic and sales.
              </p>
            </div>
          </div>
          <br />
          <button className="button" id="nextBtn">
            Next
          </button>
          <button className="button" id="prevBtn">
            Prev
          </button>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </section>
        <section id="cta">
          <h2>Ready to Transform Your Space?</h2>
          <p>
            Whether you are looking to redesign your home, office, or any other
            space, our team of experts is here to help you achieve your
            minimalist dreams. Lets create a serene and functional environment
            together.
          </p>
          <div className="cta-buttons">
            <a
              className="button"
              href="#contact
          "
            >
              Sign Up Now
            </a>
            <a
              className="button"
              href="#contact
          "
            >
              Contact Us
            </a>
          </div>
        </section>
        <section id="features">
          <h2>Our Features</h2>
          <div className="feature">
            <h3>Custom Design Solutions</h3>
            <p>
              We create personalized design solutions that reflect your style
              and preferences, ensuring your space is both beautiful and
              functional.
            </p>
          </div>

          <div className="feature">
            <h3>Sustainable Practices</h3>
            <p>
              Our commitment to sustainability means we use eco-friendly
              materials and practices in all our projects, promoting a healthier
              environment.
            </p>
          </div>

          <div className="feature">
            <h3>Expert Consultation</h3>
            <p>
              Our team of experienced designers offers expert consultation to
              guide you through every step of the design process.
            </p>
          </div>

          <div className="feature">
            <h3>Innovative Technology</h3>
            <p>
              We leverage the latest technology to bring your vision to life,
              providing detailed visualizations and efficient project
              management.
            </p>
          </div>
          <a href="index.html#contact" className="button">
            Contact Us
          </a>
        </section>
        <section id="pricing">
          <h2>Pricing Plans</h2>
          <p>
            Choose the perfect plan for your needs. Our transparent pricing
            ensures you get the best value for your investment.
          </p>
          <div className="pricing__plans">
            <div className="plan">
              <h3>Basic Plan</h3>
              <p>Perfect for small projects and budget-conscious clients.</p>
              <ul>
                <li>Initial consultation</li>
                <li>Basic design concept</li>
                <li>Up to 2 revisions</li>
                <li>Email support</li>
              </ul>
              <p className="price">$500</p>
            </div>
            <div className="plan">
              <h3>Standard Plan</h3>
              <p>
                Ideal for medium-sized projects with additional design needs.
              </p>
              <ul>
                <li>Initial consultation</li>
                <li>Comprehensive design concept</li>
                <li>Up to 5 revisions</li>
                <li>Phone and email support</li>
                <li>Material selection assistance</li>
              </ul>
              <p className="price">$1,500</p>
            </div>
            <div className="plan">
              <h3>Premium Plan</h3>
              <p>
                Best for large projects and clients seeking a full-service
                experience.
              </p>
              <ul>
                <li>Initial consultation</li>
                <li>Complete design concept</li>
                <li>Unlimited revisions</li>
                <li>Phone, email, and in-person support</li>
                <li>Material and furniture selection assistance</li>
                <li>Project management</li>
              </ul>
              <p className="price">$3,000</p>
            </div>
          </div>
          <div className="comparison-table">
            <h3>Compare Plans</h3>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Initial consultation</td>
                  <td>
                    <span className="comparison-table__pont"></span>
                  </td>
                  <td>
                    <span className="comparison-table__pont"></span>
                  </td>
                  <td>
                    <span className="comparison-table__pont"></span>
                  </td>
                </tr>
                <tr>
                  <td>Design concept</td>
                  <td>Basic</td>
                  <td>Comprehensive</td>
                  <td>Complete</td>
                </tr>
                <tr>
                  <td>Revisions</td>
                  <td>Up to 2</td>
                  <td>Up to 5</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>Email</td>
                  <td>Phone & Email</td>
                  <td>Phone, Email & In-Person</td>
                </tr>
                <tr>
                  <td>Material selection</td>
                  <td>-</td>
                  <td>
                    <span className="comparison-table__pont"></span>
                  </td>
                  <td>
                    <span className="comparison-table__pont"></span>
                  </td>
                </tr>
                <tr>
                  <td>Furniture selection</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <span className="comparison-table__pont"></span>
                  </td>
                </tr>
                <tr>
                  <td>Project management</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <span className="comparison-table__pont"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What is minimalism in interior design?</h3>
            <p>
              Minimalism in interior design focuses on simplicity,
              functionality, and the use of clean lines. It emphasizes a
              clutter-free environment with a neutral color palette and
              carefully selected furnishings to create a serene and functional
              space.
            </p>
          </div>
          <div className="faq-item">
            <h3>How do I start a project with your design studio?</h3>
            <p>
              Getting started is easy! Simply contact us through our website or
              sign up for a consultation. We will discuss your needs,
              preferences, and budget to tailor a design plan that suits you.
            </p>
          </div>
          <div className="faq-item">
            <h3>What is the typical timeline for a project?</h3>
            <p>
              The timeline for a project varies depending on its size and
              complexity. Generally, smaller projects can take a few weeks,
              while larger projects may take several months. We will provide a
              detailed timeline during the initial consultation.
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
              Absolutely! We can incorporate your existing furniture into the
              new design. Our goal is to create a cohesive and functional space
              that reflects your style and meets your needs.
            </p>
          </div>
          <div className="faq-item">
            <h3>What is the cost of your design services?</h3>
            <p>
              The cost of our design services depends on the scope of the
              project and the selected pricing plan. We offer various plans to
              suit different budgets. Please refer to our Pricing Plans section
              for more details.
            </p>
          </div>
          <div className="faq-item">
            <h3>How involved will I be in the design process?</h3>
            <p>
              We believe in a collaborative approach and encourage our clients
              to be as involved as they wish. Your input is valuable, and we
              will work closely with you to ensure the final design meets your
              expectations.
            </p>
          </div>
        </section>
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
      </main>
    </div>
  );
}

export default HomePage;
