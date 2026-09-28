import React from "react";
import './App.css'
import Scrolling from "./components/Scrolling";

const App = () => {
  return (
    <div className="page">
        <h1>My Portfolio</h1>

        <section>
          <h2>Home</h2>
          <p>
            Welcome to my portfolio. I am a frontend developer interested in
            building modern and user-friendly web applications.
          </p>
        </section>

        <section>
          <h2>About Me</h2>
          <p>
            I work with HTML, CSS, JavaScript and React. I enjoy creating
            responsive websites and learning new technologies.
          </p>
        </section>

        <section>
          <h2>My Skills</h2>
          <p>HTML, CSS, JavaScript, React.js, Git, GitHub and REST APIs.</p>
        </section>

        <section>
          <h2>My Projects</h2>
          <p>
            I have created ecommerce applications, booking systems, dashboards
            and other React-based projects.
          </p>
        </section>

        <section>
          <h2>Experience</h2>
          <p>
            I am currently improving my frontend and MERN stack development
            skills by working on real-world projects.
          </p>
        </section>

        <section>
          <h2>Learning</h2>
          <p>
            Currently I am focusing on JavaScript, React, Node.js, Express,
            MongoDB and DSA.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            You can contact me for frontend development projects and
            opportunities.
          </p>
        </section>

        <section>
          <h2>Thank You</h2>
          <p>
            Thanks for visiting my page. Keep scrolling to test the Scroll to
            Top button.
          </p>
        </section>

        <Scrolling/>
      </div>
  );
};

export default App;