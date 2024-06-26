import React from "react";

function SelectLanguages({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="select-languages">
      <select value={value} onChange={onChange}>
        <option value="en">En</option>
        <option value="ru">Ru</option>
      </select>
    </div>
  );
}

export default SelectLanguages;
