import Image from "next/image";
const Services: React.FC = () => {
  return (
    <>
      <section id="services">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Residential Design</h3>
          <div className="bottom-content">
            <Image
              width={100}
              height={100}
              src={require("../public/images/direction2-icon.png")}
              alt="Residential Design"
              loading="lazy"
            />
            <p>
              We specialize in creating minimalist residential spaces that are
              both functional and aesthetically pleasing. Our team works closely
              with homeowners to design interiors that reflect their personal
              style while promoting a sense of calm and well-being.
            </p>
          </div>
        </div>
        <div className="service">
          <h3>Commercial Design</h3>
          <div className="bottom-content">
            <Image
              width={100}
              height={100}
              src={require("../public/images/direction3-icon.png")}
              alt="Commercial Design"
              loading="lazy"
            />
            <p>
              Our commercial design services aim to transform workplaces into
              inspiring and efficient environments. We focus on clean lines,
              open spaces, and natural light to create productive and enjoyable
              spaces for businesses of all sizes.
            </p>
          </div>
        </div>
        <div className="service">
          <h3>Public Spaces</h3>
          <div className="bottom-content">
            <Image
              width={100}
              height={100}
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
              width={100}
              height={100}
              src={require("../public/images/direction5-icon.png")}
              alt="Interior Styling"
              priority={true}
            />
            <p>
              Our interior styling services focus on the finer details of
              design, including furniture selection, color schemes, and decor.
              We help clients achieve a cohesive and harmonious look that aligns
              with the principles of minimalism.
            </p>
          </div>
        </div>
        <div className="service">
          <h3>Consultation Services</h3>
          <div className="bottom-content">
            <Image
              width={100}
              height={100}
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
            <p>Ideal for medium-sized projects with additional design needs.</p>
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
    </>
  );
};

export default Services;
