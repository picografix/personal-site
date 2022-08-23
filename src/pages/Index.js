import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Gauransh's personal website. Senior Undergraduate at Indian Institute of Technology Delhi, interested in products, automation and design"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Portfolio website to showcase. projects,resume and facts!
          </p>
        </div>
      </header>
      <p>Welcome to our website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/personal/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
