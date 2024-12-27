import React, { useState } from "react";

function TApp() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Update state with input value
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name} // Controlled input value
          onChange={handleChange} // Event handler
        />
      </label>
      <p>Hello, {name}!</p>
    </div>
  );
}

export default TApp;
