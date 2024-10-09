import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const headingAccentStyles = {
  color: '#663399',
};

const IndexPage: React.FC<Partial<PageProps>> = () => {
  return (
    <main style={pageStyles} className="max-w-screen-xl mx-auto p-4">
      <h1>
        Congratulations
        <br />
        <span style={headingAccentStyles}>
          — you just made a Gatsby site! 🎉🎉🎉
        </span>
      </h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
