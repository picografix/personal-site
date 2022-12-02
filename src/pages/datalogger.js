import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";

// uses babel to load contents of file
const markdown = raw("../data/datalogger.md");

const count = markdown
  .split(/\s+/)
  .map((s) => s.replace(/\W/g, ""))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const datalogger = () => (
  <Main title="datalogger-project" description="Learn about datalogger project">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/project-datalogger">Datalogger assignment</Link>
          </h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default datalogger;
