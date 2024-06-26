import { FormData, FormElement } from "@/types/ComponentsInterfaces";

export const renderElement = (
  element: FormElement,
  formData: FormData,
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
) => {
  switch (element.type) {
    case "text":
      return (
        <input
          type={element.type}
          id={element.id}
          name={element.name}
          required={element.required}
          value={formData[element.name] as string}
          onChange={handleChange}
        />
      );
    case "email":
      return (
        <input
          type={element.type}
          id={element.id}
          name={element.name}
          required={element.required}
          value={formData![element.name] as string}
          onChange={handleChange}
        />
      );
    case "textarea":
      return (
        <textarea
          cols={element.cols}
          rows={element.rows}
          minLength={element.minLength}
          id={element.id}
          name={element.name}
          required={element.required}
          value={formData![element.name] as string}
          onChange={handleChange}
        ></textarea>
      );
    case "checkbox":
      return (
        <input
          type={element.type}
          id={element.id}
          name={element.name}
          required={element.required}
          checked={formData![element.name] as boolean}
          onChange={handleChange}
        />
      );
    default:
      return null;
  }
};
