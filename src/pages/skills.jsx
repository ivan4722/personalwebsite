import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function Skills() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">
        My Skills
      </h1>
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <p>
        I have been programming since I was 10 years old (Python in Minecraft). Here are some of my skills:
      </p>
      <ul>
        <li>
          <strong>🖥️Programming Languages: </strong>Python, C, Java, JavaScript, Kotlin, HTML/CSS, mySQL
        </li>
        <li>
          <strong>🚀Technologies: </strong> ReactJS, React Router, API, JSON, Linux/Unix, Shell, Pandas/NumPy, MongoDB, ExpressJS, Websockets, PyTorch, TensorFlow, Flask, HTTP
        </li>
        <li>
          <strong>🔁Workflow: </strong>Git, CI/CD, AWS, Agile, OOP principles, Teamwork/Communication
        </li>
      </ul>

    </div>
  );
}
