import React, { useState } from "react";


function MyForm() {
    const [textarea, setTextarea] = useState(
      "The content of a textarea goes in the value attribute "

    );
  
    const handleChange = (event) => {
      setTextarea(event.target.value)
    }
  
    return (
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    )
  }

export default MyForm;
