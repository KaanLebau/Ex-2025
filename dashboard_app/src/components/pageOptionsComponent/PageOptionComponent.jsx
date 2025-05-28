/** @format */

import "./pageOptionComponent.scss";
import { useState, useEffect } from "react";

export function PageOptionComponent({
  options,
  storageKey,
  selection,
  parentActive,
}) {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem(storageKey) || null
  );

  useEffect(() => {
    if (selectedOption) {
      localStorage.setItem(storageKey, selectedOption);
      selection(selectedOption);
    }
  }, [selectedOption, storageKey]);

  function getOptions() {
    return options.map((opt, index) => (
      <button
        key={index}
        onClick={() => setSelectedOption(opt)}
        className={`option ${selectedOption === opt ? "active" : ""}`}
      >
        {opt}
      </button>
    ));
  }
  return <div className="pageOptionComponentContainer">{getOptions()}</div>;
}
