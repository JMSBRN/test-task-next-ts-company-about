import Button from "@/components/Button";
import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <section id="no-found">
        <div className="not-found__container">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for could not be found.</p>
          <p>Please check the URL for any mistakes or try the following:</p>
          <ul>
            <li>
              <Button path={"/"} text={"returnToHome"} />
            </li>
            <li>Use the navigation menu above to find the desired page</li>
            <li>Contact the website administrator for assistance</li>
          </ul>
          <p>We apologize for any inconvenience caused.</p>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
