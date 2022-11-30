import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Gauransh's personal website. Senior undergraduate at IIT Delhi, " +
      "Incoming Member of technical staff at Adobe Systems India"
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About this site</Link>
          </h2>
          <p>
            This website is repository for my projects, resume and random facts.
          </p>
        </div>
      </header>
      <p>
        Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/resume">resume</Link>,{" "}
        <Link to="/projects">projects</Link>, view{" "}
        <Link to="/stats">site statistics</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {" "}
        This website is forked from{" "}
        <a href="https://github.com/mldangelo/personal-site">
          Michael&apos;s repository
        </a>
        .
      </p>
    </article>
  </Main>
);

export default Index;
