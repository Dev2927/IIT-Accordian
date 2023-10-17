import React, { useState } from "react";

function Question({ question }) {
  const initiallyOpen = question.id === 1 || question.id === 2;
  const [open, setOpen] = useState(initiallyOpen);

  const contentWithLineBreaks = question.content
    ? question.content.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    : null;

  return (
    <section>
      <div className={open ? "open" : "closed"}>
        <h2>{question.title}</h2>
        <button onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
      </div>
      {open && <p>{contentWithLineBreaks}</p>}
    </section>
  );
}

export default Question;
