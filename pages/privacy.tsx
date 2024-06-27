import Link from "next/link";
import React from "react";

function Privacy() {
  return (
    <div>
      <section id="privacy">
        <h1>Privacy Policy</h1>
        <p>
          Welcome to our Privacy Policy page. When you use our web services, you
          trust us with your information. This Privacy Policy is meant to help
          you understand what data we collect, why we collect it, and what we do
          with it. This is important; we hope you will take time to read it
          carefully.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information to provide better services to all our users. We
          collect information in the following ways:
        </p>
        <ul>
          <li>
            Information you give us. For example, our services require you to
            sign up for an account. When you do, we’ll ask for personal
            information, like your name, email address, telephone number, or
            credit card.
          </li>
          <li>
            Information we get from your use of our services. We collect
            information about the services that you use and how you use them,
            like when you visit a website that uses our advertising services or
            you view and interact with our ads and content.
          </li>
        </ul>
        <h2>How We Use Information We Collect</h2>
        <p>
          We use the information we collect from all of our services to provide,
          maintain, protect, and improve them, to develop new ones, and to
          protect our users. We also use this information to offer you tailored
          content – like giving you more relevant search results and ads.
        </p>
        <h2>Transparency and Choice</h2>
        <p>
          People have different privacy concerns. Our goal is to be clear about
          what information we collect so that you can make meaningful choices
          about how it is used. For example, you can:
        </p>
        <ul>
          <li>
            Review and control certain types of information tied to your
            account.
          </li>
          <li>
            Adjust how the Profile associated with your account appears to
            others.
          </li>
          <li>Control who you share information with.</li>
          <li>Take information out of many of our services.</li>
        </ul>
        <h2>Information You Share</h2>
        <p>
          Many of our services let you share information with others. Remember
          that when you share information publicly, it may be indexable by
          search engines. Our services provide you with different options on
          sharing and removing your content.
        </p>
        <h2>Accessing and Updating Your Personal Information</h2>
        <p>
          Whenever you use our services, we aim to provide you with access to
          your personal information. If that information is wrong, we strive to
          give you ways to update it quickly or to delete it – unless we have to
          keep that information for legitimate business or legal purposes.
        </p>
        <h2>Compliance and Cooperation with Regulatory Authorities</h2>
        <p>
          We regularly review our compliance with our Privacy Policy. We also
          adhere to several self-regulatory frameworks. When we receive formal
          written complaints, we will contact the person who made the complaint
          to follow up.
        </p>
        <h2>Changes</h2>
        <p>
          Our Privacy Policy may change from time to time. We will not reduce
          your rights under this Privacy Policy without your explicit consent.
          We will post any privacy policy changes on this page and, if the
          changes are significant, we will provide a more prominent notice.
        </p>
        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We and our partners use various technologies to collect and store
          information when you visit our services, and this may include using
          cookies or similar technologies to identify your browser or device. We
          also use these technologies to collect and store information when you
          interact with services we offer to our partners, such as advertising
          services or features that may appear on other sites.
        </p>
        <h2>Data Security</h2>
        <p>
          We work hard to protect our users from unauthorized access to or
          unauthorized alteration, disclosure, or destruction of information we
          hold. In particular:
        </p>
        <ul>
          <li>We encrypt many of our services using SSL.</li>
          <li>
            We offer you two-step verification when you access your account.
          </li>
          <li>
            We review our information collection, storage, and processing
            practices, including physical security measures, to guard against
            unauthorized access to systems.
          </li>
          <li>
            We restrict access to personal information to our employees,
            contractors, and agents who need to know that information in order
            to process it for us, and who are subject to strict contractual
            confidentiality obligations and may be disciplined or terminated if
            they fail to meet these obligations.
          </li>
        </ul>
        <h2>Third-Party Links</h2>
        <p>
          Our services may include links to other websites whose privacy
          practices may differ from those of our services. If you submit
          personal information to any of those sites, your information is
          governed by their privacy policies. We encourage you to carefully read
          the privacy policy of any website you visit.
        </p>
        <h2>Childrens Privacy</h2>
        <p>
          Our services are not intended for use by children under the age of 13.
          We do not knowingly collect personal information from children under
          13. If we learn that we have collected personal information of a child
          under 13, we will take steps to delete such information from our files
          as soon as possible.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <address>
          Design Studio
          <br />
          123 Creative Avenue
          <br />
          Art City, AC 12345
          <br />
          <Link href="mailto:info@example.com">
            <strong>Email:</strong>info@example.com
          </Link>
          <br />
          Phone: (123) 456-7890
        </address>
      </section>
    </div>
  );
}

export default Privacy;
