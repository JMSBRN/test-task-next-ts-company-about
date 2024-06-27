import { FormData, FormElement } from "@/types/ComponentsInterfaces";
import { renderElement } from "@/utils/componentUtils";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ContactForm = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    agreement: false,
  });
  const formElements: FormElement[] = [
    {
      type: "text",
      id: "name",
      name: "name",
      required: true,
    },
    {
      type: "email",
      id: "email",
      name: "email",
      required: true,
    },
    {
      type: "textarea",
      cols: 30,
      rows: 10,
      minLength: 10,
      id: "message",
      name: "message",
      required: true,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      {
        push("/thanks");
      }
      console.log(formData);
    }
  };

  return (
    <form
      id="contactForm"
      action="/thanks"
      method="post"
      onSubmit={handleSubmit}
    >
      {formElements.map((element, index) => (
        <>
          <label key={index} htmlFor={element.id}>
            {element.name.charAt(0).toUpperCase() + element.name.slice(1)}:
          </label>
          {renderElement(element, formData, handleChange)}
        </>
      ))}
      <div className="checkbox-container">
        <input type="checkbox" id="agreement" name="agreement" required />
        <label htmlFor="agreement">
          I agree to the <Link href="/policy">privacy policy</Link> and{" "}
          <Link href="/terms">terms and conditions</Link>
        </label>
      </div>
      <button className="button" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
