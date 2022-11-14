import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
<<<<<<< HEAD
    description={"Gauransh's personal website. Senior undergraduate at IIT Delhi, "
    + 'Incoming Member of technical staff at Adobe Systems India'}
=======
    description={"Gauransh's personal website. Senior Undergraduate at Indian Institute of Technology Delhi, interested in products, automation and design"}
>>>>>>> e8dc2ce76b07ce2490a2eb4508e7344f7800479e
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
<<<<<<< HEAD
            This website is repository for my projects, resume and random facts.
=======
            Portfolio website to showcase. projects,resume and facts!
>>>>>>> e8dc2ce76b07ce2490a2eb4508e7344f7800479e
          </p>
        </div>
      </header>
      <p>Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
<<<<<<< HEAD
      <p> This website is forked from <a href="https://github.com/mldangelo/personal-site">Michael&apos;s repository</a>.</p>
=======
      <p> Source available <a href="https://github.com/personal/personal-site">here</a>.</p>
>>>>>>> e8dc2ce76b07ce2490a2eb4508e7344f7800479e
    </article>
  </Main>
);

export default Index;
