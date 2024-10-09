import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Students from './components/students';

const AboutPage: React.FC<Partial<PageProps>> = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Students />
    </div>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
