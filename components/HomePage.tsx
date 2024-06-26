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
      </main>
    </div>
  );
}

export default HomePage;
