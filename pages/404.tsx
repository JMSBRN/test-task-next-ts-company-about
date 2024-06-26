import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <section id="thanks">
        <div className="thanks__container">
          <h1>Not Found Page</h1>
          <h2>Thank You!</h2>
          <p>
            We appreciate your trust in our creative services. Your project is
            important to us, and we look forward to delivering exceptional
            results.
          </p>
          <div className="button">
            <Link href="/">Return to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
