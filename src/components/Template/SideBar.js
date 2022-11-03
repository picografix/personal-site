import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Gauransh Soni</h2>
        <p>
          <a href="mailto:gauranshiitd@gmail.com">gauranshiitd@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Gauransh. I design, I dream & I code. I am a senior
        undergradute at <a href="https://iitd.ac.in">IIT Delhi</a>, and upcoming
        Member of Technical Staff at{" "}
        <a href="https://adobe.com">Adobe Systems</a> India.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Gauransh Soni <Link to="/">picografix.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
