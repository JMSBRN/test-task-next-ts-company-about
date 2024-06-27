import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

function Thanks() {
  return (
    <>
      <section id="thanks">
        <div className="thanks__container">
          <h2>Thank You!</h2>
          <p>
            We appreciate your trust in our creative services. Your project is
            important to us, and we look forward to delivering exceptional
            results.
          </p>
          <Button path={"/"} text={"returnToHome"} />
        </div>
      </section>
    </>
  );
}

export default Thanks;
